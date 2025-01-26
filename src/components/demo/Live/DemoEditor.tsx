"use client";

import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { SpaceNode } from "@/extensions/space";
import { useEditorStore } from "@/store/use-editor-store";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import Color from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Link from "@tiptap/extension-link";
import TableCell from "@tiptap/extension-table-cell";
import TableHeader from "@tiptap/extension-table-header";
import TableRow from "@tiptap/extension-table-row";
import TaskItem from "@tiptap/extension-task-item";
import TaskList from "@tiptap/extension-task-list";
import TextAlign from "@tiptap/extension-text-align";
import TextStyle from "@tiptap/extension-text-style";
import Underline from "@tiptap/extension-underline";
import { EditorContent, useEditor } from "@tiptap/react";
import StarterKit from "@tiptap/starter-kit";
import { all, createLowlight } from "lowlight";
import { Table } from "lucide-react";
import { useState } from "react";
import ImageResize from "tiptap-extension-resize-image";
import { Markdown } from "tiptap-markdown";

const DemoEditor = () => {
  const [nbLine, setNbLine] = useState<number>(0);
  const { setEditor } = useEditorStore();
  const lowlight = createLowlight(all);
  const editor = useEditor({
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);

      const editorElement: HTMLElement | null =
        document.querySelector(".ProseMirror");
      if (editorElement) {
        const totalHeight = editorElement.offsetHeight;
        setNbLine(totalHeight);
      }
    },
    onSelectionUpdate({ editor }) {
      setEditor(editor);
    },
    onTransaction({ editor }) {
      setEditor(editor);
    },
    onBlur({ editor }) {
      setEditor(editor);
    },
    onContentError({ editor }) {
      setEditor(editor);
    },
    editorProps: {
      attributes: {
        style: `padding-left: 56px; padding-right: 56px;`,
        class:
          "focus:outline-none print:border-0 flex flex-col w-[816px] pr-14 cursor-text bg-white pt-10 print:pt-0 pb-10 print:pb-0 border print:border-0 border-[#C7C7C7] z-10",
      },
      handleKeyDown(view, event) {
        if (event.key === "Enter" && nbLine >= 600) {
          event.preventDefault();

          return true;
        }

        return false;
      },
    },
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      SpaceNode,
      CodeBlockLowlight.configure({
        lowlight,
        languageClassPrefix: "language-",
      }),
      Markdown.configure({
        html: true,
        tightLists: true,
        tightListClass: "tight",
        bulletListMarker: "-",
        linkify: true,
        breaks: true,
        transformPastedText: false,
        transformCopiedText: false,
      }),
      LineHeightExtension,
      FontSizeExtension,
      TextAlign.configure({
        types: ["heading", "paragraph"],
      }),
      Link.configure({
        openOnClick: true,
        autolink: true,
        defaultProtocol: "https",
      }),
      Highlight.configure({ multicolor: true }),
      Color,
      TextStyle,
      FontFamily,
      TaskItem.configure({
        nested: true,
      }),
      TaskList,
      Table,
      TableCell,
      TableHeader,
      TableRow,
      Image,
      ImageResize,
      Underline,
    ],
    content: `
    const example = "Hello, World!";

    console.log(example);
    `,
    parseOptions: {
      preserveWhitespace: "full",
    },
  });

  return (
    <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0 flex-col gap-5">
      <EditorContent editor={editor} />
    </div>
  );
};

export default DemoEditor;
