This is a [Next.js](https://nextjs.org/) project bootstrapped with [`create-next-app`](https://github.com/vercel/next.js/tree/canary/packages/create-next-app).

# Rich Text Notes App

This is a simple rich text notes application built with Next.js 14 and [Tiptap](https://www.tiptap.dev/) for the rich text editor functionality. Users can create, and delete notes with a rich text editor.

## Live Preview

Check out the live preview [here](https://rich-text-editor-ten-topaz.vercel.app/).

## Features

- Rich text editor with formatting options (bold, italic, underline, etc.).
- Notes are saved locally using `localStorage`.
- Responsive design with a Masonry layout for notes.

## Installation

1. Clone the repository:

   ```sh
   git clone https://github.com/caioapolonio/rich-text-editor.git
   ```

2. Install dependencies:

   ```sh
   cd rich-text-editor
   npm install
   ```

3. Run the development server:

   ```sh
   npm run dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) to view the app in your browser.

## Usage

- Click on the "Add" button in the rich text editor to create a new note.
- Delete notes by clicking on the "X" button in the note.

## Technologies Used

- Next.js 14
- Tiptap
- localStorage
- React Responsive Masonry
