import { Pressable, ScrollView, StyleSheet, Text, TextInput, View } from "react-native";
import React from "react";
import { ColorSheet } from "../../../Utilis/ColorSheet";
import { Feather, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";


const AddAddressScreen = () => {
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
