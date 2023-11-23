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
  import { Ionicons } from "@expo/vector-icons";
  import { styles } from "./styles";
  import { useNavigation } from "@react-navigation/native";
 
  
  const RegisterScreen = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const navigation = useNavigation();
  
    return (
      <SafeAreaView style={styles.container}>
        <View style={styles.ImageContainer}>
          <Image style={styles.Img} source={Images.Login_picUri} />
        </View>
  
        <KeyboardAvoidingView>
          <View style={{ alignItems: "center" }}>
            <Text style={styles.txt}> SignUp To Your Account </Text>
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
            <Pressable onPress={() => onPress()} 
              style={styles.Btn_Container}>
              <Text style={styles.Btn_txt}> SignUp &nbsp; &nbsp; 🤓 </Text>
            </Pressable>
  
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
  
              <Pressable onPress={() => navigation.navigate("Login")}>
                <Text style={styles.SignUp_txt}> Sign In&nbsp;! </Text>
              </Pressable>
            </View>
          </View>
        </KeyboardAvoidingView>
      </SafeAreaView>
    );
  };
  
  export default RegisterScreen;
  