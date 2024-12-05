import {
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";

import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useEditorStore } from "@/store/use-editor-store";
import Editor from "@monaco-editor/react";
import { useState } from "react";

export const CodeEditor = () => {
  const { editor } = useEditorStore();
  const [value, setValue] = useState<string>('console.log("Hello World !")');
  const [language, setLanguage] = useState("javascript");

  const handleOnChange = (e: string) => {
    setValue(e);
  };

  const handleInsert = () => {
    if (editor && editor.can().setNode("codeBlock")) {
      editor
        .chain()
        .focus()
        .insertContent({
          type: "codeBlock",
          attrs: { language: language },
          content: [{ type: "text", text: value }],
        })
        .run();
    }
  };

  const languageGroups = [
    {
      label: "Web Development",
      languages: [
        { value: "javascript", label: "JavaScript" },
        { value: "typescript", label: "TypeScript" },
        { value: "html", label: "HTML" },
        { value: "css", label: "CSS" },
      ],
    },
    {
      label: "General Purpose",
      languages: [
        { value: "python", label: "Python" },
        { value: "java", label: "Java" },
        { value: "csharp", label: "C#" },
        { value: "php", label: "PHP" },
      ],
    },
    {
      label: "Scripting",
      languages: [
        { value: "ruby", label: "Ruby" },
        { value: "perl", label: "Perl" },
        { value: "bash", label: "Bash" },
      ],
    },
    {
      label: "Modern Languages",
      languages: [
        { value: "swift", label: "Swift" },
        { value: "kotlin", label: "Kotlin" },
        { value: "rust", label: "Rust" },
      ],
    },
  ];

  return (
    <DialogContent>
      <DialogHeader>
        <DialogTitle>Insert Code</DialogTitle>
      </DialogHeader>

      <div className="flex flex-col gap-4">
        <Select
          onValueChange={(language) => setLanguage(language)}
          defaultValue={language}
        >
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Select a language" />
          </SelectTrigger>
          <SelectContent>
            {languageGroups.map((group, index) => (
              <SelectGroup key={index}>
                <SelectLabel>{group.label}</SelectLabel>
                {group.languages.map((language) => (
                  <SelectItem key={language.value} value={language.value}>
                    {language.label}
                  </SelectItem>
                ))}
              </SelectGroup>
            ))}
          </SelectContent>
        </Select>

        <div className="min-h-[500px] h-full">
          <Editor
            height="100%"
            theme="vs-dark"
            language={language}
            defaultValue={value}
            onChange={(e) => {
              if (e) handleOnChange(e);
            }}
            className="rounded-sm overflow-hidden"
          />
        </div>

        <Button
          disabled={value.replaceAll(" ", "") === ""}
          onClick={handleInsert}
        >
          Insert
        </Button>
      </div>
    </DialogContent>
  );
};
