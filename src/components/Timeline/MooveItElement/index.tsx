import { ReactIcon } from "@chakra-ui/icons";
import React from "react";
import { VerticalTimelineElement } from "react-vertical-timeline-component";
import { colors } from "@/utils/theme";
import { CarouselElement } from "../../Carousel";
import TimelineElement from "../TimelineElementContent";

const MooveItElement = () => {
  const elements: CarouselElement[] = [
    {
      image: "/projects/egg.png",
      title: "East Goes Global",
      description: `An agency connecting celebrities to the Chinese market.
      \nWorked as a full-stack developer using Next.js and Node (Koa).
      \nUsed REST API and Docker.
      `,
    },
    {
      image: "/projects/remedy.png",
      title: "Remedy Health Media",
      description: `A health media company.
      \nWorked as a frontend developer using mainly Next.js.
      \nUsed Contentful (Graphql and REST API), CircleCI, Docker.
      `,
    },
    {
      image: "/projects/kubrick.png",
      title: "Kubrick",
      description: `Time tracking software.
      \nWorked as a full-stack developer (mainly backend) using Next.js and Node (Koa with Apollo server).
      \nUsed Graphql, Postgres, Redis, Docker and AWS/Kubernetes.
      `,
    },
    {
      image: "/projects/heliflite.png",
      title: "Heliflite",
      description: `A helicopter trip company
      \nWorked as a full-stack developer using Next.js and Node (Nest.js).
      \nUsed REST API, Postgres and Docker.
      `,
    },
  ];

  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#000006", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid  #000006" }}
      date="January 2021 - Present"
      iconStyle={{ background: colors.brand.orange, color: "#fff" }}
      icon={<ReactIcon />}
    >
      <TimelineElement
        title="Moove It"
        description="US-based Software Factory"
        elementsTitle="Projects:"
        elements={elements}
      />
    </VerticalTimelineElement>
  );
};

export default MooveItElement;
