import fs from "node:fs/promises";
import path from "node:path";

export function date() {
  return new Date().toLocaleDateString();
}

export default async function logEntry(msg: string) {
  let currentDate = date();
  const logsDir = path.join(process.cwd(), "logs");
  const filePath = path.join(logsDir, "learn.json");

  // Ensure logs directory exists
  await fs.mkdir(logsDir, { recursive: true });

  let data: Record<string, string>[] = [];

  try {
    const file = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(file);
  } catch (err) {
    // file might not exist → start fresh
    // Only log error if it's not a file-not-found error
    if (err.code && err.code !== "ENOENT") {
      console.error(err);
    }
  }

  // Remove any duplicate entries for the current date
  data = data.filter(
    (dated) => !Object.prototype.hasOwnProperty.call(dated, currentDate),
  );

  // Check if the date exists in any entry (shouldn't after filter, but for safety)
  let entry = data.find((dated) =>
    Object.prototype.hasOwnProperty.call(dated, currentDate),
  );
  if (entry) {
    entry[currentDate] = entry[currentDate] + "\n" + msg;
  } else {
    data.push({ [currentDate]: msg });
  }

  await fs.writeFile(filePath, JSON.stringify(data, null, 2), "utf-8");

  console.log("Saved:", data);
}

// call
logEntry("hello");
