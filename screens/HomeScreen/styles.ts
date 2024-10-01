import { StyleSheet } from "react-native";
import colors, { ColorType } from "../../utils/colors";
const style = <T extends Partial<ColorType>>(colors: T) =>
  StyleSheet.create({
    /**
     * App background style.
     * Represents the background style for the entire app with the following properties:
     * - flex: 1 (flexible size to fit available space)
     * - paddingHorizontal: 10 (horizontal padding spacing)
     * - backgroundColor: colors.appBackground (background color using the 'appBackground' color from the 'colors' object)
     */
    background: {
      flex: 1,
      paddingHorizontal: 10,
      backgroundColor: colors.appBackgroundTwo,
    },
    /**
     * View style for the carousel view.
     * Represents a view for the carousel with the following properties:
     * - flex: 1 (flexible size to fit available space)
     * - alignItems: 'center' (align items to the center of the container)
     * - justifyContent: 'center' (justify content to the center of the container)
     */
    carouselView: {
      flex: 1,
      alignItems: "center",
      justifyContent: "center",
    },
  });

export default style;
