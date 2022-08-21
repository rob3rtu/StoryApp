import { Box, Flex, Text } from "@chakra-ui/react";

export const ALongTimeAgo = () => {
  return (
    <Flex h={"100vh"} justify="center" align="center">
      <Box textAlign="left">
        <Text fontFamily="serif" color="#57cac3" fontSize={["2xl", "5xl"]}>
          A long time ago in a galaxy far,
        </Text>
        <Text fontFamily="serif" color="#57cac3" fontSize={["2xl", "5xl"]}>
          far away…
        </Text>
      </Box>
    </Flex>
  );
};
