import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from "../helpers/Metrics";
import React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import {
  View,
  Text,
  TouchableOpacity,
  Image,
  StyleSheet,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../constants/color";
import TabsNavigator from "./TabsNavigator";
import { SafeAreaView, SafeAreaProvider } from "react-native-safe-area-context";
import { RFValue } from "react-native-responsive-fontsize";

const Drawer = createDrawerNavigator();

const { width, height } = Dimensions.get("window");

const CustomDrawerContent = ({ navigation }) => {
  return (
    <SafeAreaProvider style={styles.container}>
      {/* Header Section */}
      <View style={styles.headerContainer}>
        <TouchableOpacity onPress={() => navigation.closeDrawer()}>
          <Text style={styles.closeButton}>
            <Image
              source={require("../assets/icons/close.png")}
              style={styles.closeIcon}
            />
          </Text>
        </TouchableOpacity>
        <Text style={styles.headerTitle}>Settings</Text>
        <TouchableOpacity onPress={() => navigation.navigate("LoginScreen")}>
          <Text style={styles.loginButton}>LOG IN</Text>
        </TouchableOpacity>
      </View>

      {/* Scrollable Content */}
      <ScrollView
        style={styles.scrollView}
        bounces={false}
        showsVerticalScrollIndicator={false}
      >
        {/* Profile Section */}
        <View style={styles.profileSection}>
          {/* Add Pregnancy Button */}
          <TouchableOpacity
            style={styles.profileItem}
            onPress={() => navigation.navigate("TrackPregnancy")}
          >
            <View style={styles.roundBackgroundAdd}>
              <Image
                source={require("../assets/icons/pregnant.png")}
                style={styles.profileIcon}
              />
              <View style={styles.roundBadge}>
                <Text style={styles.badgeText}>+</Text>
              </View>
            </View>
            <Text style={styles.profileText}>ADD PREGNANCY</Text>
          </TouchableOpacity>

          {/* Add Child Button */}
          <TouchableOpacity
            style={styles.profileItem}
            onPress={() => navigation.navigate("AddChildren")}
          >
            <View style={styles.roundBackgroundChild}>
              <Image
                source={require("../assets/icons/baby-boy.png")}
                style={styles.profileIcon}
              />
              <View style={styles.roundBadge}>
                <Text style={styles.badgeText}>+</Text>
              </View>
            </View>
            <Text style={styles.profileText}>ADD CHILD</Text>
          </TouchableOpacity>
        </View>

        {/* Menu Items */}
        <View style={styles.menuContainer}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              activeOpacity={0.8}
              key={index}
              style={styles.menuItem}
              onPress={() => navigation.navigate(item.route)}
            >
              <Image source={item.icon} style={styles.menuIcon} />
              <Text style={styles.menuText}>{item.title}</Text>
              <Image
                source={require("../assets/icons/chevron.png")}
                style={styles.arrowIcon}
              />
            </TouchableOpacity>
          ))}
        </View>

        {/* Footer Section */}
        <View style={styles.footer}>
          <Text style={styles.footerLogo}>Preglife</Text>
          <Text style={styles.footerVersion}>9.1.13</Text>
          <View style={styles.footerLinks}>
            <Text style={styles.footerLink}>Privacy Policy</Text>
            <Text style={styles.footerDivider}>|</Text>
            <Text style={styles.footerLink}>User Agreement</Text>
          </View>
        </View>
      </ScrollView>
    </SafeAreaProvider>
  );
};

const menuItems = [
  {
    title: "Create account",
    icon: require("../assets/icons/user.png"),
    route: "SignUpScreen",
  },
  {
    title: "My pregnancy",
    icon: require("../assets/icons/woman.png"),
    route: "PregnancyScreen",
  },
  {
    title: "App settings",
    icon: require("../assets/images/setting.png"),
    route: "SettingsScreen",
  },
  {
    title: "Push notifications",
    icon: require("../assets/icons/subscribe.png"),
    route: "NotificationsScreen",
  },
  {
    title: "Share account",
    icon: require("../assets/icons/share.png"),
    route: "ShareScreen",
  },
  {
    title: "Rate us!",
    icon: require("../assets/icons/star.png"),
    route: "RateScreen",
  },
  {
    title: "Recommend Preglife",
    icon: require("../assets/icons/message.png"),
    route: "RecommendScreen",
  },
  {
    title: "Support and FAQ",
    icon: require("../assets/icons/help-center.png"),
    route: "SupportScreen",
  },
  {
    title: "Contact us",
    icon: require("../assets/icons/email.png"),
    route: "ContactScreen",
  },
];

