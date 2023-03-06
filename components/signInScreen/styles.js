import { StyleSheet } from "react-native";
import COLORS from "/Users/tanyaasharma/DesignProj/COLORS.js";
const styles = StyleSheet.create({
  
  ViewMain: {
  addingHorizontal:20,
        flex:1,
  },
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
    header1: {
    fontWeight:'bold',
     color:"#000",
     fontSize:30
  },
  header2: {
    fontWeight:'bold',
     color:"#30D5C8",
     fontSize:30
  },
  inputIcon:{
    marginTop:5,
    position:'absolute',
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
  marginVertical:20,
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
  width: 10,
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

Orbox:{
  flexDirection:'row',
  justifyContent:'center',
  alignItems:'center',
 justifyContent: "space-between",
},
SUcont:{
  paddingHorizontal:20,
    flex:1,
    backgroundColor:COLORS.white,
},
headerboxcorners :{
  marginTop:20,
  margin:20,
  borderRadius: 30,
  borderWidth: 2 ,
  borderColor :"black",
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
Donthaveaccount:
{ 
  color: COLORS.light, 
  fontWeight: "bold" },
  signuptext:
  { color: COLORS.pink, 
    fontWeight: "bold" }
});
  export default styles;

  