import React, { useState } from "react";
import { promises as fs } from "fs";
import { getFileNames } from "@/utils/getFilePaths";
import path from "path";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { Box, Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "../../layouts/HeaderLayout";

const BlogPost = ({ post }: any) => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <HeaderLayout currentRoute={`blog/${post.title}`}>
      <Flex w="100%" flexDir="column" alignItems="center" pt="5%" px="20%">
        <Text fontSize="35px" color="brand.orange">
          {post.title}
        </Text>
        <Box w="100%" border="1px" borderColor="brand.orange">
          <Slate editor={editor} value={post.content}>
            <Editable
              spellCheck
              style={{
                minHeight: "5rem",
                maxHeight: "15rem",
                overflow: "auto",
                marginLeft: "0.7rem",
              }}
            />
          </Slate>
        </Box>
        <Text>{new Date(post.createdAt).toLocaleString()}</Text>
      </Flex>
    </HeaderLayout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const filePaths = await getFileNames(true);

  return {
    paths: filePaths.map((filePath) => ({
      params: { id: filePath },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const jsonDirectory = path.join(process.cwd(), "blogPosts");

  const post = await fs.readFile(
    `${jsonDirectory}/${context.params.id}.json`,
    "utf8"
  );

  return {
    props: { post: JSON.parse(post) },
  };
}
