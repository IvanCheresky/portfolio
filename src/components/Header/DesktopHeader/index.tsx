import { Flex, useColorModeValue } from "@chakra-ui/react";
import React from "react";
import routes from "@/utils/routes";
import ColorSwitchButton from "../ColorSwitchButton";
import AnimatedLink from "./AnimatedLink";

interface DesktopHeaderProps {
  currentRoute: string;
}

const DesktopHeader = ({ currentRoute }: DesktopHeaderProps) => {
  const fontColor = useColorModeValue("brand.black", "gray");

  return (
    <Flex alignItems="center" justify="space-between">
      <ColorSwitchButton />
      <Flex alignItems="center" columnGap="5vw" ml="10px">
        <AnimatedLink
          whileHover={{ scale: 1.2 }}
          currentRoute={currentRoute}
          route={routes.home}
          fontColor={fontColor}
        />
        <AnimatedLink
          whileHover={{ scale: 1.2 }}
          currentRoute={currentRoute}
          route={routes.experience}
          fontColor={fontColor}
        />
        <AnimatedLink
          whileHover={{ scale: 1.2 }}
          currentRoute={currentRoute}
          route={routes.skills}
          fontColor={fontColor}
        />
        <AnimatedLink
          whileHover={{ scale: 1.2 }}
          currentRoute={currentRoute}
          route={routes.contact}
          fontColor={fontColor}
        />
        <AnimatedLink
          whileHover={{ scale: 1.2 }}
          currentRoute={currentRoute}
          route={routes.blog}
          fontColor={fontColor}
        />
      </Flex>
    </Flex>
  );
};

export default DesktopHeader;
