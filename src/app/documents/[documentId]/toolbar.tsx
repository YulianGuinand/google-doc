"use client";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Separator } from "@/components/ui/separator";
import { cn } from "@/lib/utils";
import { useEditorStore } from "@/store/use-editor-store";
import {
  BoldIcon,
  ChevronDownIcon,
  ItalicIcon,
  ListTodo,
  LucideIcon,
  MessageSquarePlusIcon,
  PrinterIcon,
  Redo2Icon,
  RemoveFormattingIcon,
  SpellCheckIcon,
  UnderlineIcon,
  Undo2Icon,
} from "lucide-react";

import { type Level } from "@tiptap/extension-heading";

// HEADING
const HeadingLevelButton = () => {
  const { editor } = useEditorStore();

  const headings = [
    { label: "Normal text", value: 0, fontSize: "16px" },
    { label: "Heading 1", value: 1, fontSize: "32px" },
    { label: "Heading 2", value: 2, fontSize: "24px" },
    { label: "Heading 3", value: 3, fontSize: "20px" },
    { label: "Heading 4", value: 4, fontSize: "18px" },
  ];

  const getCurrentHeading = () => {
    for (let level = 1; level <= 5; level++) {
      if (editor?.isActive("heading", { level })) {
        return `Heading ${level}`;
      }
    }

    return "Normal text";
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 min-w-7 shrink-0 flex items-center justify-center rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">{getCurrentHeading()}</span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex flex-col gap-y-1">
        {headings.map(({ label, value, fontSize }) => (
          <button
            key={value}
            className={cn(
              "flex gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              (value === 0 && !editor?.isActive("heading")) ||
                (editor?.isActive("heading", { level: value }) &&
                  "bg-neutral-200/80")
            )}
            style={{ fontSize }}
            onClick={() => {
              if (value === 0) {
                editor?.chain().focus().setParagraph().run();
              } else {
                editor
                  ?.chain()
                  .focus()
                  .toggleHeading({ level: value as Level })
                  .run();
              }
            }}
          >
            {label}
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

// FONT FAMILY
const FontFamilyButton = () => {
  const { editor } = useEditorStore();

  const fonts = [
    { label: "Andale Mono", value: "Andale Mono" },
    { label: "Arial", value: "Arial" },
    { label: "Arial Black", value: "Arial Black" },
    { label: "Avant Garde", value: "Avant Garde" },
    { label: "Baskerville", value: "Baskerville" },
    { label: "Big Caslon", value: "Big Caslon" },
    { label: "Book Antiqua", value: "Book Antiqua" },
    { label: "Bookman", value: "Bookman" },
    { label: "Calibri", value: "Calibri" },
    { label: "Cambria", value: "Cambria" },
    { label: "Candara", value: "Candara" },
    { label: "Charcoal", value: "Charcoal" },
    { label: "Comic Sans MS", value: "Comic Sans MS" },
    { label: "Consolas", value: "Consolas" },
    { label: "Constantia", value: "Constantia" },
    { label: "Corbel", value: "Corbel" },
    { label: "Courier New", value: "Courier New" },
    { label: "Didot", value: "Didot" },
    { label: "Franklin Gothic Medium", value: "Franklin Gothic Medium" },
    { label: "Futura", value: "Futura" },
    { label: "Garamond", value: "Garamond" },
    { label: "Geneva", value: "Geneva" },
    { label: "Georgia", value: "Georgia" },
    { label: "Gill Sans", value: "Gill Sans" },
    { label: "Helvetica", value: "Helvetica" },
    { label: "Hoefler Text", value: "Hoefler Text" },
    { label: "Impact", value: "Impact" },
    { label: "Lucida Bright", value: "Lucida Bright" },
    { label: "Lucida Console", value: "Lucida Console" },
    { label: "Lucida Sans", value: "Lucida Sans" },
    { label: "Lucida Sans Unicode", value: "Lucida Sans Unicode" },
    { label: "Menlo", value: "Menlo" },
    { label: "Monaco", value: "Monaco" },
    { label: "Noteworthy", value: "Noteworthy" },
    { label: "Optima", value: "Optima" },
    { label: "Palatino", value: "Palatino" },
    { label: "Palatino Linotype", value: "Palatino Linotype" },
    { label: "Perpetua", value: "Perpetua" },
    { label: "Rockwell", value: "Rockwell" },
    { label: "Segoe Print", value: "Segoe Print" },
    { label: "Segoe Script", value: "Segoe Script" },
    { label: "Segoe UI", value: "Segoe UI" },
    { label: "Silom", value: "Silom" },
    { label: "Tahoma", value: "Tahoma" },
    { label: "Times New Roman", value: "Times New Roman" },
    { label: "Trebuchet MS", value: "Trebuchet MS" },
    { label: "Ubuntu", value: "Ubuntu" },
    { label: "Verdana", value: "Verdana" },
    { label: "Verdana Pro", value: "Verdana Pro" },
    { label: "Zapfino", value: "Zapfino" },
  ];

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="h-7 w-[120px] shrink-0 flex items-center justify-between rounded-sm hover:bg-neutral-200/80 px-1.5 overflow-hidden text-sm">
          <span className="truncate">
            {editor?.getAttributes("textStyle").fontFamily || "Arial"}
          </span>
          <ChevronDownIcon className="ml-2 size-4 shrink-0" />
        </button>
      </DropdownMenuTrigger>

      <DropdownMenuContent className="p-1 flex flex-col gap-y-1 overflow-y-scroll h-96">
        {fonts.map(({ label, value }) => (
          <button
            key={value}
            className={cn(
              "flex gap-x-2 px-2 py-1 rounded-sm hover:bg-neutral-200/80",
              editor?.getAttributes("textStyle").fontFamily === value &&
                "bg-neutral-200/80"
            )}
            style={{ fontFamily: value }}
            onClick={() => editor?.chain().focus().setFontFamily(value).run()}
          >
            <span className="text-sm">{label}</span>
          </button>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

interface ToolbarButtonProps {
  onClick?: () => void;
  isActive?: boolean;
  icon: LucideIcon;
}

const ToolbarButton = ({
  onClick,
  isActive,
  icon: Icon,
}: ToolbarButtonProps) => {
  return (
    <button
      onClick={onClick}
      className={cn(
        "text-sm h-7 min-w-7 flex items-center justify-center rounded-sm hover:bg-neutral-200/80",
        isActive && "bg-neutral-200/80"
      )}
    >
      <Icon className="size-4" />
    </button>
  );
};

export const Toolbar = () => {
  // EDITOR STORE
  const { editor } = useEditorStore();

  const sections: {
    label: string;
    icon: LucideIcon;
    onClick: () => void;
    isActive?: boolean;
  }[][] = [
    [
      {
        label: "Undo",
        icon: Undo2Icon,
        onClick: () => editor?.chain().focus().undo().run(),
      },
      {
        label: "Redo",
        icon: Redo2Icon,
        onClick: () => editor?.chain().focus().redo().run(),
      },
      {
        label: "Print",
        icon: PrinterIcon,
        onClick: () => window.print(),
      },
      {
        label: "Spell Check",
        icon: SpellCheckIcon,
        onClick: () => {
          const current = editor?.view.dom.getAttribute("spellcheck");
          editor?.view.dom.setAttribute(
            "spellcheck",
            current === "false" ? "true" : "false"
          );
        },
      },
    ],
    [
      {
        label: "bold",
        icon: BoldIcon,
        isActive: editor?.isActive("bold"),
        onClick: () => editor?.chain().focus().toggleBold().run(),
      },
      {
        label: "italic",
        icon: ItalicIcon,
        isActive: editor?.isActive("italic"),
        onClick: () => editor?.chain().focus().toggleItalic().run(),
      },
      {
        label: "underline",
        icon: UnderlineIcon,
        isActive: editor?.isActive("underline"),
        onClick: () => editor?.chain().focus().toggleUnderline().run(),
      },
    ],
    [
      {
        label: "Comment",
        icon: MessageSquarePlusIcon,
        onClick: () => console.log("TODO: Comments"),
        isActive: false,
      },
      {
        label: "List Todo",
        icon: ListTodo,
        onClick: () => editor?.chain().focus().toggleTaskList().run(),
        isActive: editor?.isActive("taskList"),
      },
      {
        label: "Remove formatting",
        icon: RemoveFormattingIcon,
        onClick: () => editor?.chain().focus().unsetAllMarks().run(),
      },
    ],
  ];

  return (
    <div className="bg-[#F1F4F9] px-2.5 py-0.5 rounded-[24px] min-h-[40px] flex items-center gap-x-0.5 overflow-x-auto">
      {sections[0].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <FontFamilyButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      <HeadingLevelButton />
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/* TODO: FONT SIZE */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />

      {sections[1].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
      {/* TODO: TEXT COLOR */}
      {/* TODO: HIGHLIGHT COLOR */}
      <Separator orientation="vertical" className="h-6 bg-neutral-300" />
      {/* LINK */}
      {/* IMAGE */}
      {/* ALIGN */}
      {/* LINE HEIGHT */}
      {/* LIST */}
      {sections[2].map((item) => (
        <ToolbarButton key={item.label} {...item} />
      ))}
    </div>
  );
};
