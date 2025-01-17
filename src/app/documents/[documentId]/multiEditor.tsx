"use client";

import { useLiveblocksExtension } from "@liveblocks/react-tiptap";
import { useEffect, useState } from "react";
import { Editor } from "./editor";
import { Ruler } from "./ruler";

interface multiEditorProps {
  initialContent?: string | undefined;
}

export const MultiEditor = ({ initialContent }: multiEditorProps) => {
  const [pages, setPages] = useState([{ id: 0, content: initialContent }]);
  const [activePage, setActivePage] = useState(0);

  const addNewPage = () => {
    setPages((prevPages) => [
      ...prevPages,
      { id: prevPages.length, content: "" },
    ]);
    setActivePage(pages.length); // Passe à la nouvelle page
  };

  const liveblocks = useLiveblocksExtension({
    initialContent: pages[activePage].content, // Synchroniser uniquement la page active
    offlineSupport_experimental: true,
  });

  useEffect(() => {
    console.log(activePage);
  }, [activePage]);

  return (
    <div className="size-full overflow-x-auto bg-[#F9FBFD] px-4 print:p-0 print:bg-white print:overflow-visible">
      <Ruler />
      <div className="min-w-max flex flex-col gap-8 justify-center w-[816px] py-4 print:py-0 mx-auto print:w-full print:min-w-0">
        {pages.map((_, index) => (
          <Editor
            key={index}
            liveblocks={liveblocks}
            addNewPage={addNewPage}
            focusEditor={() => setActivePage(index)}
          />
        ))}
      </div>
    </div>
  );
};
