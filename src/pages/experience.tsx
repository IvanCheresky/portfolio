import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";
import { Box } from "@chakra-ui/react";
import Timeline from "@/components/Timeline";

export default function Experience() {
  return (
    <HeaderLayout currentRoute={routes.experience.path}>
      <Box mt="50px">
        <Timeline />
      </Box>
    </HeaderLayout>
  );
}
