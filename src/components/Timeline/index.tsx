import React from "react";
import { VerticalTimeline } from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import MooveItElement from "./MooveItElement";
import LPElement from "./LPElement";
import ZuvviiElement from "./ZuvviiElement";
import DSElement from "./DSElement";

const Timeline = () => {
  return (
    <VerticalTimeline>
      <MooveItElement />
      <LPElement />
      <ZuvviiElement />
      <DSElement />
    </VerticalTimeline>
  );
};

export default Timeline;
