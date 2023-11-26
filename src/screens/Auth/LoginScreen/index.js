import {
  Alert,
    Dimensions,
    Image,
    KeyboardAvoidingView,
    Pressable,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View,
  } from "react-native";
  import React, { useState } from "react";
  import { ColorSheet } from "../../../Utilis/ColorSheet";
  import { Images } from "../../../Utilis/Image";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import axios from "axios";
import AsyncStorage from '@react-native-async-storage/async-storage';
  
  const LoginScreen = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation()

    const handleLogin = () => {
      const user = {
        email: email,
        password: password,
      }

      axios
      .post ('http://192.168.87.198:8000/login', user)
      .then((response) => {
        console.log(response);
        const token = response.data.token
        AsyncStorage.setItem('AuthToken', token);
        navigation.replace('Home')
      })
      .catch((err) => {
        Alert.alert("Login Error", "Invaild LogIn")
        console.log(err)
      }) 
    }
  
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image style={styles.Img} source={Images.Login_picUri} />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.txt}> LogIn To Your Account </Text>
          </View>
  
          <View style={{ marginTop: 90 }}>
            <View style={styles.InputContainer}>
              <MaterialIcons name="email" size={24} color="black" />
  
              <TextInput
                value={email}
                onChangeText={(value) => setEmail(value)}
                style={styles.txtInput}
                placeholder="Enter Your Email"
              />
            </View>
          </View>
  
          <View style={{ marginTop: 10 }}>
            <View style={styles.InputContainer}>
              <AntDesign name="lock" size={24} color="black" />
  
              <TextInput
                value={password}
                onChangeText={(text) => setPassword(text)}
                style={styles.txtInput}
                placeholder="Enter Your Password"
              />
            </View>
          </View>
  
          <View style={styles.txtContainer}>
            <Text style = {{fontSize: 16,}}> Keep me Logged in </Text>
            <Text style={{ color: ColorSheet.Blue, fontWeight: "500", fontSize: 16, }}>
              {" "}
              Forgot Password{" "}
            </Text>
          </View>
  
          <View style={{ marginTop: 100 }}>
            <Pressable 
             onPress={handleLogin}
             style={styles.Btn_Container}>
              <Text style={styles.Btn_txt}> LogIn &nbsp; &nbsp; 🤓 </Text>
            </Pressable>
  
            <View style={{ flexDirection: "row", alignContent: 'center', justifyContent: 'center' }}>
              <Text
                style={{
                  marginTop: 15,
                  textAlign: "center",
                  color: ColorSheet.DarkGray1,
                  fontSize: 17,
                }}
              >
                {" "}
                Don't have an account?{" "}
              </Text>
  
              <Pressable onPress={() => navigation.navigate('Register')}>
                <Text style = {styles.SignUp_txt}>
                  {" "}
                  Sign Up!{" "}
                </Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  