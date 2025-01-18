"use client";

import { FontSizeExtension } from "@/extensions/font-size";
import { LineHeightExtension } from "@/extensions/line-height";
import { SpaceNode } from "@/extensions/space";
import { useEditorStore } from "@/store/use-editor-store";
import { useStorage } from "@liveblocks/react";
import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
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
import { Ruler } from "./ruler";
import { Threads } from "./threads";

interface EditorProps {
  initialContent?: string | undefined;
}

export const Editor = ({ initialContent }: EditorProps) => {
  const [nbLine, setNbLine] = useState<number | undefined>();
  const [pages, setPages] = useState<string[]>([]);
  const leftMargin = useStorage((root) => root.leftMargin);
  const rightMargin = useStorage((root) => root.rightMargin);

  // EDITOR STORE
  const { setEditor } = useEditorStore();
  const lowlight = createLowlight(all);

  const liveblocks = useLiveblocksExtension({
    initialContent, // Synchroniser uniquement la page active
    offlineSupport_experimental: true,
  });

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

      const nbPages = nbLine ? Math.floor(nbLine / 58) : 0;

      if (nbPages < pages.length) {
        setPages((prevPages) => prevPages.slice(0, nbPages));
      }

      const editorElement: HTMLElement | null =
        document.querySelector(".ProseMirror");
      if (editorElement) {
        const totalHeight = editorElement.offsetHeight;
        const lineHeight = 20;
        const numLines =
          Math.floor(totalHeight / lineHeight) - 5 * pages.length;
        setNbLine(numLines);
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
          "focus:outline-none print:border-0 flex flex-col w-[816px] pr-14 cursor-text",
      },
      handleKeyDown(view, event) {
        if (
          event.key === "Enter" &&
          nbLine !== undefined &&
          nbLine % 58 === 0
        ) {
          editor?.commands.insertSpace();
          setPages([...pages, ""]);

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
    editor?.chain().focus();
  };

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0 flex-col gap-5">
        <div
          className="bg-white border print:border-0 border-[#C7C7C7] min-h-[1240px] max-h-[1240px]"
          onClick={onPageClick}
        >
          <div className="pt-10 print:pt-0">
            <EditorContent editor={editor} />
          </div>
          <Threads editor={editor} />
        </div>
        {pages.map((_, index) => (
          <div
            className="bg-white border print:border-0 border-[#C7C7C7] min-h-[1240px] max-h-[1240px]"
            onClick={onPageClick}
            key={index}
          />
        ))}
      </div>
    </div>
  );
};
