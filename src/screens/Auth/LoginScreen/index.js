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
  import React, { useEffect, useState } from "react";
  import { ColorSheet } from "../../../Utilis/ColorSheet";
  import { Images } from "../../../Utilis/Image";
  import { MaterialIcons } from "@expo/vector-icons";
  import { AntDesign } from "@expo/vector-icons";
  import { useNavigation } from "@react-navigation/native";
import { styles } from "./styles";
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useAppDispatch, useAppSelector } from "../../../feature/stateHooks";
import { loginRequestAuthenticate } from "../../../feature/thunks/AuthThunk";
import { selectLogInAuthenticateData, selectLogInAuthenticateStatus } from "../../../feature/Slices/AuthSlices";
import { STATUS } from "../../../Utilis/Contants";
import { setCredentials } from "../../../feature/Slices/ConstantsSlices";
  
  const LoginScreen = () => {

    const navigation = useNavigation()

    const dispatch = useAppDispatch();

    const logInAuthenticateStatus = useAppSelector(selectLogInAuthenticateStatus);
    console.log('logInAuthenticateData********', logInAuthenticateStatus)

    const logInAuthenticateData = useAppSelector(selectLogInAuthenticateData);
    console.log('logInAuthenticateData********', logInAuthenticateData)

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    useEffect(() => {
      if (logInAuthenticateStatus === STATUS.SUCCEEDED) {
        if (logInAuthenticateData.status === 200) {
          Alert.alert ('LogIn Success')
          navigation.navigate('Main')
        }
      }
    }, [logInAuthenticateStatus])

    useEffect(() => {
      const checkLoginStatus = async () => {
        try {
          const token = await AsyncStorage.getItem('AuthToken')

          if(token) {
            console.log('**************', token)
            navigation.replace("Main")
          }
        } catch(err) {
          console.log("Error", err)
        }
      };
      checkLoginStatus();
    }, [logInAuthenticateStatus])

  const handleLogin = () => {
    if (email == '') {
      ErrorFlash(Constants.EMAIL_REQ)
    } else if (password == '') {
      ErrorFlash(Constants.PASS_REQ)
    } else {
      dispatch(setCredentials({ email: userName, password: password }));
      dispatch(loginRequestAuthenticate({
        email : email,
        password : password
      }))
    }
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
            <TouchableOpacity 
             onPress={handleLogin}
             style={styles.Btn_Container}>
              <Text style={styles.Btn_txt}> LogIn &nbsp; &nbsp; 🤓 </Text>
            </TouchableOpacity>
  
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
  
              <TouchableOpacity 
                onPress={() => navigation.navigate('Register')}>
                <Text style = {styles.SignUp_txt}>
                  {" "}
                  Sign Up!{" "}
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default LoginScreen;
  