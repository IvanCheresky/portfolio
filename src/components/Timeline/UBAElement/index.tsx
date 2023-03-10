import { ReactIcon } from "@chakra-ui/icons";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { colors } from "@/utils/theme";
import TimelineElementContent from "../TimelineElementContent";
import useContentStyle from "@/hooks/useContentStyle";

const UBAElement = () => {
  const description = `Graduate degree in Economics (Magna Cum Laude honors).
  Graduate degree in Information Systems (unfinished).`;

  const contentStyle = useContentStyle();

  return (
    <VerticalTimelineElement
      contentStyle={contentStyle}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: colors.brand.orange, color: "#fff" }}
      icon={<ReactIcon />}
    >
      <TimelineElementContent
        title="University Of Buenos Aires (UBA)"
        description={description}
        href="https://www.uba.ar/"
      />
    </VerticalTimelineElement>
  );
};

export default UBAElement;
