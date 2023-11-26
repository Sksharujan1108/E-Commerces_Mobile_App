import { Dimensions, StyleSheet } from 'react-native';
import { ColorSheet } from '../../../Utilis/ColorSheet';

export const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: ColorSheet.White,
      alignItems: "center",
    },
    ImageContainer: {
      // backgroundColor: ColorSheet.Blue,
      marginTop: 40,
    },
    Img: {
      width: 150,
      height: 100,
      // alignItems: 'center'
    },
    txt: {
      fontSize: 20,
      fontWeight: "bold",
      marginTop: 10,
      color: ColorSheet.Blue,
    },
    InputContainer: {
      flexDirection: "row",
      alignItems: "center",
      gap: 15,
      backgroundColor: ColorSheet.Gray,
      paddingVertical: 5,
      padding: 10,
      borderRadius: 5,
      marginTop: 30,
      elevation: 20,
      width: Dimensions.get("screen").width * 0.8, // Proper Width in Screen
    },
    txtInput: {
      color: ColorSheet.Black,
      fontSize: 17,
      marginVertical: 3,
    },
    txtContainer: {
      marginTop: 10,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
    },
    Btn_Container: {
      backgroundColor: ColorSheet.Primary,
      borderRadius: 10,
      padding: 10,
      marginLeft: 'auto',
      marginRight: 'auto',
      elevation: 10,
      width: Dimensions.get("screen").width * 0.8, // Proper Width in Screen
    },
    Btn_txt: {
      color: ColorSheet.White,
      fontSize: 20,
      fontWeight: "bold",
      textAlign: 'center',
    },
    SignUp_txt: {
        marginTop: 15,
        textAlign: "center",
        color: ColorSheet.Blue,
        fontSize: 17,
        textDecorationLine: "underline",
        fontWeight: '500',
    },
    messageContainer: { 
      alignContent: "center", 
      justifyContent: "center",
      backgroundColor: "pink"
    },
    messageText: {
      textAlign: 'center',
      fontSize: 16,
    },
    successMessage: {
      color: 'green',
    },
    errorMessage: {
      color: 'red',
    },
   
  });