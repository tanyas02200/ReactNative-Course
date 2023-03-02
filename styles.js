import { StyleSheet } from "react-native";
import COLORS from "./COLORS";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
      padding:40,
    },
    inputContainer:{
      flexDirection:"row",
      marginTop:30
    },

    Viewstyle1:{
      flexDirection:'row',
      marginTop:10,
      backgroundColor:'#D3D3D3',
      height:'10%',
      display:'flex',
      justifyContent: 'center',
      alignItems: 'center',
    },
    textstyle1: {
    fontWeight:'bold',
     color:"#000",
     fontSize:30
  },
  textstyle2: {
    fontWeight:'bold',
     color:"#30D5C8",
     fontSize:30
  },
  inputIcon:{
    marginTop:5,
    position:'absolute',
},
input:{
    color:COLORS.light,
    // paddingLeft:40,
    // borderBottomWidth:2,
    flex:1,
    fontSize:18,
},
Button1:{
  backgroundColor: COLORS.secondary,
  height:50,
  marginTop:20,
  justifyContent:'center',
  alignItems:'center',
  borderRadius: 100,
  margin:25
},
rcorners2 :{
  marginTop:20,
  margin:20,
  borderRadius: 30,
  borderWidth: 2 ,
  borderColor :COLORS.primary,
  padding: 20,
  // width: 200,
  height: 70,
  opacity:1,
  backgroundColor:"#D3D3D3",
},
Button1style:{
  color:COLORS.white,
  fontWeight:'bold',
  fontSize:18
},
ForgetP:{
  flexDirection:'row', 
  // height:'10%',
  display:'flex',
  justifyContent: 'center',
  alignItems: 'center',
    
},
ForgetT:{
  color:"#000",
  fontSize:20,
  fontStyle:"bold"  
},
line:{
  height:1,
  width:30,
  backgroundColor:COLORS.light,
},
Button2:{
height:50,
borderWidth:2,
borderColor:COLORS.secondary,
flex:1,
justifyContent:'center',
alignItems:'center',
borderRadius:30,
flexDirection:'row',
margin:10,
},
Orbutton:
{
  marginVertical:30,
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
},
Ortext:{
  fontWeight:'bold',
  marginHorizontal:5,
},
Orbox:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
},
SUcont:{
  paddingHorizontal:20,
    flex:1,
    backgroundColor:COLORS.white,
},

});
  export default styles;

  