import React from "react";
import HeaderLayout from "@/layouts/HeaderLayout";
import routes, { getPostRoute } from "@/utils/routes";
import useSWR from "swr";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LinkIcon } from "@chakra-ui/icons";
import Head from "next/head";
import PostFooter from "@/components/PostFooter";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Blog = () => {
  const { data, error } = useSWR("/api/postsMetadata", fetcher);

  if (error) return <Text>Failed to load</Text>;
  if (!data) return <Text>Loading...</Text>;

  return (
    <HeaderLayout currentRoute={routes.blog.path}>
      <Head>
        <title>Blog</title>
      </Head>
      <Flex alignItems="center" flexDir="column" mt="4%" rowGap="5px">
        {data.map((metadata: any) => (
          <Box
            key={metadata.id}
            border="1px"
            borderColor="brand.orange"
            borderRadius="25"
            w="100%"
            p="15px"
          >
            <Link
              href={getPostRoute(metadata.id)}
              style={{ width: "100%", display: "block" }}
            >
              <Flex flexDir="column" alignItems="center" rowGap="10px">
                <Flex
                  alignItems="center"
                  justifyContent="center"
                  columnGap="10px"
                >
                  <LinkIcon />
                  <Text fontWeight="bold" fontSize="30px">
                    {metadata.title}
                  </Text>
                </Flex>
                <PostFooter metadata={metadata} />
              </Flex>
            </Link>
          </Box>
        ))}
      </Flex>
    </HeaderLayout>
  );
};

export default Blog;
