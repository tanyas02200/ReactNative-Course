import { StyleSheet } from "react-native";
import COLORS from "../../COLORS";
const styles = StyleSheet.create({
  input: {
    color: COLORS.light,
    margin: 10,
    padding: 10,
    fontSize: 18,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: COLORS.secondary,
    height: 50,
    opacity: 1,
    backgroundColor: "white",
  },
  Button: {
    backgroundColor: COLORS.secondary,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    margin: 25,
    fontWeight: 20,
  }
});

export default styles;
