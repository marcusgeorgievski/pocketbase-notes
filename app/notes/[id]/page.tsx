import { Note } from "../page";

async function getNote(noteId: string) {
  const res = await fetch(
    `http://127.0.0.1:8090/api/collections/notes/records/${noteId}`,
    {
      next: { revalidate: 10 },
    }
  );
  const data = res.json();
  return data;
}

// async function generateStaticParams() {}

export default async function NotePage({ params }: any) {
  const note = await getNote(params.id);
  console.log(params);
  return (
    <div>
      <h1 className="mb-4 font-light">Note - {note.title}</h1>

      <Note title={note.title} content={note.content} />
    </div>
  );
}
