import { Box } from "@chakra-ui/react";
import {
  Animator,
  Fade,
  ScrollContainer,
  ScrollPage,
} from "react-scroll-motion";
import { ALongTimeAgo } from "./Text Components/ALongTimeAgo";

export const ActualApp = () => {
  return (
    <Box bg="black">
      <ScrollContainer>
        <ScrollPage>
          <Animator animation={Fade()}>
            <ALongTimeAgo />
          </Animator>
        </ScrollPage>
        <ScrollPage>
          <Animator animation={Fade()}>
            <h1>Hello there</h1>
          </Animator>
        </ScrollPage>
      </ScrollContainer>
    </Box>
  );
};
