import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { Box } from "@chakra-ui/react";
import Timeline from "@/components/Timeline";
import Head from "next/head";

export default function Experience() {
  return (
    <HeaderLayout currentRoute={routes.experience.path}>
      <Head>
        <title>Experience</title>
      </Head>
      <Box mt="50px">
        <Timeline />
      </Box>
    </HeaderLayout>
  );
}
