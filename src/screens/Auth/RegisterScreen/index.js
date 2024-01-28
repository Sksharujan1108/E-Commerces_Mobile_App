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
import React, { useEffect, useState, useCallback  } from "react";
import { ColorSheet } from "../../../Utilis/ColorSheet";
import { Images } from "../../../Utilis/Image";
import { MaterialIcons } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./styles";
import { useNavigation, useIsFocused  } from "@react-navigation/native";
import { useAppDispatch, useAppSelector } from "../../../feature/stateHooks";
import { ErrorFlash } from "../../../Utilis/flashMessage";
import { Constants, STATUS } from "../../../Utilis/Contants";
import { registerRequestAuthenticate } from "../../../feature/thunks/AuthThunk";
import { selectAuthSliceStatus, selectRegisterAuthenticateData, selectRegisterAuthenticateStatus } from "../../../feature/Slices/AuthSlices";

const RegisterScreen = () => {
  const dispatch = useAppDispatch();
  const isFocused = useIsFocused();

  const authSliceStatus = useAppSelector(selectAuthSliceStatus);

  const registerAuthenticateStatus = useAppSelector(selectRegisterAuthenticateStatus);
    console.log('registerAuthenticateStatus********', registerAuthenticateStatus?.payload?.status)

    const registerAuthenticateData = useAppSelector(selectRegisterAuthenticateData);
    console.log('registerAuthenticateData***status***status**', registerAuthenticateData?.payload?.status)
    console.log('registerAuthenticateData********', registerAuthenticateData?.responseDto?.message)

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [message, setMessage] = useState("");
  const [messageType, setMessageType] = useState(""); // Added for distinguishing message types
  const navigation = useNavigation();

  const resetState = useCallback(() => {
    setName("");
    setEmail("");
    setPassword("");
    setMessage("");
    setMessageType("");
  }, []);

  useEffect(() => {
    if (isFocused) {
      // Reset the state when the screen is focused
      resetState();
    }
  }, [isFocused, resetState]);

  useEffect(() => {
    if (registerAuthenticateStatus === STATUS.SUCCEEDED) {
      if (registerAuthenticateData?.status === 200) {
        setTimeout(() => {
          Alert.alert(`${registerAuthenticateData?.responseDto?.message}`)
          setMessage("");
        })       
        navigation.goBack()
      }
    }
  }, [registerAuthenticateStatus])

  const handleRegister = () => {
    if(name == '') {
      ErrorFlash(Constants.NAME_REQ)
    } else if (email == '') {
      ErrorFlash(Constants.EMAIL_REQ)
    } else if (password == '') {
      ErrorFlash(Constants.PASS_REQ)
    } else {
      dispatch(registerRequestAuthenticate({
        name : name,
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
          <Text style={styles.txt}> Register To Your Account </Text>
        </View>

        <View style={{ marginTop: 90 }}>
          <View style={styles.InputContainer}>
            <Ionicons name="person" size={24} color="black" />

            <TextInput
              style={styles.txtInput}
              value={name}
              onChangeText={(value) => setName(value)}
              placeholder="Enter Your Name"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.InputContainer}>
            <MaterialIcons name="email" size={24} color="black" />

            <TextInput
              style={styles.txtInput}
              value={email}
              onChangeText={(value) => setEmail(value)}
              placeholder="Enter Your Email"
            />
          </View>
        </View>

        <View style={{ marginTop: 10 }}>
          <View style={styles.InputContainer}>
            <AntDesign name="lock" size={24} color="black" />

            <TextInput
              style={styles.txtInput}
              value={password}
              onChangeText={(text) => setPassword(text)}
              placeholder="Enter Your Password"
            />
          </View>
        </View>

        <View style={styles.txtContainer}>
          <Text style={{ fontSize: 16 }}> Keep me Logged in </Text>
          <Text
            style={{ color: ColorSheet.Blue, fontWeight: "500", fontSize: 16 }}
          >
            {" "}
            Forgot Password{" "}
          </Text>
        </View>

        <View style={{ marginTop: 100 }}>
          <TouchableOpacity onPress={handleRegister} style={styles.Btn_Container}>
            <Text style={styles.Btn_txt}> Register &nbsp; &nbsp; 🤓 </Text>
          </TouchableOpacity>

          <View
            style={{
              flexDirection: "row",
              alignContent: "center",
              justifyContent: "center",
            }}
          >
            <Text
              style={{
                marginTop: 15,
                textAlign: "center",
                color: ColorSheet.DarkGray1,
                fontSize: 17,
              }}
            >
              {" "}
              All ready have an account?{" "}
            </Text>

            <TouchableOpacity onPress={() => navigation.navigate("Login")}>
              <Text style={styles.SignUp_txt}> Sign In&nbsp;! </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.messageContainer}>
          <Text
            style={[
              styles.messageText,
              messageType === "success"
                ? styles.successMessage
                : styles.errorMessage,
            ]}
          >
            {" "}
            {message}{" "}
          </Text>
        </View>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
};

export default RegisterScreen;
