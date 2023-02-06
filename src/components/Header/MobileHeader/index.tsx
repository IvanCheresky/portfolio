import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  Flex,
  IconButton,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import Link from "next/link";
import React, { useState } from "react";
import routes from "@/utils/routes";

interface MobileHeaderProps {
  currentRoute: string;
}

const MobileHeader = ({ currentRoute }: MobileHeaderProps) => {
  const [isOpen, setIsOpen] = useState(false);

  const fontColor = useColorModeValue("brand.black", "gray");
  const bgColor = useColorModeValue("white", "brand.black");

  return (
    <Flex alignItems="flex-end" justifyContent="flex-end">
      <IconButton
        aria-label="menu"
        icon={<HamburgerIcon />}
        bg="transparent"
        size="lg"
        onClick={() => setIsOpen(true)}
      />
      <Drawer size="full" isOpen={isOpen} onClose={() => setIsOpen(false)}>
        <DrawerContent bg={bgColor}>
          <DrawerCloseButton color="brand.orange" />
          <DrawerBody>
            <Flex
              flexDir="column"
              alignItems="center"
              pt="50px"
              rowGap="50px"
              height="100%"
            >
              <Link href={routes.home.path}>
                <Text
                  fontSize={26}
                  color={
                    currentRoute === routes.home.path
                      ? "brand.orange"
                      : fontColor
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
                    currentRoute === routes.skills.path
                      ? "brand.orange"
                      : fontColor
                  }
                >
                  {routes.skills.name}
                </Text>
              </Link>
              <Link href={routes.contact.path}>
                <Text
                  fontSize={26}
                  color={
                    currentRoute === routes.contact.path
                      ? "brand.orange"
                      : fontColor
                  }
                >
                  {routes.contact.name}
                </Text>
              </Link>
              <Link href={routes.blog.path}>
                <Text
                  fontSize={26}
                  color={
                    currentRoute === routes.blog.path
                      ? "brand.orange"
                      : fontColor
                  }
                >
                  {routes.blog.name}
                </Text>
              </Link>
            </Flex>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </Flex>
  );
};

export default MobileHeader;
