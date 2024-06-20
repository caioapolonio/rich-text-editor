"use client";

import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Toolbar from "./Toolbar";
import Underline from "@tiptap/extension-underline";

const Tiptap = ({ content, onChange, contentText, setContentText }: any) => {
  const editor = useEditor({
    extensions: [StarterKit, Underline],
    editorProps: {
      attributes: {
        class:
          "p-4 border border-white text-gray-400 w-full font-medium text-[16px] rounded-md outline-none",
      },
    },
    onUpdate({ editor }) {
      onChange(editor.getHTML());
      setContentText(editor.getText());
    },
  });

  return (
    <div className="w-full">
      <Toolbar editor={editor} contentText={contentText} />
      <EditorContent style={{ whiteSpace: "pre-line" }} editor={editor} />
    </div>
  );
};

export default Tiptap;
