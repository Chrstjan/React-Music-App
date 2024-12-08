import { Button } from "../components/Button/Button";

export const LandingPage = () => {
  const handleClick = () => {
    console.log("lol");
  };
  return (
    <div>
      LandingPage
      <Button
        action={handleClick}
        type="m-btn border-none sharp-btn submit-btn"
        text="Click me!"
      />
    </div>
  );
};
