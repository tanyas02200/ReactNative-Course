// import {
//   SafeAreaView,
//   Text,
//   View,
//   TouchableOpacity,
//   Button,
//   TextInput,
// } from "react-native";
// import React from "react";
// import styles from "./styles";
// import { useState, useEffect } from "react";
// //let reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/ ;
// const isvalidobjectfield = (obj) => {
//   return Object.values(obj).every((value) => value.trim());
// };
// const updateError = (error, stateUpdater) => {
//   stateUpdater(error);
//   setTimeout(() => {
//     stateUpdater("");
//   }, 2500);
// };
// const isvalidemail = (value) => {
//   const reg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
//   return reg.test(value);
// };

// const Form = ({ formData, isSignIn }) => {
//   console.log("Hello work");
//   const [error, setError] = useState("");
//   const tp = {};
//   const [user, setUser] = useState({});
//   const isvalidform = () => {
//     //we will accept only if they have value
//     if (isvalidobjectfield(user))
//       return updateError("Required all fields", setError);
//     //if valid name of 3 or more characters
//     if (!fullName.trim() || fullName.length < 3)
//       return updateError("Required all fields", setError);
//     //if valid email id
//     if (!isvalidemail(email)) return updateError("invalid email", setError);
//   };
//   const handlesubmit = (e) => {
//     if (isvalidform()) {
//       console.log(user);
//     }
//   };
//   return (
//     <>
//       {formData.map((data) => {
//         return (
//           <>
//             {data.isPassword ? (
//               <TextInput
//                 style={styles.input}
//                 placeholder={data.placeholder}
//                 value={user.name}
//                 keyboardType="numeric"
//                 onChangeText={(val) =>
//                   setUser({ ...user, [`${data.entityName}`]: val })
//                 }
//                 secureTextEntry
//               />
//             ) : (
//               <TextInput
//                 style={styles.input}
//                 placeholder={data.placeholder}
//                 value={user.name}
//                 onBlur={() => this.emailvalidator}
//                 onChangeText={(val) =>
//                   setUser({ ...user, [`${data.entityName}`]: val })
//                 }
//               />
//             )}
//           </>
//         );
//       })}
//       {error ? (
//         <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
//       ) : null}
//       <TouchableOpacity style={styles.Button}>
//         <Text>
//           {isSignIn ? (
//             <Text onPress={handlesubmit}>Sign In</Text>
//           ) : (
//             <Text onPress={handlesubmit}>Sign Up</Text>
//           )}
//         </Text>
//       </TouchableOpacity>
//     </>
//   );
// };
// export default Form1;