const DrawerNavigator = () => {
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        drawerPosition: "right",
        drawerStyle: {
          width: "100%",
        },
      }}
    >
      <Drawer.Screen
        name="TabsNavigator"
        component={TabsNavigator}
        options={{
          headerShown: false,
        }}
      />
    </Drawer.Navigator>
  );
};

export default DrawerNavigator;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  headerContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: moderateScale(20),
    backgroundColor: colors.primary,
  },
  headerTitle: {
    fontSize: RFValue(16, height),
    color: colors.black,
    fontFamily: "Montserrat Medium",
  },
  closeIcon: {
    width: horizontalScale(24),
    height: verticalScale(24),
    resizeMode: "contain",
  },
  loginButton: {
    fontSize: RFValue(16, height),
    color: colors.black,
    fontFamily: "Montserrat Medium",
  },
  scrollView: {
    flex: 1,
  },
  profileSection: {
    flexDirection: "row",
    justifyContent: "space-evenly",
    padding: moderateScale(20),
  },
  profileItem: {
    alignItems: "center",
  },
  roundBackgroundAdd: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    borderRadius: horizontalScale(50),
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  roundBackgroundChild: {
    width: horizontalScale(100),
    height: horizontalScale(100),
    borderRadius: horizontalScale(50),
    backgroundColor: "#f9a4a4",
    justifyContent: "center",
    alignItems: "center",
    position: "relative",
  },
  profileIcon: {
    width: horizontalScale(60),
    height: horizontalScale(60),
  },
  roundBadge: {
    position: "absolute",
    top: 0,
    right: 0,
    width: horizontalScale(25),
    height: horizontalScale(25),
    borderRadius: horizontalScale(12.5),
    backgroundColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  profileText: {
    marginTop: verticalScale(10),
    fontSize: RFValue(10, height),
    color: colors.black,
    letterSpacing: moderateScale(1),
    fontFamily: "Montserrat -SemiBold",
  },
  menuItem: {
    flexDirection: "row",
    alignItems: "center",
    paddingVertical: verticalScale(15),
    borderTopWidth: moderateScale(2),
    borderTopColor: "#FFD6D7",
    width: "100%",
    paddingVertical: verticalScale(20),
  },
  menuIcon: {
    width: horizontalScale(25),
    height: horizontalScale(25),
    marginLeft: horizontalScale(15),
  },
  menuText: {
    fontSize: RFValue(16, height),
    color: colors.black,
    marginLeft: horizontalScale(15),
    fontFamily: "Montserrat Regular",
  },
  arrowIcon: {
    width: horizontalScale(24),
    height: horizontalScale(24),
    position: "absolute",
    right: horizontalScale(15),
  },
  footer: {
    alignItems: "center",
    paddingVertical: verticalScale(20),
    backgroundColor: "#f8f8f8",
  },
  footerLogo: {
    fontSize: RFValue(30, height),
    fontWeight: "500",
    color: colors.primary,
    fontFamily: "Montserrat -SemiBold",
  },
  footerVersion: {
    fontSize: RFValue(12, height),
    color: "#666",
    marginTop: verticalScale(15),
    fontFamily: "Montserrat -Regular",
  },
  footerLinks: {
    flexDirection: "row",
    alignItems: "center",
    marginTop: verticalScale(10),
  },
  footerLink: {
    fontSize: RFValue(14, height),
    color: colors.primary,
    marginHorizontal: horizontalScale(5),
    textDecorationLine: "underline",
    fontFamily: "Montserrat -Regular",
  },
  footerDivider: {
    fontSize: RFValue(12, height),
    color: "#666",
  },
});
