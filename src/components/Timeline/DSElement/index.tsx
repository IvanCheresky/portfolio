import { ReactIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const DSElement = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: "#0a0a36", color: "#fff" }}
      icon={<ReactIcon />}
      date="2016 - 2020"
    >
      <Box>Derny Software</Box>
      <Text>Freelance work and mobile apps</Text>
      <Text>Over 100,000 downloads on the Google Play Store</Text>
    </VerticalTimelineElement>
  );
};

export default DSElement;
