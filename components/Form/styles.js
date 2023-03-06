import { StyleSheet } from "react-native";
import COLORS from "../../COLORS";
const styles = StyleSheet.create({
    headerboxcorners :{
        marginTop:20,
        margin:20,
        borderRadius: 30,
        borderWidth: 2 ,
        borderColor :COLORS.primary,
        padding: 20,
        // width: 200,
        height: 70,
        opacity:1,
        backgroundColor:"grey",
      },
      input:{
        color:COLORS.light,
        flex:1,
        fontSize:18,
    },
})