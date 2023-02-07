import { ReactIcon } from "@chakra-ui/icons";
import { Box, Text } from "@chakra-ui/react";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const LPElement = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: "#0a0a36", color: "#fff" }}
      icon={<ReactIcon />}
      date="6 months"
    >
      <Box>LocalPayment</Box>
      <Text>
        Localpayment offers a fully localized payments solution that connects
        you with several local payment methods in many countries in emerging
        markets.
      </Text>
    </VerticalTimelineElement>
  );
};

export default LPElement;
