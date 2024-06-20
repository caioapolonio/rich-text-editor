"use client";

import React from "react";
import { type Editor } from "@tiptap/react";
import {
  Bold,
  Strikethrough,
  Italic,
  List,
  ListOrdered,
  Heading2,
  Underline,
  Quote,
  Undo,
  Redo,
  Code,
  Heading1,
} from "lucide-react";

type Props = {
  editor: Editor | null;
  contentText: string;
};

const Toolbar = ({ editor, contentText }: Props) => {
  if (!editor) {
    return null;
  }
  return (
    <div className="flex w-full items-center justify-between py-3">
      <div className="flex w-full flex-wrap items-center justify-start gap-5 lg:w-10/12">
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBold().run();
          }}
          className={
            editor.isActive("bold")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Bold className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleItalic().run();
          }}
          className={
            editor.isActive("italic")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Italic className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleUnderline().run();
          }}
          className={
            editor.isActive("underline")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Underline className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleStrike().run();
          }}
          className={
            editor.isActive("strike")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Strikethrough className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleHeading({ level: 1 }).run();
          }}
          className={
            editor.isActive("heading", { level: 1 })
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Heading1 className="h-5 w-5" />
        </button>

        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBulletList().run();
          }}
          className={
            editor.isActive("bulletList")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <List className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleOrderedList().run();
          }}
          className={
            editor.isActive("orderedList")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <ListOrdered className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleBlockquote().run();
          }}
          className={
            editor.isActive("blockquote")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Quote className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().toggleCode().run();
          }}
          className={
            editor.isActive("code")
              ? "rounded-lg border border-gray-50 bg-white p-2 text-black"
              : "rounded-lg border border-gray-50 p-2 text-white"
          }
        >
          <Code className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().undo().run();
          }}
          className={
            editor.isActive("undo")
              ? "rounded-lg bg-sky-700 p-2 text-white"
              : "p-2 text-sky-400 hover:rounded-lg hover:bg-sky-700 hover:text-white"
          }
        >
          <Undo className="h-5 w-5" />
        </button>
        <button
          onClick={(e) => {
            e.preventDefault();
            editor.chain().focus().redo().run();
          }}
          className={
            editor.isActive("redo")
              ? "rounded-lg bg-sky-700 p-2 text-white"
              : "p-2 text-sky-400 hover:rounded-lg hover:bg-sky-700 hover:text-white"
          }
        >
          <Redo className="h-5 w-5" />
        </button>
      </div>
      {contentText && (
        <button
          type="submit"
          className="h-full rounded-md bg-sky-700 px-4 py-2 text-white"
        >
          Add
        </button>
      )}
    </div>
  );
};

export default Toolbar;
