"use client";
import { useState } from "react";
import Tiptap from "./Tiptap";
import { v4 as uuidv4 } from "uuid";

const NotesPicker = () => {
  const [content, setContent] = useState<string>("");
  const [contentText, setContentText] = useState<string>("");

  const handleContentChange = (newContent: any) => {
    setContent(newContent);
    console.log(newContent);
  };

  const handleSubmit = (e: any) => {
    const data = {
      id: uuidv4(),
      content: content,
    };
    console.log(data);
    const existingDataString = localStorage.getItem("myData");
    const existingData = existingDataString
      ? JSON.parse(existingDataString)
      : [];
    const updatedData = [...existingData, data];
    localStorage.setItem("myData", JSON.stringify(updatedData));
    setContent("");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mx-auto mb-10 grid w-full max-w-3xl place-items-center pt-10"
    >
      <h1 className="mb-10 text-center text-3xl text-white">
        Rich Text Editor
      </h1>
      <Tiptap
        content={content}
        setContentText={setContentText}
        contentText={contentText}
        onChange={(newContent: string) => handleContentChange(newContent)}
      />
    </form>
  );
};

export default NotesPicker;
