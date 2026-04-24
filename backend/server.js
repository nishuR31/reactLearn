import Fastify from 'fastify';
import cors from '@fastify/cors';
import mongoose from 'mongoose';
import Redis from 'ioredis';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 5000;
const MONGO_URI = process.env.MONGO_URI || process.env.REACTLEARN_MONGO_URI;
const REDIS_URL = process.env.REDIS_URL || process.env.REACTLEARN_REDIS_URL;

const fastify = Fastify({ logger: true });

await fastify.register(cors, { origin: true });

// Connect to MongoDB
if (!MONGO_URI) fastify.log.warn('MONGO_URI is not set. Mongo connection will likely fail.');
try {
  await mongoose.connect(MONGO_URI || 'mongodb://localhost:27017/reactlearn-backend');
  fastify.log.info('Connected to MongoDB');
} catch (err) {
  fastify.log.error('MongoDB connection error:', err.message || err);
}

// Connect to Redis
let redis;
try {
  redis = new Redis(REDIS_URL || undefined);
  redis.on('connect', () => fastify.log.info('Connected to Redis'));
  redis.on('error', (e) => fastify.log.warn('Redis error', e));
} catch (e) {
  fastify.log.warn('Redis initialization failed', e?.message || e);
}

// Simple Mongoose model
const IdeaSchema = new mongoose.Schema({
  text: { type: String, required: true },
  createdAt: { type: Date, default: () => new Date() },
});
const Idea = mongoose.model('Idea', IdeaSchema);

fastify.get('/health', async (request, reply) => {
  return { status: 'ok', time: Date.now() };
});

fastify.post('/ideas', async (request, reply) => {
  const { text } = request.body || {};
  if (!text) return reply.status(400).send({ error: 'text is required' });

  const idea = await Idea.create({ text });

  // cache a simple counter in redis
  try {
    if (redis) await redis.incr('ideas_count');
  } catch (e) {
    fastify.log.warn('Failed to increment redis counter', e?.message || e);
  }

  return reply.status(201).send({ id: idea._id, text: idea.text });
});

fastify.get('/ideas', async (request, reply) => {
  const items = await Idea.find().sort({ createdAt: -1 }).limit(50);
  return { items };
});

const start = async () => {
  try {
    await fastify.listen({ port: Number(PORT), host: '0.0.0.0' });
  } catch (err) {
    fastify.log.error(err);
    process.exit(1);
  }
};

start();
