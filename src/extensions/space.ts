import { Node, mergeAttributes } from "@tiptap/core";

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    space: {
      insertSpace: (marge: number) => ReturnType;
    };
  }
}

export const SpaceNode = Node.create({
  name: "space",

  group: "block", // Le groupe "block" pour mieux gérer l'espacement vertical

  atom: true, // Comportement atomique

  addAttributes() {
    return {
      height: {
        default: 100, // Hauteur par défaut
        parseHTML: (element) => parseInt(element.style.height) || 100,
        renderHTML: (attributes) => ({
          style: `height: ${attributes.height}px;`,
          class: "print:h-0",
        }),
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
      mergeAttributes(HTMLAttributes, {
        "data-type": "space",
        class: "print:hidden",
      }),
      "",
    ];
  },

  addCommands() {
    return {
      insertSpace:
        (marge: number = 0) =>
        ({ commands }) => {
          // Calcule la hauteur dynamique en ajoutant la marge
          const dynamicHeight = 100 + marge;

          // Vérifie que la hauteur ne soit pas négative
          const height = Math.max(dynamicHeight, 0);

          return commands.insertContent({
            type: this.name,
            attrs: {
              height,
            },
          });
        },
    };
  },

  addNodeView() {
    return ({ node }) => {
      const dom = document.createElement("div");
      dom.setAttribute("data-type", "space");
      dom.classList.add("print:hidden");
      dom.style.height = `${node.attrs.height}px`;
      dom.style.pointerEvents = "none";
      return { dom };
    };
  },
});
