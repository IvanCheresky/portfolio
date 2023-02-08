import { Text } from "@chakra-ui/react";
import Link from "next/link";
import React, { forwardRef } from "react";
import { RouteInfo } from "@/utils/routes";
import { motion } from "framer-motion";

interface AnimatedLinkProps {
  currentRoute: string;
  route: RouteInfo;
  fontColor: string;
}

const AnimatedLink = forwardRef<HTMLDivElement, AnimatedLinkProps>(
  ({ currentRoute, route, fontColor }: AnimatedLinkProps, ref) => {
    return (
      <Link href={route.path}>
        <Text
          fontSize={26}
          color={currentRoute === route.path ? "brand.orange" : fontColor}
          ref={ref}
        >
          {route.name}
        </Text>
      </Link>
    );
  }
);

AnimatedLink.displayName = "AnimatedLink";

export default motion(AnimatedLink);
