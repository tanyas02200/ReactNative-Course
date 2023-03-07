import { StyleSheet } from "react-native";
import COLORS from "../../COLORS";
const styles = StyleSheet.create({
  verticalalignment: {
    display: "flex",
    flexDirection: "column",
    gap: "10%",
  },
  centeralalignment: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: { color: "black" },
});
export default styles;
