import { Flex, Grid, Text } from "@chakra-ui/react";
import React from "react";
import { interestedSkills, skills } from "@/utils/skills";
import Skill from "./Skill";

const SkillList = () => (
  <Flex flexDir="column" alignItems="center" mt="40px">
    <Grid templateColumns="repeat(5, 1fr)" gap={6}>
      {skills.map((skill) => {
        return (
          <Skill
            imgSrc={`/skills/${skill.fileName}`}
            text={skill.description}
            key={skill.description}
          />
        );
      })}
    </Grid>
    <Text mt="40px" fontSize="30px">
      Interested In
    </Text>
    <Grid>
      {interestedSkills.map((skill) => {
        return (
          <Skill
            imgSrc={`/skills/${skill.fileName}`}
            text={skill.description}
            key={skill.description}
          />
        );
      })}
    </Grid>
  </Flex>
);
export default SkillList;
