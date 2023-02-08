import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import Carousel, { CarouselElement } from "../../Carousel";

interface TimelineElementContentProps {
  title: string;
  description: string;
  elementsTitle?: string;
  elements?: CarouselElement[];
}

const TimelineElementContent = ({
  title,
  description,
  elementsTitle,
  elements,
}: TimelineElementContentProps) => {
  return (
    <Flex
      flexDir="column"
      alignItems="center"
      border="1px"
      borderColor="brand.orange"
      p="20px"
    >
      <Link href="https://mooveit.com/" style={{ alignSelf: "center" }}>
        <Text
          fontSize="40px !important"
          color="brand.orange"
          textAlign="center"
        >
          {title}
        </Text>
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
