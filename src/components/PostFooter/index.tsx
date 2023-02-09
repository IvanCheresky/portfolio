import { CalendarIcon } from "@chakra-ui/icons";
import { Box, Flex, Tag, Text } from "@chakra-ui/react";
import ColorHash from "color-hash";
import React from "react";
import getContrastingColor from "@/utils/getContrastingColor";

interface PostFooterProps {
  metadata: any;
}

const PostFooter = ({ metadata }: PostFooterProps) => {
  const colorHash = new ColorHash();

  return (
    <Flex
      alignItems="center"
      justifyContent="space-between"
      w="95%"
      columnGap="10px"
    >
      <Flex alignItems="center" columnGap="10px" flex={1}>
        <CalendarIcon />
        <Text>{new Date(metadata.createdAt).toLocaleString()}</Text>
      </Flex>
      <Flex flexWrap="wrap" justifyContent="center">
        {metadata.tags.map((tag: string) => (
          <Tag
            key={tag}
            bg={colorHash.hex(tag)}
            color={getContrastingColor(colorHash.rgb(tag))}
            mr="5px"
          >
            {tag}
          </Tag>
        ))}
      </Flex>
      <Box flex={1} />
    </Flex>
  );
};

export default PostFooter;
