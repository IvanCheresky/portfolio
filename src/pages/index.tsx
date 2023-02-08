import { Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import Link from "next/link";

export default function Home() {
  return (
    <HeaderLayout currentRoute={routes.home.path}>
      <Flex flexDir="column" alignItems="flex-start" h="100%">
        <Text color="brand.orange" fontSize="90px" pt="15%">
          Ivan Cheresky
        </Text>
        <Text fontSize="30px" mb="10px">
          Software Developer
        </Text>
        <Link href={routes.contact.path}>
          <Text
            bg="brand.orange"
            textTransform="uppercase"
            w="auto"
            border="3px solid"
            borderColor="brand.orange"
            borderRadius="6px"
            px="24px"
            mt="3%"
            py="5px"
            fontWeight="bold"
          >
            Contact me
          </Text>
        </Link>
      </Flex>
    </HeaderLayout>
  );
}
