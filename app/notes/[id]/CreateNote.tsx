"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function CreateNote() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const router = useRouter();

  async function create() {
    await fetch("http://127.0.0.1:8090/api/collections/notes/records", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        content,
      }),
    });

    setTitle("");
    setContent("");

    router.refresh();
  }

  return (
    <form onSubmit={create} className="inline-flex flex-col border rounded">
      <h2 className="mb-3 font-light text-center">Create a Note</h2>

      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        className="px-1 mx-2 mb-2 border rounded border-slate-400"
      />

      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        className="px-1 mx-2 mb-2 border rounded border-slate-400"
      />

      <button>Create Note</button>
    </form>
  );
}
