import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import MooveItElement from "./MooveItElement";
import LPElement from "./LPElement";
import ZuvviiElement from "./ZuvviiElement";
import DSElement from "./DSElement";
import UBAElement from "./UBAElement";
import "react-vertical-timeline-component/style.min.css";
import { colors } from "@/utils/theme";
import { useColorModeValue } from "@chakra-ui/react";

const Timeline = () => {
  const lineColor = useColorModeValue(colors.brand.orange, "white");

  return (
    <VerticalTimeline lineColor={lineColor}>
      <MooveItElement />
      <LPElement />
      <ZuvviiElement />
      <DSElement />
      <UBAElement />
    </VerticalTimeline>
  );
};

export default Timeline;
