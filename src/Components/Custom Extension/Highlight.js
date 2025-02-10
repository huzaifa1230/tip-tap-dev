import { Mark } from "@tiptap/core";

export const Highlight = Mark.create({
  name: "highlight",

  addOptions() {
    return {
      color: "#ffeb3b",
    };
  },

  addAttributes() {
    return {
      color: {
        default: "#ffeb3b",
        parseHTML: (element) => element.getAttribute("data-color"),
        renderHTML: (attributes) => {
          return {
            "data-color": attributes.color,
            style: `background-color: ${attributes.color}`,
          };
        },
      },
    };
  },

  parseHTML() {
    return [{ tag: "span[data-color]" }];
  },

  renderHTML({ HTMLAttributes }) {
    return ["span", HTMLAttributes, 0];
  },

  addCommands() {
    return {
      setHighlight:
        (color) =>
        ({ commands }) => {
          return commands.setMark(this.name, { color });
        },
      unsetHighlight:
        () =>
        ({ commands }) => {
          return commands.unsetMark(this.name);
        },
    };
  },
});
