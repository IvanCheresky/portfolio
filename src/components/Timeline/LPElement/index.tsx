import { ReactIcon } from "@chakra-ui/icons";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { colors } from "@/utils/theme";
import { CarouselElement } from "../../Carousel";
import TimelineElementContent from "../TimelineElementContent";

const LPElement = () => {
  const elements: CarouselElement[] = [
    {
      image: "/projects/lp.png",
      description: `Worked mostly as a backend developer using .NET.
      \nUsed REST API, Docker, AWS, Portainer, Jenkins, SQL Server, Postgres in a microservices architecture.
      `,
    },
  ];

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      iconStyle={{ background: colors.brand.orange, color: "#fff" }}
      icon={<ReactIcon />}
      date="6 months"
    >
      <TimelineElementContent
        title="LocalPayment"
        description="Payments service provider"
        elements={elements}
      />
    </VerticalTimelineElement>
  );
};

export default LPElement;
