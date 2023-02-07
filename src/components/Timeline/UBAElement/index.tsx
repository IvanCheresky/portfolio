import { ReactIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const UBAElement = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: "#0a0a36", color: "#fff" }}
      icon={<ReactIcon />}
    >
      <Box>University Of Buenos Aires (UBA)</Box>
      <Text>Graduate degree in Economics</Text>
      <Text>Graduate degree in Information Systems (unfinished)</Text>
    </VerticalTimelineElement>
  );
};

export default UBAElement;
