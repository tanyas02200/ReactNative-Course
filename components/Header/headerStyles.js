import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
  verticalLayout: {
    display: "flex",
    flexDirection: "column",
    gap: "10%",
  },
  headerbody: {
    flexDirection: "row",
    marginTop: 10,
    backgroundColor: "#D3D3D3",
    height: "10%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
  header1text: {
    fontWeight: "bold",
    color: "#000",
    fontSize: 30,
  },
  header2text: {
    fontWeight: "bold",
    color: "#30D5C8",
    fontSize: 30,
  },
});
export default styles;
