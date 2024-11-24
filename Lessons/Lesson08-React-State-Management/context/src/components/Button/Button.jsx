import { useTheme } from "../../context/ThemeContext";

const Button = () => {
  const { theme, setTheme } = useTheme();

  return (
    <>
      <button onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
        Change theme to {theme === "light" ? "dark" : "light"}
      </button>
    </>
  );
};
export default Button;
