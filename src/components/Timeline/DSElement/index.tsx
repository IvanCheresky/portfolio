import { ReactIcon } from "@chakra-ui/icons";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { colors } from "@/utils/theme";
import TimelineElementContent from "../TimelineElementContent";

const DSElement = () => {
  const description = `Freelance work and mobile apps.
  
  Over 100,000 downloads on the Google Play Store.
  Using a variety of technologies including Java, .NET, LibGDX, Unity.`;

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: colors.brand.orange, color: "#fff" }}
      icon={<ReactIcon />}
      date="2016 - 2020"
    >
      <TimelineElementContent title="DernySoftware" description={description} />
    </VerticalTimelineElement>
  );
};

export default DSElement;
