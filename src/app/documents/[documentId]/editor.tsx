"use client";

import { Button } from "@/components/ui/button";
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
import { PlusCircleIcon, Trash2Icon } from "lucide-react";
import { useMemo, useState } from "react";
import ImageResize from "tiptap-extension-resize-image";
import { Markdown } from "tiptap-markdown";
import { Ruler } from "./ruler";
import { Threads } from "./threads";

interface EditorProps {
  initialContent: string | undefined;
}

export const Editor = ({ initialContent }: EditorProps) => {
  const [nbLine, setNbLine] = useState<number>(0);

  // Utiliser `useMemo` pour calculer les correspondances initiales
  const initialPages = useMemo(() => {
    const matches = initialContent?.match('data-type="space"') || [];
    return Array(matches.length).fill(""); // Tableau de chaînes vides
  }, [initialContent]);

  // État pour les pages ajoutées dynamiquement
  const [addedPages, setAddedPages] = useState<string[]>([]);

  // Fusionner les pages initiales et les pages ajoutées
  const pages = [...initialPages, ...addedPages];

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
        style: `padding-left: ${leftMargin ?? 56}px; padding-right: ${rightMargin ?? 56}px;`,
        class:
          "focus:outline-none print:border-0 flex flex-col w-[816px] pr-14 cursor-text",
      },
      handleKeyDown(view, event) {
        if (
          event.key === "Enter" &&
          (nbLine - 100 * pages.length) % 1180 === 0
        ) {
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
    parseOptions: {
      preserveWhitespace: "full",
    },
  });

  const onPageClick = () => {
    editor?.chain().focus();
  };

  const addPage = () => {
    if (!editor) return;
    editor.commands.insertContentAt(
      editor.state.doc.content.size, // Position de fin du document
      {
        type: "space",
      }
    );

    setAddedPages([...pages, ""]);
  };

  const removePage = () => {
    setAddedPages((prevPages) => prevPages.slice(0, -1));
  };

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0 flex-col gap-5">
        <div
          className="bg-white border print:border-0 border-[#C7C7C7] min-h-[1260px] max-h-[1260px] z-10"
          onClick={onPageClick}
        >
          <div className="pt-10 print:pt-0">
            <EditorContent editor={editor} />
          </div>
        </div>
        {pages.map((_, index) => (
          <div
            className="bg-white border print:border-0 border-[#C7C7C7] min-h-[1260px] max-h-[1260px] relative group z-0"
            onClick={onPageClick}
            key={index}
          >
            <div
              className="absolute hidden group-hover:block print:hidden right-4 top-4 p-1 bg-primary/5 rounded-full cursor-pointer "
              onClick={removePage}
            >
              <Trash2Icon className="size-4 text-primary/70" />
            </div>
          </div>
        ))}
        <Threads editor={editor} />
        <Button variant="ghost" onClick={addPage} className="print:hidden">
          <PlusCircleIcon className="size-4" />
          Add a Page
        </Button>
      </div>
    </div>
  );
};
