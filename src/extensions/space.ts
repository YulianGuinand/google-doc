import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    space: {
      insertSpace: () => ReturnType;
    };
  }
}

export const SpaceNode = Node.create({
  name: "space",

  group: "inline",

  inline: true,
  // atom: true,

  addAttributes() {
    return {
      height: {
        // parseHTML: (element) => element.style.height,
        renderHTML: () => {
          return {
            class: `space`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "div[data-type='space']",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return [
      "div",
      mergeAttributes(HTMLAttributes, { "data-type": "space" }),
      "",
    ];
  },

  addCommands() {
    return {
      insertSpace:
        () =>
        ({ commands }) => {
          return commands.insertContent([
            {
              type: this.name,
            },
            {
              type: "paragraph",
            },
          ]);
        },
    };
  },

  addNodeView() {
    return () => {
      const dom = document.createElement("div");
      dom.setAttribute("data-type", "space");
      // dom.style.height = node.attrs.height;
      dom.style.pointerEvents = "none";
      return {
        dom,
      };
    };
  },
});
