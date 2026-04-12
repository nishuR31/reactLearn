import React, { useState } from "react";
import Button from "./ui/Button";

export function Contact() {
  const [data, setData] = useState<Record<string, string>>({});

  const handleData = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    const { name, value } = e.target;
    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSend = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.table(data);
  };

  return (
    <main>
      <form onSubmit={handleSend}>
        <p>
          <input
            id="name"
            placeholder="Name"
            name="name"
            type="text"
            onChange={handleData}
          />
        </p>

        <p>
          <input
            id="email"
            placeholder="email@xyz.com"
            name="email"
            type="email"
            onChange={handleData}
          />
        </p>

        <p>
          <textarea
            id="message"
            placeholder="Know about me?"
            name="message"
            rows={5}
            onChange={handleData}
          />
        </p>

        <Button
          type="submit"
          icon={"CornerDownLeft"}
          variant={"primary"}
          text={"Send"}
        />
      </form>
    </main>
  );
}
