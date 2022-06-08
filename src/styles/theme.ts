import "styled-components";
declare module "styled-components" {
  interface DefaultTheme {
    background: string;
    color: string;
    invertedBackground: string;
    invertedColor: string;
  }
}

const lightTheme = {
  background: "#fdfcdc",
  color: "#041C32",
  invertedBackground: "#041C32",
  invertedColor: "#fdfcdc"
};

const darkTheme = {
  background: "#041C32",
  color: "#fdfcdc",
  invertedBackground: "#fdfcdc",
  invertedColor: "#041C32"
};

export const themes = {
  light: lightTheme,
  dark: darkTheme
};
