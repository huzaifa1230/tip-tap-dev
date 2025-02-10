import { useEditor, EditorContent } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import Underline from "@tiptap/extension-underline";
import Heading from "@tiptap/extension-heading";
import { Highlight } from "./Custom Extension/Highlight";

const Tiptap = () => {
  // ------------------------------ Load saved content from localStorage (if available) ------------------------------
  const savedContent = localStorage.getItem("editorContent");

  const editor = useEditor({
    // --------------------------  Extensions and Starter Kit --------------------------
    extensions: [
      StarterKit.configure({
        heading: false,
        bulletList: true,
        orderedList: true,
        listItem: true,
      }),
      Underline,
      Heading.configure({
        levels: [1, 2, 3],
      }),
      Highlight,
    ],
    content: savedContent
      ? JSON.parse(savedContent) // to show saved content
      : "<p>Start writing here...</p>", // if no saved content
    onUpdate: ({ editor }) => {
      localStorage.setItem("editorContent", JSON.stringify(editor.getJSON()));
    },
  });
  // ------------------------------------- check to ensure editor exists before rendering -------------------------------------
  if (!editor) return null;

  return (
    <>
      <div className="flex justify-center">
        <div className="border rounded-lg p-4   max-w-2xl">
          {/* ------------------------------------- Tollbar buttons-------------------------------------  */}
          <div className="flex gap-2 mb-4 flex-wrap">
            <button
              onClick={() => editor.chain().focus().toggleBold().run()}
              className={`px-3 py-1 rounded ${
                editor.isActive("bold")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Bold
            </button>
            <button
              onClick={() => editor.chain().focus().toggleItalic().run()}
              className={`px-3 py-1 rounded ${
                editor.isActive("italic")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Italic
            </button>
            <button
              onClick={() => editor.chain().focus().toggleUnderline().run()}
              className={`px-3 py-1 rounded ${
                editor.isActive("underline")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Underline
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 1 }).run()
              }
              className={`px-3 py-1 rounded ${
                editor.isActive("heading", { level: 1 })
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              H1
            </button>
            <button
              onClick={() =>
                editor.chain().focus().toggleHeading({ level: 2 }).run()
              }
              className={`px-3 py-1 rounded ${
                editor.isActive("heading", { level: 2 })
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              H2
            </button>
            <button
              onClick={() => editor.chain().focus().toggleBulletList().run()}
              className={`px-3 py-1 rounded ${
                editor.isActive("bulletList")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Bullet List
            </button>
            <button
              onClick={() => editor.chain().focus().toggleOrderedList().run()}
              className={`px-3 py-1 rounded ${
                editor.isActive("orderedList")
                  ? "bg-blue-500 text-white"
                  : "bg-gray-100"
              }`}
            >
              Numbered List
            </button>

            <button
              onClick={() => {
                if (editor.isActive("highlight")) {
                  editor.chain().focus().unsetHighlight().run();
                } else {
                  editor.chain().focus().setHighlight("#ffeb3b").run();
                }
              }}
              className={`px-3 py-1 rounded ${
                editor.isActive("highlight")
                  ? "bg-yellow-300 text-black"
                  : "bg-gray-100"
              }`}
            >
              Highlight
            </button>
          </div>
          {/* ------------------------------------- The main text editor area -------------------------------------  */}
          <EditorContent
            editor={editor}
            className="min-h-[200px] max-h-96 overflow-y-scroll outline-none ProseMirror "
          />
        </div>
      </div>
      {/* ------------------------------------- to display the content -------------------------------------  */}
      <div className="mt-6 p-4 output-preview">
        <h1 className="text-lg font-semibold">Output Preview</h1>
        <div
          className="mt-2 p-2  bg-white"
          dangerouslySetInnerHTML={{ __html: editor.getHTML() }}
        />
      </div>
    </>
  );
};

export default Tiptap;
