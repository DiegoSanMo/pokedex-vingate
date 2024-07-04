import { DirectionContainer, Button } from "./styles";

export const DirectionButtons = () => {
  return (
    <DirectionContainer>
      <svg
        width="200px"
        height="200px"
        viewBox="0 0 200 200"
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* <!-- Top Button --> */}
        <Button
          $direction="top"
          d="M 90 10 H 110 A 10 10 0 0 1 120 20 V 90 L 100 110 L 80 90 V 20 A 10 10 0 0 1 90 10 Z"
        />
        {/* <!-- Bottom Button --> */}
        <Button
          $direction="bottom"
          d="M 90 190 H 110 A 10 10 0 0 0 120 180 V 110 L 100 90 L 80 110 V 180 A 10 10 0 0 0 90 190 Z"
        />
        {/* <!-- Left Button --> */}
        <Button
          $direction="left"
          d="M 10 90 V 110 A 10 10 0 0 0 20 120 H 90 L 110 100 L 90 80 H 20 A 10 10 0 0 0 10 90 Z"
        />
        {/* <!-- Right Button --> */}
        <Button
          $direction="right"
          d="M 190 90 V 110 A 10 10 0 0 1 180 120 H 110 L 90 100 L 110 80 H 180 A 10 10 0 0 1 190 90 Z"
        />
      </svg>
    </DirectionContainer>
  );
};

export default DirectionButtons;
