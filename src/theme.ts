import { extendTheme } from "@chakra-ui/react";

// 2. Call `extendTheme` and pass your custom values
const theme = extendTheme({
  colors: {
    bgColor: "#555",
    bgColorComponents: "#615b5b",
    colorLabel: "#ada4a4",
    colorInput: "#d9d9d9",
    whiteText: "#f1ebeb",
    blackText: "rgb(22, 22, 22)",
    hoverColor: "#3182ce",
    titleColor: "#abace3",
    borderColor: "#abace3",
    subTitleColor: "#c0b4b4",
    incomeColor: "rgb(53, 138, 175)",
    expenseColor: "rgb(179 33 221 / 53%)",
  },
});

export { theme };
