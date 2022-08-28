import { ExternalLinkIcon } from "@chakra-ui/icons";
import { Box, Flex, Text, Link } from "@chakra-ui/react";
import {
  Animator,
  batch,
  Fade,
  FadeIn,
  Move,
  MoveIn,
  MoveOut,
  ScrollContainer,
  ScrollPage,
  Sticky,
  StickyIn,
  ZoomIn,
} from "react-scroll-motion";
import { starwarsBlue, starwarsYellow } from "../../color";

export const ActualApp = () => {
  const ZoomInScrollOut = batch(StickyIn(), FadeIn(), ZoomIn());
  const FadeUp = batch(Fade(), Move(), Sticky());

  return (
    <Box bg="black">
      <ScrollContainer key="whatKey">
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
            <Box w={["80vw", "40vw"]}>
              <Text color={starwarsYellow} fontSize="150%" fontWeight="bold">
                Hello there,
              </Text>
              <Text color={starwarsYellow} fontSize={["20"]}>
                Robert here. Currently I’m studying Computer Science at Faculty
                of Mathematics and Informatics, Univerity of Bucharest. I’m a
                competitive person trying to get the best results in everything
                I do. Honest, motivated, innovative and creative, I am looking
                to work in IT industry. Let’s see why you should consider hire
                me.{" "}
              </Text>
            </Box>
          </Animator>
        </ScrollPage>

        <ScrollPage key="4">
          <Animator animation={MoveIn(-1000, 0)}>
            <Flex h={"100vh"} w={"100vw"} justify="center" align="center">
              <Box width={["90vw", "50vw"]} fontSize={["20"]}>
                <Text color={starwarsYellow} fontSize="150%" fontWeight="bold">
                  Education
                </Text>
                <Text color={starwarsYellow}>
                  2017 to 2021 -{">"} "Gheorghe Sincai" National College
                </Text>
                <Text color={starwarsYellow}>
                  2021 to 2024 -{">"} Faculty of Mathematics and Informatics,
                  Univerity of Bucharest
                </Text>
              </Box>
            </Flex>
          </Animator>
        </ScrollPage>

        <ScrollPage key="5">
          <Animator animation={MoveIn(1000, 0)}>
            <Flex h={"100vh"} w={"100vw"} justify="center" align="center">
              <Box color={starwarsYellow} width={["80vw", "50vw"]}>
                <Text color={starwarsYellow} fontSize="150%" fontWeight="bold">
                  Experience
                </Text>
                <Text fontWeight="bold" color={starwarsBlue}>
                  Feb 2022 to May 2022 -{">"} Trainer at Logiscool Romania
                </Text>
                <Text>
                  As a trainer, my job was to teach kids (from age 8 to 17) the
                  basic concepts of programmig using Kodu and JavaScript. It was
                  a fun experience, training my comunication skill and also
                  strengthening my foundations.
                </Text>
                <Text fontWeight="bold" mt={3} color={starwarsBlue}>
                  Jul 2022 to Sep 2022 -{">"} REACT INTERN AT CORNERSTONE
                  TECHNOLOGIES
                </Text>
                <Text>
                  {" "}
                  During this internship, I learned many concepts of React and
                  TypeScript, the most important being writing clean code and
                  folder strucuring. I also get used to work in a team, which is
                  very usefull when you work on a pretty complex project.
                </Text>
              </Box>
            </Flex>
          </Animator>
        </ScrollPage>

        <ScrollPage key="6">
          <Animator animation={batch(Fade(), Sticky())}>
            <Text
              color={starwarsYellow}
              fontSize={["20"]}
              width={["90vw", "50vw"]}
            >
              That's it! If you liked that, you can contact me via{" "}
              <Link
                href="mailto:robertudrea2002@yahoo.ro?Subject=Hello%20there!"
                isExternal
              >
                Email <ExternalLinkIcon />
              </Link>{" "}
              or{" "}
              <Link href="https://www.linkedin.com/in/robert-udrea/" isExternal>
                LinkedIn <ExternalLinkIcon />
              </Link>
            </Text>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Box>
  );
};
