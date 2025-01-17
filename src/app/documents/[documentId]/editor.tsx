"use client";

import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { useEditorStore } from "@/store/use-editor-store";
import { useStorage } from "@liveblocks/react";
import CodeBlockLowlight from "@tiptap/extension-code-block-lowlight";
import { Color } from "@tiptap/extension-color";
import FontFamily from "@tiptap/extension-font-family";
import Highlight from "@tiptap/extension-highlight";
import Image from "@tiptap/extension-image";
import Link from "@tiptap/extension-link";
import Table from "@tiptap/extension-table";
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
import { useState } from "react";
import ImageResize from "tiptap-extension-resize-image";
import { Markdown } from "tiptap-markdown";
import { Threads } from "./threads";

interface EditorProps {
  liveblocks: any;
  addNewPage: () => void;
  focusEditor: () => void;
}

export const Editor = ({
  liveblocks,
  addNewPage,
  focusEditor,
}: EditorProps) => {
  const [lastLine, setLastLine] = useState<boolean | undefined>();
  const leftMargin = useStorage((root) => root.leftMargin);
  const rightMargin = useStorage((root) => root.rightMargin);

  // EDITOR STORE
  const { setEditor } = useEditorStore();
  const lowlight = createLowlight(all);

  const editor = useEditor({
    immediatelyRender: false,
    onCreate({ editor }) {
      setEditor(editor);
    },
    onDestroy() {
      setEditor(null);
    },
    onUpdate({ editor }) {
      setEditor(editor);
      const editorElement: HTMLElement | null =
        document.querySelector(".ProseMirror"); // Sélecteur de l'éditeur
      if (editorElement) {
        const totalHeight = editorElement.offsetHeight; // Hauteur totale de l'éditeur
        const lineHeight = parseFloat(
          getComputedStyle(editorElement).lineHeight
        ); // Hauteur d'une ligne
        const numLines = Math.floor(totalHeight / lineHeight); // Nombre de lignes
        if (numLines >= 43) {
          setLastLine(true);
        } else setLastLine(false);
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
        style: `padding-left: ${leftMargin ?? 56}px; padding-right: ${rightMargin ?? 56}px;`,
        class:
          "focus:outline-none print:border-0 max-h-[1054px] flex flex-col w-[816px] pt-10 pr-14 pb-10 cursor-text",
      },
      handleKeyDown(view, event) {
        if (event.key === "Enter" && lastLine) {
          event.preventDefault();

          addNewPage();
          return true;
        }

        return false;
      },
    },
    extensions: [
      StarterKit.configure({
        history: false,
      }),
      liveblocks,
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
    content: ``,
  });

  const onPageClick = () => {
    editor?.chain().focus().run();
    focusEditor();
  };

  return (
    <div
      className="bg-white border border-[#C7C7C7] min-h-[1054px]"
      onClick={onPageClick}
    >
      <EditorContent editor={editor} />
      <Threads editor={editor} />
    </div>
  );
};
