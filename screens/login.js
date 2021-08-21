import React, { useState } from "react";
import {
  Text,
  View,
  StyleSheet,
  TextInput,
  StatusBar,
  TouchableOpacity,
  Image,
  SafeAreaView,
 alert

} from "react-native";



const Login = ({ navigation }) => { 
  
const [email, setEmail] = useState("");
const [password, setPassword] = useState("");


 const login = ()=>{
  fetch(`http://localhost:8012/My-php/Login.php`, {
    method: "POST",
    mode: "cors",

    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    
    },

    body: JSON.stringify({
      email: email,
      password: password,
    }),

  })
    .then((res) => res.json())
    .then((response) => {
      console.log(response)
      navigation.navigate("home.js")
      alert("weelcome!!!!!");
    })
   
}
    
  return (
    <SafeAreaView style={{flex:1}} >
   
    <View style={styles.container}>
   
      <StatusBar backgroundColor="#15B3D6" barStyle="light-content" />
      <Text style={styles.txt}> Welcome back ! </Text>
    
      <View>
      <Image source={require("../assets/login.png")} style={{height:200,width:300,alignSelf:"center" ,bottom:-40,position:"absolute"}}></Image>
      </View>
   
      <TextInput
        style={styles.input1}
        placeholder="Email"
        placeholderTextColor="#516F75"
        onChangeText={(email) => setEmail(email)}
      />

      <TextInput
        style={styles.input2}
        placeholder="Password"
        placeholderTextColor="#516F75"
        secureTextEntry={true}
        onChangeText={(password) => setPassword(password)}
      />
 
      <TouchableOpacity name="login" style={styles.button} onPress={login} >
        <Text style={styles.text}> Login </Text>
      </TouchableOpacity>

      <Text style={{ position: "absolute", top: 550, color: "#71D3E7" }}>
        Don't have an account yet ?
        </Text>
      <TouchableOpacity
        // onPress={() => navigation.navigate("RolleSelectionScreen")}
        style={{ position: "absolute", top: 580 }}
      >
        <Text style={{ color: "#71D3E7" ,fontWeight:"bold" }}> SignUp </Text>
      </TouchableOpacity >
     
   
    </View>
</SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "white",
  },
  button: {
    borderRadius: 25,
    padding: 10,
    position: "absolute",
    top: 490,
    backgroundColor: "#71D3E7",
    height: 40,
    width: 300,
  },
  text: {
    fontSize: 15,
    textAlign: "center",
    color:"white"
  },
  txt: {
    fontSize: 30,
    textAlign: "center",
    position: "absolute",
    top: 50,
    fontWeight:"bold",
    color: "#15B3D6",
  },

  input1: {
    width: 300,
    height: 45,
    backgroundColor: "#F1F7F8",
    padding: 15,
    borderRadius: 25,
    fontSize: 15,
    color: "#7B8081",
    position: "absolute",
    top: 360,
    borderColor:"#71D3E7",
    borderWidth:3
  },
  input2: {
    width: 300,
    height: 45,
    backgroundColor: "#F1F7F8",
    position: "absolute",
    top: 430,
    padding: 15,
    borderRadius: 25,
    fontSize: 15,
    color: "#7B8081",
    borderColor:"#71D3E7",
    borderWidth:3
  },
  errtxt: {
    color: "red",
    fontSize: 10,
    position: "absolute",
    top: 150,
  },
});
export default Login;