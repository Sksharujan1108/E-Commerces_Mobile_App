import React, { useEffect, useState, useCallback } from "react";
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
import DropDownPicker from "react-native-dropdown-picker";
import { SliderBox } from "react-native-image-slider-box";
import { Feather, Ionicons, MaterialIcons, AntDesign } from "@expo/vector-icons";
import axios from "axios";
import { ColorSheet } from "../../../Utilis/ColorSheet";
import { Homedeals, HomelistDatq, SlideShowimages, offers } from "../../../Utilis/Image";
import { useNavigation } from "@react-navigation/native";
import ProductItem from "../../../component/ProductItem";

const HomeScreen = () => {
  const navigation = useNavigation()

  const [products, setProducts] = useState([]);
  const [open, setOpen] = useState(false);
  const [category, setCategory] = useState("jewelery");
  const [items, setItems] = useState([
    { label: "Men's clothing", value: "men's clothing" },
    { label: "jewelery", value: "jewelery" },
    { label: "electronics", value: "electronics" },
    { label: "women's clothing", value: "women's clothing" },
  ]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://fakestoreapi.com/products"
        );
        setProducts(response.data);
      } catch (err) {
        console.log("Error Message", err);
      }
    };

    fetchData();
  }, []);

  const onGenderOpen = useCallback(() => {
    setCompanyOpen(false);
  }, []);

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
              Deliver to Sarujan - mannar 560021
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

        <View style={styles.homeDealsContainer}>

          {Homedeals.map((item, index) => (
            <Pressable
              key={index}
              style={{
                marginVertical: 10,
                flexDirection: "row",
                alignItems: "center",
              }}
            >
              <Image
                style={{
                  width: 180,
                  height: 180,
                  resizeMode: "contain",
                }}
                source={{ uri: item?.image }}
              />
            </Pressable>
          ))}
        </View>

        {/* Border Space */}
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        />

        <Text
          style={{
            padding: 10,
            fontSize: 18,
            fontWeight: "bold",
          }}
        >
          Today's Deals
        </Text>

        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {offers.map((item, index) => (
            <Pressable
              key={index}
              onPress={() => navigation.navigate("Info", {
                id: item.id,
                title: item.title,
                price: item?.price,
                carouselImages: item?.carouselImages,
                color: item?.color,
                size: item?.size,
                oldPrice: item?.oldPrice,
                item: item,
              })}
               
              style={{
                marginVertical: 10,
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <Image
                style={{
                  width: 150,
                  height: 150,
                  resizeMode: "contain",
                }}
                source={{ uri: item?.image }}
              />

              <View
                style={{
                  backgroundColor: "#E31837",
                  paddingVertical: 5,
                  width: 130,
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 10,
                  borderRadius: 4,
                }}
              >
                <Text
                  style={{
                    textAlign: "center",
                    color: ColorSheet.White,
                    fontSize: 13,
                    fontWeight: "bold",
                  }}
                >
                  Upto {item?.offer} Off
                </Text>
              </View>
            </Pressable>
          ))}
        </ScrollView>

        {/* Border Space */}
        <Text
          style={{
            height: 1,
            borderColor: "#D0D0D0",
            borderWidth: 2,
            marginTop: 15,
          }}
        />

        <View
          style={{
            marginHorizontal: 10,
            marginTop: 20,
            width: "45%",
            marginBottom: open ? 50 : 15,
          }}
        >
          <DropDownPicker
            style={{
              borderColor: "#B7B7B7",
              height: 30,
              marginBottom: open ? 120 : 15,
            }}
            open={open}
            value={category}
            items={items}
            setOpen={setOpen}
            setValue={setCategory}
            setItems={setItems}
            placeholder="choose category"
            placeholderStyle={styles.placeholderStyles}
            onOpen={onGenderOpen}
            zIndex={3000}
            zIndexInverse={1000}
          />
        </View>

        <View style = {{ flexDirection: "row", alignItems: "center", flexWrap: "wrap" }}>

          {products
            ?.filter((item) => item.category === category)
            .map((item, index) => (
              <ProductItem item={item} key={index} />
          ))}
          
        </View>
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
  },
  placeholderStyles: {
    fontWeight: "bold",
  },
});
