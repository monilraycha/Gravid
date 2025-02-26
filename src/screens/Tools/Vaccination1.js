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


const Vaccination1 = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ToolsHeader title="Step 1/3" navigation={navigation}/>
      <Text style={styles.text}>Which vaccine would you like to add?</Text>
      <View style={styles.buttonContainer}>
        <TouchableOpacity style={styles.button}
          onPress={ () => navigation.navigate('Vaccination2')}
        >
          <Text style={styles.buttonText}>Rubella</Text>
          <Image
            source={require("../../assets/icons/chevron.png")}
            style={styles.image}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Vaccination1;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  text: {
    fontSize: RFValue(18 , height),
    margin: moderateScale(20),
    textAlign: "center",
    fontFamily:fonts.MontserratMedium
  },
  buttonContainer: {
    justifyContent: "space-between",
    backgroundColor: colors.white,
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
