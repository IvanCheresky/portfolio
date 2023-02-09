import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { ChevronDownIcon, EmailIcon, PhoneIcon } from "@chakra-ui/icons";
import { Flex, Text } from "@chakra-ui/react";
import Link from "next/link";
import { motion } from "framer-motion";
import Head from "next/head";

export default function Skills() {
  return (
    <HeaderLayout currentRoute={routes.contact.path}>
      <Head>
        <title>Contact</title>
      </Head>
      <Text color="brand.orange" fontSize="7xl" mt="2%">
        Get in touch
      </Text>
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
      >
        <Flex
          flexDir="column"
          alignItems="flex-start"
          rowGap="10"
          mt="5%"
          px="10%"
          overflow="scroll"
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
      </motion.div>
    </HeaderLayout>
  );
}
