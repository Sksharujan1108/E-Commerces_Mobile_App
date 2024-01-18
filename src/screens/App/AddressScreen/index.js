import {
  Alert,
  Pressable,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React, { useEffect, useState, useContext } from "react";
import { useNavigation } from "@react-navigation/native";
import AsyncStorage from "@react-native-async-storage/async-storage";
import jwtDecode from "jwt-decode";
import jwt_decode from "jwt-decode"
import { UserType } from "../../../Utilis/UserContext";
import { Axios } from "axios";

const AddressScreen = () => {
  const navigation = useNavigation();
  const [name, setName] = useState("");
  const [mobileNo, setMobileNo] = useState("");
  const [houseNo, setHouseNo] = useState("");
  const [street, setStreet] = useState("");
  const [landmark, setLandmark] = useState("");
  const [postalCode, setPostalCode] = useState("");
  const {userId,setUserId} = useContext(UserType)

  useEffect(() => {
    const fetchUser = async() => {
      const token = await AsyncStorage.getItem('authToken');
      const decodedToken = jwt_decode(token);
      // const decodedToken = jwtDecode(token);
      const userId = decodedToken.userId;
      setUserId(userId)
    }
    fetchUser();
  }, [])
  console.log('AddressScreen', userId)

  const handleAddAddress = () => {
    const address = {
      name: name,
      mobile_no: mobileNo,
      house_number: houseNo,
      street_name: street,
      land_Mark: landmark,
      postal_code: postalCode,
    }

    Axios
    .post('http://10.0.2.2:8000/addresses', {userId, address})
    .then((response) => {
      Alert.alert('Success', 'Adressess Added SuccessFully');
      setName('')
      setMobileNo('')
      setHouseNo('')
      setStreet('')
      setLandmark('')
      setPostalCode('')

      setTimeout(() => {
        navigation.goBack()
      }, 300)
    }) .catch((err) => {
        Alert.alert("Error","Failed to add address")
        console.log("error",err)
    })
  }

  return (
    <ScrollView style={{ marginTop: 50 }}>
      <View style={{ height: 50, backgroundColor: "#00CED1" }} />

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 17, fontWeight: "bold" }}>
          {" "}
          Add a New Address{" "}
        </Text>

        <TextInput
          placeholderTextColor={"black"}
          placeholder="SriLanka"
          style={{
            padding: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            marginTop: 10,
            borderRadius: 5,
          }}
        />

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Full Name (First And Last Name)
          </Text>

          <TextInput
            value={name}
            onChangeText={(text) => setName(text)}
            placeholderTextColor={"black"}
            placeholder="Enter Your Name"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Mobile Number
          </Text>

          <TextInput
            value={mobileNo}
            onChangeText={(text) => setMobileNo(text)}
            placeholderTextColor={"black"}
            placeholder="Enter Your Mobile Number"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Flat, House_No,Company
          </Text>

          <TextInput
            value={houseNo}
            onChangeText={(text) => setHouseNo(text)}
            placeholderTextColor={"black"}
            placeholder=""
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            Area,Street,Sector,Village
          </Text>

          <TextInput
            value={street}
            onChangeText={(text) => setStreet(text)}
            placeholderTextColor={"black"}
            placeholder=""
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View style={{ marginVertical: 10 }}>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>LandMark</Text>

          <TextInput
            value={landmark}
            onChangeText={(text) => setLandmark(text)}
            placeholderTextColor={"black"}
            placeholder="Eg Near Lanka Hospital"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <View>
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>PinCode</Text>

          <TextInput
            value={postalCode}
            onChangeText={(text) => setPostalCode(text)}
            placeholderTextColor={"black"}
            placeholder="Enter Your PinCode"
            style={{
              padding: 10,
              borderColor: "#D0D0D0",
              borderWidth: 1,
              marginTop: 10,
              borderRadius: 5,
            }}
          />
        </View>

        <Pressable
        onPress = {handleAddAddress}
          style={{
            padding: 18,
            backgroundColor: "#FFC72C",
            borderRadius: 6,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 30,
          }}
        >
          <Text style={{ fontSize: 15, fontWeight: "bold" }}>
            {" "}
            Add Address{" "}
          </Text>
        </Pressable>
      </View>
    </ScrollView>
  );
};

export default AddressScreen;

const styles = StyleSheet.create({});
