import { Flex, Text, useColorModeValue } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import routes from "@/utils/routes";
import ColorSwitchButton from "../ColorSwitchButton";

interface DesktopHeaderProps {
  currentRoute: string;
}

const DesktopHeader = ({ currentRoute }: DesktopHeaderProps) => {
  const fontColor = useColorModeValue("brand.black", "gray");

  return (
    <Flex alignItems="center" justify="space-between">
      <ColorSwitchButton />
      <Flex alignItems="center" columnGap="5vw" ml="10px">
        <Link href={routes.home.path}>
          <Text
            fontSize={26}
            color={
              currentRoute === routes.home.path ? "brand.orange" : fontColor
            }
          >
            {routes.home.name}
          </Text>
        </Link>
        <Link href={routes.experience.path}>
          <Text
            fontSize={26}
            color={
              currentRoute === routes.experience.path
                ? "brand.orange"
                : fontColor
            }
          >
            {routes.experience.name}
          </Text>
        </Link>
        <Link href={routes.skills.path}>
          <Text
            fontSize={26}
            color={
              currentRoute === routes.skills.path ? "brand.orange" : fontColor
            }
          >
            {routes.skills.name}
          </Text>
        </Link>
        <Link href={routes.contact.path}>
          <Text
            fontSize={26}
            color={
              currentRoute === routes.contact.path ? "brand.orange" : fontColor
            }
          >
            {routes.contact.name}
          </Text>
        </Link>
        <Link href={routes.blog.path}>
          <Text
            fontSize={26}
            color={
              currentRoute === routes.blog.path ? "brand.orange" : fontColor
            }
          >
            {routes.blog.name}
          </Text>
        </Link>
      </Flex>
    </Flex>
  );
};

export default DesktopHeader;
