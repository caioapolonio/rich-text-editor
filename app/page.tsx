import Notes from "@/components/Notes";
import NotesPicker from "@/components/NotesPicker";

export default function Home() {
  return (
    <main className="min-h-screen w-full bg-neutral-900 p-4">
      <NotesPicker />
      <Notes />
    </main>
  );
}
