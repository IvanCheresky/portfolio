import { Button } from "@chakra-ui/react";
import { Editor } from "@tiptap/react";
import React from "react";

interface MenuBarProps {
  editor: Editor | null;
}

const MenuBar = ({ editor }: MenuBarProps) => {
  if (!editor) {
    return null;
  }

  const getHeadingStyles = (level: number) => {
    return editor.isActive("heading", { level })
      ? {
          background: "black",
          color: "white",
        }
      : {};
  };

  const getAttributeStyles = (attribute: string) => {
    return editor.isActive(attribute)
      ? {
          background: "black",
          color: "white",
        }
      : {};
  };

  return (
    <>
      <Button
        onClick={() => editor.chain().focus().toggleBold().run()}
        disabled={!editor.can().chain().focus().toggleBold().run()}
        {...getAttributeStyles("bold")}
      >
        bold
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleItalic().run()}
        disabled={!editor.can().chain().focus().toggleItalic().run()}
        {...getAttributeStyles("italic")}
      >
        italic
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleStrike().run()}
        disabled={!editor.can().chain().focus().toggleStrike().run()}
        {...getAttributeStyles("strike")}
      >
        strike
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCode().run()}
        disabled={!editor.can().chain().focus().toggleCode().run()}
        {...getAttributeStyles("code")}
      >
        code
      </Button>
      <Button onClick={() => editor.chain().focus().unsetAllMarks().run()}>
        clear marks
      </Button>
      <Button onClick={() => editor.chain().focus().clearNodes().run()}>
        clear nodes
      </Button>
      <Button
        onClick={() => editor.chain().focus().setParagraph().run()}
        {...getAttributeStyles("paragraph")}
      >
        paragraph
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 1 }).run()}
        {...getHeadingStyles(1)}
      >
        h1
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 2 }).run()}
        {...getHeadingStyles(2)}
      >
        h2
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 3 }).run()}
        {...getHeadingStyles(3)}
      >
        h3
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 4 }).run()}
        {...getHeadingStyles(4)}
      >
        h4
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 5 }).run()}
        {...getHeadingStyles(5)}
      >
        h5
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleHeading({ level: 6 }).run()}
        {...getHeadingStyles(6)}
      >
        h6
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBulletList().run()}
        {...getAttributeStyles("bulletList")}
      >
        bullet list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleOrderedList().run()}
        {...getAttributeStyles("orderedList")}
      >
        ordered list
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleCodeBlock().run()}
        {...getAttributeStyles("codeBlock")}
      >
        code block
      </Button>
      <Button
        onClick={() => editor.chain().focus().toggleBlockquote().run()}
        {...getAttributeStyles("blockquote")}
      >
        blockquote
      </Button>
      <Button onClick={() => editor.chain().focus().setHorizontalRule().run()}>
        horizontal rule
      </Button>
      <Button onClick={() => editor.chain().focus().setHardBreak().run()}>
        hard break
      </Button>
      <Button
        onClick={() => editor.chain().focus().undo().run()}
        disabled={!editor.can().chain().focus().undo().run()}
      >
        undo
      </Button>
      <Button
        onClick={() => editor.chain().focus().redo().run()}
        disabled={!editor.can().chain().focus().redo().run()}
      >
        redo
      </Button>
      <Button onClick={() => editor.chain().focus().setColor("#958DF1").run()}>
        purple
      </Button>
    </>
  );
};

export default MenuBar;
