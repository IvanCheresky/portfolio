import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { ChevronDownIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";

export default function Skills() {
  return (
    <HeaderLayout currentRoute={routes.contact.path}>
      <Text color="brand.orange" fontSize="70px" mt="5%">
        Get in touch
      </Text>
      <Flex
        flexDir="column"
        alignItems="flex-start"
        rowGap="10"
        mt="3%"
        px="10%"
      >
        <Link href="mailto:ivancheresky@gmail.com">
          <Flex alignItems="center" columnGap="20px">
            <EmailIcon color="brand.orange" w="10" h="10" />
            <Text fontSize="30px">ivancheresky@gmail.com</Text>
          </Flex>
        </Link>
        <Flex alignItems="center" columnGap="20px">
          <PhoneIcon color="brand.orange" w="10" h="10" />
          <Text fontSize="30px">54-9-1167035370</Text>
        </Flex>
        <Flex alignItems="center" columnGap="20px">
          <ChevronDownIcon color="brand.orange" w="10" h="10" />
          <Text fontSize="30px">Buenos Aires</Text>
        </Flex>
      </Flex>
    </HeaderLayout>
  );
}
