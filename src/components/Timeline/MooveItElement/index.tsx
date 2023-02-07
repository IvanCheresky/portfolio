import { ReactIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";

const MooveItElement = () => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      date="January 2021 - Present"
      iconStyle={{ background: "#0a0a36", color: "#fff" }}
      icon={<ReactIcon />}
    >
      <Flex flexDir="column">
        <Link href="https://mooveit.com/">
          <Text fontSize="40px !important" alignSelf="center">
            Moove It
          </Text>
        </Link>
        <Text>US-based Software Factory</Text>
        <Text fontSize="30px !important">Projects</Text>
        <Text>Projects:</Text>
        <Text>Remedy Health Media</Text>
        <Text>Kubrick</Text>
        <Text>East Goes Global</Text>
        <Text>Heliflite</Text>
      </Flex>
    </VerticalTimelineElement>
  );
};

export default MooveItElement;
