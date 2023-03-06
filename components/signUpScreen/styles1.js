import { StyleSheet } from "react-native";
import COLORS from "./../../COLORS";
const styles = StyleSheet.create({
  verticalLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "10%",
  },
  centerLayout: {
    flexDirection: "column",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  horizontalLayout: {
    flexDirection: "row",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  body: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#D3D3D3",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header1: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 30,
  },
  header2: {
    fontWeight: "bold",
    color: "#30D5C8",
    fontSize: 30,
  },
  SignInButton: {
    backgroundColor: COLORS.secondary,
    height: 50,
    marginTop: 20,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 100,
    margin: 25,
    fontWeight: 20,
  },
  signuptext: 
  { color: "black" },
});
export default styles;
