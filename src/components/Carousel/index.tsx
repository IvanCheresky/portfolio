import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { AspectRatio, Box, Flex, IconButton, Text } from "@chakra-ui/react";
import Image from "next/image";
import React, { useState } from "react";

export interface CarouselElement {
  title?: string;
  description?: string;
  image: string;
}

interface CarouselProps {
  elements: CarouselElement[];
}

const Carousel = ({ elements }: CarouselProps) => {
  const [index, setIndex] = useState(0);

  if (elements.length === 0) return null;

  const onLeftClick = () => {
    if (index === 0) {
      setIndex(elements.length - 1);
    } else {
      setIndex(index - 1);
    }
  };

  const onRightClick = () => {
    if (index === elements.length - 1) {
      setIndex(0);
    } else {
      setIndex(index + 1);
    }
  };

  return (
    <Flex
      flexDir="column"
      key={elements[index].title}
      alignItems="center"
      width="100%"
      pb="20px"
    >
      {elements[index].title && (
        <Text textAlign="center" fontSize="20px !important">
          {elements[index].title}
        </Text>
      )}
      <Box
        position="relative"
        width="100%"
        display="flex"
        flexDir="column"
        alignItems="center"
      >
        <AspectRatio position="relative" ratio={2} width="95%">
          <Image
            src={elements[index].image}
            alt={elements[index].title || "Carousel image"}
            fill
          />
        </AspectRatio>
        {elements.length > 1 && (
          <>
            <IconButton
              aria-label="left"
              icon={<ChevronLeftIcon w={10} h={10} />}
              bg="brand.orange"
              color="white"
              pos="absolute"
              left="-20px"
              top="50%"
              borderRadius="45"
              boxShadow="0 3px 6px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
              onClick={onLeftClick}
              _hover={{ bg: "brand.darkorange" }}
            />
            <IconButton
              aria-label="left"
              icon={<ChevronRightIcon w={10} h={10} />}
              bg="brand.orange"
              color="white"
              pos="absolute"
              right="-20px"
              top="50%"
              borderRadius="45"
              shadow="md"
              boxShadow="0 3px 6px 0 rgb(60 64 67 / 30%), 0 1px 3px 1px rgb(60 64 67 / 15%)"
              onClick={onRightClick}
              _hover={{ bg: "brand.darkorange" }}
            />
          </>
        )}
      </Box>
      {elements[index].description && (
        <Text
          display="inline-block"
          whiteSpace="pre-line"
          textAlign="center"
          px="20px"
        >
          {elements[index].description}
        </Text>
      )}
    </Flex>
  );
};

export default Carousel;
