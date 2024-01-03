import { Dimensions, ImageBackground, Pressable, ScrollView, StyleSheet, Text, TextInput, View } from 'react-native'
import React from 'react'
import { ColorSheet } from '../../../Utilis/ColorSheet'
import { AntDesign, Feather } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";

const ProductInfoScreen  = () => {
  const route =  useRoute()  
  const navigation = useNavigation()

  const { width } = Dimensions.get("window");
  const height = (width * 100) / 100;

  return (
    <ScrollView showsVerticalScrollIndicator = {false} 
      style = {{ marginTop: 45, flex: 1, backgroundColor: ColorSheet.White }} >

      <View
        style={{
          backgroundColor: "#00CED1",
          padding: 10,
          flexDirection: "row",
          alignItems: "center",
        }}
      >
        <Pressable
          style={{
            flexDirection: "row",
            alignItems: "center",
            marginHorizontal: 7,
            gap: 10,
            backgroundColor: "white",
            borderRadius: 3,
            height: 38,
            flex: 1,
          }}
        >
          <AntDesign
            style={{ paddingLeft: 10 }}
            name="search1"
            size={22}
            color="black"
          />
          <TextInput placeholder="Search Amazon.in" />
        </Pressable>
   
        <Feather name="mic" size={24} color="black" />
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {route.params.carouselImages.map((item, index) => (
          <ImageBackground
            style={{
              width,
              height,
              marginTop: 25,
              resizeMode: 'contain',
              transform: [{ perspective: 1000 }, { rotateY: '15deg' }],
            }}
            source={{ uri: item }}
            key={index}
          >
          <View style = {{ padding: 20, flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between' }}>
            <View style = {{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#C60C30',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}>
              <Text style = {{ 
                color: ColorSheet.White, 
                textAlign: 'center', 
                fontWeight: '600', 
                fontSize: 12 }}>
                20% Off
              </Text>
            </View>

            <View style = {{
              width: 40,
              height: 40,
              borderRadius: 20,
              backgroundColor: '#E0E0E0',
              justifyContent: 'center',
              alignItems: 'center',
              flexDirection: 'row'
            }}>
              <MaterialCommunityIcons name="share-variant" size={24} color="black" />
            </View>
          </View>

          <View style = {{
            width: 40,
            height: 40,
            borderRadius: 20,
            backgroundColor: '#E0E0E0',
            justifyContent: 'center',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: 'auto',
            marginLeft: 20,
            marginBottom: 20,
          }}>
            <AntDesign name="hearto" size={24} color="black" />
          </View>
          </ImageBackground>
        ))}
      </ScrollView>

      <View style = {{ padding: 10,}}>
        <Text style = {{ fontSize: 15, fontWeight: '500'}}> {route?.params?.title} </Text>
        <Text style = {{ fontSize: 18, fontWeight: '600'}}> Rs {route?.params?.price} </Text>
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

      <View style = {{ padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text> Color:  </Text>
        <Text style = {{ fontSize: 15, fontWeight: 'bold'}}> {route?.params?.color} </Text>
      </View>

      <View style = {{ padding: 10, flexDirection: 'row', alignItems: 'center'}}>
        <Text> Size:  </Text>
        <Text style = {{ fontSize: 15, fontWeight: 'bold'}}> {route?.params?.size} </Text>
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

        <View style= {{padding: 10,}}>
          <Text style = {{ fontSize: 15, fontWeight: 'bold', marginVertical: 5}}>  Total: {route?.params?.price} </Text>
          <Text style = {{ color: '#00CED1'}}> Free Delivery Day After Tomorow By 10 Am.Order WithIn 5hrs 10mins</Text>

          <View style = {{ flexDirection: 'row', marginVertical: 5, alignItems: 'center', gap: 5}}>
            <Ionicons name="location" size={24} color="black" />

            <Text style={{ fontSize: 15, fontWeight: '500'}}>
              Deliver to Sarujan - mannar 560021
            </Text>
          </View>
        </View>

            <Text style={{ color: "green", marginHorizontal: 10, fontWeight: "500" }}>
              IN Stock
            </Text>

            <Pressable style = {{
              backgroundColor: '#FFC72C', 
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              marginVertical: 10,
              }}>
              <Text> Add To Card </Text>
            </Pressable>

            <Pressable style = {{
              backgroundColor: '#FFAC1C', 
              padding: 10,
              borderRadius: 20,
              justifyContent: 'center',
              alignItems: 'center',
              marginHorizontal: 10,
              marginVertical: 10,
              }}>
              <Text> Buy Now </Text>
            </Pressable>

          
    
    </ScrollView>
  )
}

export default ProductInfoScreen 

const styles = StyleSheet.create({})