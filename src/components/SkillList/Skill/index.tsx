import { Box, Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import { motion } from "framer-motion";

interface SkillProps {
  imgSrc: string;
  text: string;
}

const Skill = ({ imgSrc, text }: SkillProps) => {
  const borderColor = useColorModeValue("brand.orange", "brand.white");

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5 }}
      whileHover={{
        scale: 1.1,
      }}
      whileTap={{ scale: 0.9 }}
    >
      <Flex
        flexDir="column"
        alignItems="center"
        border="1px"
        borderColor={borderColor}
        bg="brand.black"
      >
        <Box
          justifySelf="center"
          pos="relative"
          mt="10px"
          minH="80px"
          minW="110px"
        >
          <Image src={imgSrc} alt={text} fill style={{ fill: "#000000" }} />
        </Box>
        <Text height="20px" mb="10px" color="white">
          {text}
        </Text>
      </Flex>
    </motion.div>
  );
};

export default Skill;
