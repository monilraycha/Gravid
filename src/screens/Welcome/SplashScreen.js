import { StyleSheet, Text, View } from "react-native";
import React from "react";
import * as Animatable from "react-native-animatable";
import colors from "../../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import LottieView from "lottie-react-native";
import fonts from "../../constants/fonts";

const SplashScreen = ({ navigation }) => {
  React.useEffect(() => {
    // Navigate to the next screen after 3 seconds
    const timer = setTimeout(() => {
      navigation.replace("WelcomeScreen");
    }, 3000);

    return () => clearTimeout(timer);
  }, [navigation]);

  return (
    <Animatable.View style={styles.container}>
      <LottieView
        style={{
          width: RFValue(300),
          height: RFValue(300),
        }}
        source={require("../../assets/animations/woman.json")}
        autoPlay
        loop
      />
      {/* <Animatable.Text
        animation="slideInDown"
        direction="alternate"
        iterationCount={5}
        style={styles.splashText}
      >
        Preglife
      </Animatable.Text> */}
      <Text style={styles.splashText}>Preglife</Text>
    </Animatable.View>
  );
};

export default SplashScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: colors.primary,
  },
  splashText: {
    fontSize: RFValue(30),
    fontFamily: fonts.MontserratBold,
    color: colors.white,
  },
});
