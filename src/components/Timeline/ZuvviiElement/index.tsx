import { ReactIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const ZuvviiElement = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: "#0a0a36", color: "#fff" }}
      icon={<ReactIcon />}
      date="2 years"
    >
      <Box>Zuvvii</Box>
      <Text>A platform designed for sharing clips.</Text>
    </VerticalTimelineElement>
  );
};

export default ZuvviiElement;
