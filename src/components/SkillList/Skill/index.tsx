import { Box, Flex, Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";

interface SkillProps {
  imgSrc: string;
  text: string;
}

const Skill = ({ imgSrc, text }: SkillProps) => {
  return (
    <Flex flexDir="column" alignItems="center" border="1px" borderColor="white">
      <Box
        justifySelf="center"
        pos="relative"
        mt="10px"
        minH="80px"
        minW="110px"
      >
        <Image src={imgSrc} alt={text} fill style={{ fill: "#000000" }} />
      </Box>
      <Text height="20px" mb="10px">
        {text}
      </Text>
    </Flex>
  );
};

export default Skill;
