import { Image, StyleSheet, Text, View, TouchableOpacity , Dimensions } from "react-native";
import React, { version } from "react";
import colors from "../../constants/color";
import ToolsHeader from "./ToolsHeader";
import { RFValue } from "react-native-responsive-fontsize";
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from "../../helpers/Metrics";
import fonts from "../../constants/fonts";

const {height} = Dimensions.get('window');


const vaccination = [
  {
  id: 1,
  name: "Dose 1",
  imgUri:require('../../assets/icons/chevron.png'),
  screenName:'DateOfVaccination'
},
  {
  id: 2,
  name: "Dose 2",
  imgUri:require('../../assets/icons/chevron.png'),
  screenName:'DateOfVaccination'
},
  {
  id: 3,
  name: "Dose 3",
  imgUri:require('../../assets/icons/chevron.png'),
  screenName:'DateOfVaccination'
},
  {
  id: 4,
  name: "Dose 4",
  imgUri:require('../../assets/icons/chevron.png'),
  screenName:'DateOfVaccination'
},
  {
  id: 5,
  name: "Dose 5",
  imgUri:require('../../assets/icons/chevron.png'),
  screenName:'DateOfVaccination'
},

]

const Vaccination2 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ToolsHeader title="Step 2/3" navigation={navigation}/>
      <Text style={styles.text}>Dose of vaccine</Text>

      {vaccination.map((item) => (
        <View key={item.id} style={styles.buttonContainer}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => navigation.navigate(item.screenName)}
          >
            <Text style={styles.buttonText}>{item.name}</Text>
            <Image source={item.imgUri} style={styles.image} />
          </TouchableOpacity>
        </View>
      ))}

    </View>
  );
};

export default Vaccination2;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: RFValue(18 , height),
    margin: moderateScale(20),
    textAlign: "center",
    fontFamily:fonts.MontserratBold
  },
  buttonContainer: {
    justifyContent: "space-between",
    backgroundColor: colors.white,
    marginTop:verticalScale(15),
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
  },
  button: {
    flexDirection: "row",
    justifyContent: "space-between",
    paddingVertical: verticalScale(35),
    paddingHorizontal: horizontalScale(10),
  },
  image: {
    width: moderateScale(20),
    height: moderateScale(20),
  },
  buttonText: {
    fontSize: RFValue(18 , height),
    marginLeft: horizontalScale(10),
    fontFamily: fonts.MontserratRegular
  },
});
