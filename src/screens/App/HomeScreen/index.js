import { Pressable, SafeAreaView, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { ColorSheet } from '../../../Utilis/ColorSheet'

const HomeScreen = () => {
  return (
    <SafeAreaView style = {styles.container}>
      <ScrollView>
        <View style = {styles.Searchcontainer}>
          <Pressable style = {styles.SearchBox}>
            <AntDesign style={{ paddingLeft: 10 }}
                name="search1"
                size={22}
                color="black"
            />
            <TextInput placeholder="Search Product" />
          </Pressable>
          <Feather name="mic" size={24} color="black" />
        </View>

        <Pressable style={styles.addressContainer} >
            <Ionicons name="location-outline" size={24} color="black" />

            <Pressable>
                <Text style = { styles.addressTxt }>
                  Deliver to Sarujan - Chennai 560021
                </Text>
            </Pressable>

            <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
          </Pressable>
      </ScrollView>
      <Text>HomeScreen</Text>
    </SafeAreaView>
  )
}

export default HomeScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: ColorSheet.White,
    marginTop: 40,
  },
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
  addressContainer: {
    flexDirection: "row",
    alignItems: "center",
    gap: 5,
    padding: 10,
    backgroundColor: "#AFEEEE",
  },
  addressTxt: {
    fontSize: 13,
    fontWeight: '500'
  }
})