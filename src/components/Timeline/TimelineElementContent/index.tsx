import { Flex, Text, Link as ChakraLink } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Carousel, { CarouselElement } from "../../Carousel";

interface TimelineElementContentProps {
  title: string;
  description: string;
  elementsTitle?: string;
  elements?: CarouselElement[];
  href: string;
}

const TimelineElementContent = ({
  title,
  description,
  elementsTitle,
  elements,
  href,
}: TimelineElementContentProps) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      border="1px"
      borderColor="brand.orange"
      borderRadius="25px"
      p="20px"
    >
      <Link href={href} style={{ alignSelf: "center" }}>
        <ChakraLink
          fontSize="40px !important"
          color="brand.orange"
          textAlign="center"
        >
          {title}
        </ChakraLink>
      </Link>
      <Text pb="10px" whiteSpace="pre-line" textAlign="center">
        {description}
      </Text>
      {elementsTitle && <Text fontSize="25px !important">{elementsTitle}</Text>}
      {elements && <Carousel elements={elements} />}
    </Flex>
  );
};

export default TimelineElementContent;
