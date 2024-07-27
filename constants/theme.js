const COLORS = {
  primary: "#2E3A87",   // Deep Blue
  secondary: "#101957", // Tomato Red
  tertiary: "#FF6347",  // Light gray for backgrounds

  gray: "#8188C3",      // Neutral gray for borders or less prominent text
  gray2: "#BEC2DE",     // Lighter gray for subtle UI elements

  white: "#FFFFFF",     // Pure white
  lightWhite: "#EEEFFB", // Very light gray, almost white for softer background elements
};




const FONT = {
  regular: "DMRegular",
  medium: "DMMedium",
  bold: "DMBold",
};

const SIZES = {
  xSmall: 10,
  small: 12,
  medium: 16,
  large: 20,
  xLarge: 24,
  xxLarge: 32,
};

const SHADOWS = {
  small: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 2,
  },
  medium: {
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 5.84,
    elevation: 5,
  },
};

export { COLORS, FONT, SIZES, SHADOWS };
