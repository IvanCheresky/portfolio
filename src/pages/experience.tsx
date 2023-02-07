import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { ReactIcon, SunIcon } from "@chakra-ui/icons";
import { Box, Flex, Text } from "@chakra-ui/react";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

export default function Experience() {
  return (
    <HeaderLayout currentRoute={routes.experience.path}>
      <Box mt="50px">
        <VerticalTimeline>
          <VerticalTimelineElement
            contentStyle={{ background: "#000006", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000006" }}
            date="January 2021 - Present"
            iconStyle={{ background: "#0a0a36", color: "#fff" }}
            icon={<ReactIcon />}
          >
            <Flex flexDir="column">
              <Text fontSize="40px !important" alignSelf="center">
                Moove It
              </Text>
              <Text fontSize="30px !important">Projects</Text>
              <Text>US-based Software Factory</Text>
              <Text>Projects:</Text>
              <Text>Remedy Health Media</Text>
              <Text>Kubrick</Text>
              <Text>East Goes Global</Text>
              <Text>Heliflite</Text>
            </Flex>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000006", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000006" }}
            iconStyle={{ background: "#0a0a36", color: "#fff" }}
            icon={<SunIcon />}
            date="6 months"
          >
            <Box>LocalPayment</Box>
            <Text>
              Localpayment offers a fully localized payments solution that
              connects you with several local payment methods in many countries
              in emerging markets.
            </Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000006", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000006" }}
            iconStyle={{ background: "#0a0a36", color: "#fff" }}
            icon={<SunIcon />}
            date="2 years"
          >
            <Box>Zuvvii</Box>
            <Text>A platform designed for sharing clips.</Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000006", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000006" }}
            iconStyle={{ background: "#0a0a36", color: "#fff" }}
            icon={<SunIcon />}
          >
            <Box>DernySoftware</Box>
            <Text>Freelance work</Text>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            contentStyle={{ background: "#000006", color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  #000006" }}
            iconStyle={{ background: "#0a0a36", color: "#fff" }}
            icon={<SunIcon />}
          >
            <Box>University Of Buenos Aires (UBA)</Box>
            <Text>Graduate degree in Economics</Text>
            <Text>Graduate degree in Information Systems (unfinished)</Text>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </Box>
    </HeaderLayout>
  );
}
