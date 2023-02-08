import { ReactIcon } from "@chakra-ui/icons";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { colors } from "@/utils/theme";
import { CarouselElement } from "../../Carousel";
import TimelineElementContent from "../TimelineElementContent";

const ZuvviiElement = () => {
  const elements: CarouselElement[] = [
    {
      image: "/projects/zuvvii.png",
      description: `Worked as a fullstack developer using .NET (Web API and Xamarin) and Next.js.
      \nUsed REST API, Docker, SQL Server.
      `,
    },
  ];

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: colors.brand.orange, color: "#fff" }}
      icon={<ReactIcon />}
      date="2 years"
    >
      <TimelineElementContent
        title="Zuvvii"
        description="A social media platform for sharing clips."
        elements={elements}
      />
    </VerticalTimelineElement>
  );
};

export default ZuvviiElement;
