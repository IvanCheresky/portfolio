import React, { useState } from "react";
import { promises as fs } from "fs";
import path from "path";
import { Editable, Slate, withReact } from "slate-react";
import { createEditor } from "slate";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "@/layouts/HeaderLayout";
import { getFilesMetadata } from "@/utils/getFilePaths";
import { CalendarIcon } from "@chakra-ui/icons";
import Head from "next/head";

const BlogPost = ({ post }: any) => {
  const [editor] = useState(() => withReact(createEditor()));

  return (
    <HeaderLayout currentRoute={`blog/${post.metadata.id}`}>
      <Head>
        <title>{post.metadata.title}</title>
      </Head>
      <Flex w="100%" flexDir="column" alignItems="center" mt="5%" px="10%">
        <Flex
          w="100%"
          flexDir="column"
          alignItems="center"
          border="1px"
          borderColor="brand.orange"
          borderRadius="25"
          p="2%"
          rowGap="10px"
        >
          <Text fontSize="35px" color="brand.orange">
            {post.metadata.title}
          </Text>
          <Divider />
          <Box w="100%">
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
          <Divider />
          <Flex alignItems="center" columnGap="10px">
            <CalendarIcon />
            <Text>{new Date(post.metadata.createdAt).toLocaleString()}</Text>
          </Flex>
        </Flex>
      </Flex>
    </HeaderLayout>
  );
};

export default BlogPost;

export async function getStaticPaths() {
  const filesMetadata = await getFilesMetadata();

  return {
    paths: filesMetadata.map((metadata) => ({
      params: { id: metadata.id },
    })),
    fallback: false,
  };
}

export async function getStaticProps(context: any) {
  const jsonDirectory = path.join(process.cwd(), "blogPosts");

  const metadata = await fs.readFile(
    `${jsonDirectory}/${context.params.id}/metadata.json`,
    "utf8"
  );

  const content = await fs.readFile(
    `${jsonDirectory}/${context.params.id}/content.json`,
    "utf8"
  );

  return {
    props: {
      post: {
        metadata: JSON.parse(metadata),
        content: JSON.parse(content).content,
      },
    },
  };
}
