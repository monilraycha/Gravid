import React from "react";
import { StyleSheet, View, StatusBar, Platform } from "react-native";
import {
  SafeAreaProvider,
  useSafeAreaInsets,
} from "react-native-safe-area-context";
import colors from "./src/constants/color";
import AppNavigator from "./src/routes/AppNavigator";
import Toast, { BaseToast } from "react-native-toast-message";
import { RFValue } from "react-native-responsive-fontsize";
import fonts from "./src/constants/fonts";

const MainApp = () => {
  const insets = useSafeAreaInsets();

  const customToastConfig = {
    success: (props) => (
      <BaseToast
        {...props}
        style={{
          borderLeftColor: "#F88C8C",
          backgroundColor: "#FFEFEF",
        }}
        contentContainerStyle={{ paddingHorizontal: 20 }}
        text1Style={{
          fontSize: RFValue(16),
          fontFamily: fonts.MontserratMedium,
          color: "#333",
        }}
        text2Style={{
          fontSize: RFValue(12),
          fontFamily: fonts.MontserratRegular,
          color: "#666",
        }}
      />
    ),
  };

  return (
    <View style={styles.container}>
      {/* Background color for iOS StatusBar */}
      {Platform.OS === "ios" && (
        <View style={{ height: insets.top, backgroundColor: colors.primary }} />
      )}

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.primary} // Works on Android
        translucent={Platform.OS === "ios"} // Make translucent on iOS
      />

      <AppNavigator />
      <Toast config={customToastConfig} />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF3E6",
  },
});
