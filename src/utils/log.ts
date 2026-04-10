import fs from "node:fs/promises";
import path from "node:path";

export function date() {
  return new Date().toLocaleDateString();
}

export default async function logEntry(msg: string) {
  const filePath = path.join(process.cwd(), "logs/learn.json");

  let data: Record<string, string> = {};

  try {
    const file = await fs.readFile(filePath, "utf-8");
    data = JSON.parse(file);
  } catch (err) {
    // file might not exist → start fresh
    data = {};
  }

  const newData = {
    ...data,
    [date()]: msg,
  };

  await fs.writeFile(filePath, JSON.stringify(newData, null, 2), "utf-8");

  console.log("Saved:", newData);
}

// call
logEntry("hello");