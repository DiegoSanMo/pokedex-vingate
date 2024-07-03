import { ArrowBottom, ArrowLeft, ArrowRight, ArrowTop } from "./icons";
import {
  DirectionButton,
  DirectionButtonHorizontal,
  DirectionContainer,
} from "./styles";

export const DirectionButtons = () => {
  return (
    <DirectionContainer>
      <DirectionButton
        onClick={() => console.log("Top")}
        $direction="vertical"
        $position="top"
      >
        <ArrowTop />
      </DirectionButton>
      <DirectionButtonHorizontal>
        <DirectionButton
          onClick={() => console.log("left")}
          $direction="horizontal"
          $position="left"
        >
          <ArrowLeft />
        </DirectionButton>
        <DirectionButton
          onClick={() => console.log("Right")}
          $direction="horizontal"
          $position="right"
        >
          <ArrowRight />{" "}
        </DirectionButton>
      </DirectionButtonHorizontal>
      <DirectionButton
        onClick={() => console.log("Bottom")}
        $direction="vertical"
        $position="bottom"
      >
        <ArrowBottom />
      </DirectionButton>
    </DirectionContainer>
  );
};

export default DirectionButtons;
