import { StyleSheet } from "react-native";
import COLORS from "../consts/color";

const STYLES = StyleSheet.create({
    inputContainer:{flexDirection:"row",marginTop:30},
    inputIcon:{
        marginTop:5,
        position:'absolute',
    },
    input:{
        color:COLORS.light,
        paddingLeft:40,
        borderBottomWidth:2,
        flex:1,
        fontSize:18,
    },
    Button1:{
        backgroundColor: COLORS.primary,
        height:50,
        marginTop:50,
        justifyContent:'center',
        alignItems:'center',
        borderRadius: 5,
    },
    line:{
        height:1,
        width:30,
        backgroundColor:COLORS.light,
    },
    Button2:{
    height:50,
    borderWidth:1,
    borderColor:COLORS.light,
     flex:1,
   justifyContent:'center',
alignItems:'center',
borderRadius:5,
flexDirection:'row',
    },
    btnimage:
    {
        width:25,
        height:20,
        marginLeft:5,
    },


});

export default STYLES;