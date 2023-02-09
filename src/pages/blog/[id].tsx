import React from "react";
import { promises as fs } from "fs";
import path from "path";
import { Box, Divider, Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "@/layouts/HeaderLayout";
import { getFilesMetadata } from "@/utils/getFilePaths";
import { EditorContent, useEditor } from "@tiptap/react";
import Head from "next/head";
import StarterKit from "@tiptap/starter-kit";
import PostFooter from "@/components/PostFooter";

const BlogPost = ({ post }: any) => {
  const editor = useEditor({
    extensions: [StarterKit],
    content: post.content,
    editable: false,
  });

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
            <EditorContent editor={editor} />
          </Box>
          <Divider />
          <PostFooter metadata={post.metadata} />
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
        content: JSON.parse(content),
      },
    },
  };
}
