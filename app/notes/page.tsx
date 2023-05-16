import Link from "next/link";
import CreateNote from "./[id]/CreateNote";

async function getNotes() {
  const res = await fetch(
    "http://127.0.0.1:8090/api/collections/notes/records",
    { cache: "no-store" }
  );
  const data = await res.json();
  // console.log(data);
  return data.items;
  // return data?.items as any[];
}

export default async function NotesPage({
  children,
}: {
  children: React.ReactNode;
}) {
  const notes = await getNotes();
  return (
    <div>
      <h1 className="mb-6 text-3xl font-light">Notes</h1>

      <section className="flex gap-6">
        {notes.map((note: any) => {
          return (
            <Link href={`/notes/${note.id}`}>
              <Note
                key={note.title}
                id={note.id}
                title={note.title}
                content={note.content}
              />
            </Link>
          );
        })}

        <CreateNote />
      </section>
    </div>
  );
}

export function Note({ title, content }: any) {
  return (
    <div className="w-48 p-2 border rounded border-slate-500">
      <h3 className="font-bold">{title}</h3>
      <p className="text-sm">{content}</p>
    </div>
  );
}
