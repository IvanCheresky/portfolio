import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import {
  Flex,
  IconButton,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React from "react";
import routes from "@/utils/routes";

interface DesktopHeaderProps {
  currentRoute: string;
}

const DesktopHeader = ({ currentRoute }: DesktopHeaderProps) => {
  const { colorMode, toggleColorMode } = useColorMode();

  const fontColor = useColorModeValue("brand.black", "gray");

  return (
    <Flex alignItems="center" justify="space-between">
      <IconButton
        border="1px"
        borderColor="brand.orange"
        bg="transparent"
        aria-label="Toggle light dark mode"
        onClick={toggleColorMode}
        icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
      />
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
