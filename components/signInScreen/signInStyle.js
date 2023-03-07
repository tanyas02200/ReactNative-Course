import { StyleSheet } from "react-native";
import COLORS from "../../COLORS";
const styles = StyleSheet.create({
  verticalalignment: {
    display: "flex",
    flexDirection: "column",
    gap: "10%",
  },
  centeralignment: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  footertext: { color: COLORS.pink },
});
export default styles;
