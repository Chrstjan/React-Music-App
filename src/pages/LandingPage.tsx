import { Button } from "../components/Button/Button";
import { Icon } from "../components/Icon/Icon";
import { Wrapper } from "../components/Wrapper/Wrapper";
import { IoMoonSharp } from "react-icons/io5";

export const LandingPage = () => {
  const handleClick = () => {
    console.log("lol");
  };
  return (
    <Wrapper styling="flex-column">
      <Button
        action={handleClick}
        type="m-btn border-none sharp-btn submit-btn"
        text="Click me!"
      />
      <Icon action={handleClick} style="m-icon">
        <IoMoonSharp />
      </Icon>
    </Wrapper>
  );
};
