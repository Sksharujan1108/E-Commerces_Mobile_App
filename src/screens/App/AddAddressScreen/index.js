import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ColorSheet } from "../../../Utilis/ColorSheet";
import { Feather, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import { useFocusEffect, useNavigation } from "@react-navigation/native";



const AddAddressScreen = () => {
  const navigation = useNavigation()
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={{ marginTop: 50 }}>
      <View style={styles.Searchcontainer}>
        <Pressable style={styles.SearchBox}>
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Product" />
        </Pressable>

        <Feather name="mic" size={24} color="black" />
      </View>

      <View style={{ padding: 10 }}>
        <Text style={{ fontSize: 20, fontWeight: "bold" }}>Your Addresses</Text>

        <Pressable
          onPress={() => navigation.navigate("ADD_Address")}
          style={{
            flexDirection: "row",
            alignItems: "center",
            justifyContent: "space-between",
            marginTop: 10,
            borderColor: "#D0D0D0",
            borderWidth: 1,
            borderLeftWidth: 0,
            borderRightWidth: 0,
            paddingVertical: 7,
            paddingHorizontal: 5,
          }}
        >
          <Text>Add a new Address</Text>
          <MaterialIcons name="keyboard-arrow-right" size={24} color="black" />
        </Pressable>

        <Pressable>
            {/* All the added Address */}
        </Pressable>
      </View>

    </ScrollView>
  );
};

export default AddAddressScreen;

const styles = StyleSheet.create({
    Searchcontainer: {
        backgroundColor: ColorSheet.Cyan,
        padding: 10,
        flexDirection: "row",
        alignItems: "center",
    },
    SearchBox: {
        flexDirection: "row",
        alignItems: "center",
        marginHorizontal: 7,
        gap: 10,
        backgroundColor: "white",
        borderRadius: 3,
        height: 38,
        flex: 1,
    },
});
