import React from "react";
import HeaderLayout from "@/layouts/HeaderLayout";
import routes, { getPostRoute } from "@/utils/routes";
import useSWR from "swr";
import { Box, Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { LinkIcon } from "@chakra-ui/icons";

const fetcher = (url: string) => fetch(url).then((res) => res.json());

const Blog = () => {
  const { data, error } = useSWR("/api/blogTitles", fetcher);

  if (error) return <Text>Failed to load</Text>;
  if (!data) return <Text>Loading...</Text>;

  return (
    <HeaderLayout currentRoute={routes.blog.path}>
      <Flex alignItems="center" flexDir="column" mt="4%" rowGap="5px">
        {data.map((postTitle: string) => (
          <Box
            key={postTitle}
            border="1px"
            borderColor="brand.orange"
            borderRadius="25"
            w="100%"
            p="15px"
          >
            <Link
              href={getPostRoute(postTitle)}
              style={{ width: "100%", display: "block" }}
            >
              <Flex
                alignItems="center"
                justifyContent="center"
                columnGap="10px"
              >
                <LinkIcon />
                <Text fontWeight="bold" fontSize="30px">
                  {postTitle}
                </Text>
              </Flex>
            </Link>
          </Box>
        ))}
      </Flex>
    </HeaderLayout>
  );
};

export default Blog;
