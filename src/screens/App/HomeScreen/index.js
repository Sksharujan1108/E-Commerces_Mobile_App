import {
  Image,
  Pressable,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";
import { Entypo } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import { SliderBox } from "react-native-image-slider-box";
import { ColorSheet } from "../../../Utilis/ColorSheet";
import { Homedeals, HomelistDatq, SlideShowimages } from "../../../Utilis/Image";

const HomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
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

        <Pressable style={styles.addressContainer}>
          <Ionicons name="location-outline" size={24} color="black" />

          <Pressable>
            <Text style={styles.addressTxt}>
              Deliver to Sarujan - Chennai 560021
            </Text>
          </Pressable>

          <MaterialIcons name="keyboard-arrow-down" size={24} color="black" />
        </Pressable>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {HomelistDatq.map((item, index) => (
            <Pressable key={index} style={styles.homeListContainer}>
              <Image style={styles.imgView} source={{ uri: item.image }} />

              <Text
                style={{
                  textAlign: "center",
                  fontSize: 12,
                  fontWeight: "500",
                  marginTop: 15,
                }}
              >
                {item?.name}
              </Text>
            </Pressable>
          ))}
        </ScrollView>

        <SliderBox
          images={SlideShowimages}
          autoPlay
          circleLoop
          dotColor={"#13274F"}
          inactiveDotColor="#90A4AE"
          ImageComponentStyle={{ width: "100%" }}
        />

        <Text style={{ padding: 10, fontSize: 18, fontWeight: "bold" }}>
          Trending Deals of the week
        </Text>

        <View style = {styles.homeDealsContainer}>
          {Homedeals.map((item, index) => (
            <Pressable key = {index}
              style = {{ marginVertical: 10, flexDirection: 'row', alignItems: 'center'}}
            >
              <Image style = {{width: 180, height: 180, resizeMode: "contain"}} 
                 source = {{ uri : item?.image }} />
            </Pressable>
          ))}
        </View>

        <Text style = {{ height: 1, borderColor: '#D0D0D0', borderWidth:2, marginTop: 15 }} />

        <Text style = {{ padding: 10, fontSize: 18, fontWeight:'bold' }}> Today's Deals </Text>
      </ScrollView>
    </SafeAreaView>
  );
};

export default HomeScreen;

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
    fontWeight: "500",
  },
  homeListContainer: {
    margin: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  imgView: {
    width: 50,
    height: 50,
    resizeMode: "contain",
  },
  homeDealsContainer: {
    flexDirection: "row",
              alignItems: "center",
              flexWrap: "wrap",
              // marginTop: 10,
  }
});
