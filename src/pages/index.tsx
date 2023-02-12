import { Flex, Text } from "@chakra-ui/react";
import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Home() {
  return (
    <HeaderLayout currentRoute={routes.home.path}>
      <Head>
        <title>Home</title>
      </Head>
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex flexDir="column" alignItems="flex-start" h="100%">
          <Text color="brand.orange" fontSize="7xl" pt="15%">
            Ivan Cheresky
          </Text>
          <Text fontSize="3xl" mb="10px">
            Software Developer
          </Text>
          <Link href={routes.contact.path}>
            <Text
              bg="brand.orange"
              textTransform="uppercase"
              w="auto"
              borderColor="brand.orange"
              borderRadius="6px"
              px="27px"
              mt="3%"
              py="8px"
              fontWeight="bold"
              _hover={{ bg: "brand.darkorange" }}
            >
              Contact me
            </Text>
          </Link>
        </Flex>
      </motion.div>
    </HeaderLayout>
  );
}
