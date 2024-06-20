"use client";
import { X } from "lucide-react";
import { useEffect, useState } from "react";
import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";
const Notes = () => {
  const [data, setData] = useState<any[]>([]);
  const colors = ["#ffcccc", "#ccffcc", "#ccccff", "#ffffcc", "#ffccff"];
  useEffect(() => {
    const notes = localStorage.getItem("myData");
    if (notes) {
      const notesContent = JSON.parse(notes);
      setData(notesContent);
    }
  }, []);

  const removeNote = (id: string) => {
    const updatedData = data.filter((item) => item.id !== id);
    setData(updatedData);
    localStorage.setItem("myData", JSON.stringify(updatedData));
  };

  return (
    <div className="mx-auto max-w-3xl">
      <ResponsiveMasonry columnsCountBreakPoints={{ 0: 1, 750: 2, 1024: 3 }}>
        <Masonry gutter="10px">
          {data.map((item, index) => (
            <div
              key={index}
              className="rounded-md shadow-md"
              style={{ backgroundColor: colors[index % colors.length] }}
            >
              <div className="flex flex-row items-center justify-between border-b-2 border-neutral-900 p-3 font-bold text-neutral-900">
                <h2>Note</h2>
                <X
                  className="spin-on-hover hover:cursor-pointer"
                  onClick={() => removeNote(item.id)}
                />
              </div>

              <div
                className="ProseMirror whitespace-pre-line rounded-lg p-3"
                style={{ whiteSpace: "pre-line" }}
                dangerouslySetInnerHTML={{ __html: item.content }}
              />
            </div>
          ))}
        </Masonry>
      </ResponsiveMasonry>
    </div>
  );
};

export default Notes;
