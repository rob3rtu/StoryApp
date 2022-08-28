import { Box, Flex, Text } from "@chakra-ui/react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { starwarsBlue, starwarsYellow } from "../../../color";

export const Intro = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <ScrollContainer>
      <ScrollPage key="1">
        <Animator animation={batch(Fade(), Sticky(), MoveOut(0, -200))}>
          <Flex h={"100vh"} w={"100vw"} justify="center" align="center">
            <Box textAlign="left">
              <Text
                fontFamily="serif"
                color={starwarsBlue}
                fontSize={["2xl", "5xl"]}
                width="100%"
              >
                A long time ago in a galaxy far,
              </Text>
              <Text
                fontFamily="serif"
                color={starwarsBlue}
                fontSize={["2xl", "5xl"]}
              >
                far away…
              </Text>
            </Box>
          </Flex>
        </Animator>
      </ScrollPage>

      <ScrollPage key="2">
        <Animator animation={ZoomInScrollOut}>
          <Flex h={"100vh"} w={"100vw"} justify="center" align="center">
            <Box textAlign="center">
              <Text
                fontFamily="StarWars"
                color={starwarsYellow}
                fontSize={["3xl", "7xl"]}
              >
                Robert Udrea
              </Text>
              <Text
                fontFamily="StarWars"
                color={starwarsYellow}
                fontSize={["3xl", "7xl"]}
                lineHeight={1}
              >
                Web Developer
              </Text>
            </Box>
          </Flex>
        </Animator>
      </ScrollPage>

      <ScrollPage key="3">
        <Animator animation={FadeUp}>
          <Text>Hello there! </Text>
        </Animator>
      </ScrollPage>
    </ScrollContainer>
  );
};
