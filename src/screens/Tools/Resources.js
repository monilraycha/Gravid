import React from "react";
import {
  View,
  Text,
  FlatList,
  TouchableOpacity,
  Linking,
  Image,
  StyleSheet,
  Dimensions,
} from "react-native";
import { useNavigation } from "@react-navigation/native";
import colors from "../../constants/color";
import { RFValue } from "react-native-responsive-fontsize";
import { horizontalScale , verticalScale , moderateScale } from "../../helpers/Metrics";

const height = Dimensions.get('window')

const resources = [
  {
    id: "1",
    type: "Article",
    title: "Healthy Eating During Pregnancy",
    link: "https://www.healthline.com/nutrition/pregnancy-diet",
    icon: require("../../assets/icons/resource1.png"),
  },
  {
    id: "2",
    type: "Video",
    title: "Pregnancy Yoga Exercises",
    link: "https://www.youtube.com/watch?v=vVBPvBvfRzY",
    icon: require("../../assets/icons/resource2.png"),
  },
  {
    id: "3",
    type: "Helpline",
    title: "National Pregnancy Helpline",
    link: "tel:+18001234567",
    icon: require("../../assets/icons/resource3.png"),
  },
  {
    id: "4",
    type: "Website",
    title: "Mayo Clinic Pregnancy Guide",
    link: "https://www.mayoclinic.org/healthy-pregnancy",
    icon: require("../../assets/icons/resource4.png"),
  },
];

const Resources = () => {
  const navigation = useNavigation();

  const openLink = (url) => {
    Linking.openURL(url).catch((err) =>
      console.error("Error opening link", err)
    );
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity style={styles.card} onPress={() => openLink(item.link)}>
      <Image source={item.icon} style={styles.icon} />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{item.title}</Text>
        <Text style={styles.type}>{item.type}</Text>
      </View>
    </TouchableOpacity>
  );

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()} style={styles.backButton}>
          <Image source={require("../../assets/icons/back.png")} style={styles.backIcon} />
        </TouchableOpacity>
        <Text style={styles.headerText}>Resources</Text>
      </View>
      <Text style={styles.sectionTitle}>Resource Directory</Text>
      <FlatList
        data={resources}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: verticalScale(15),
    backgroundColor: colors.primary,
    position: "relative",
  },
  backButton: {
    position: "absolute",
    left: horizontalScale(10),
  },
  backIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontSize: RFValue(20 , height),
    fontFamily: "Montserrat-Medium",
    textAlign: "center",
  },
  sectionTitle: {
    fontSize: RFValue(20 , height),
    fontFamily: "Montserrat-Medium",
    marginBottom: verticalScale(15),
    textAlign: "center",
    marginTop:verticalScale(10)
  },
  card: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    padding: verticalScale(15),
    marginVertical: verticalScale(5),
    borderRadius: horizontalScale(10),
    elevation: 2,
  },
  icon: {
    width: horizontalScale(20),
    height: verticalScale(20),
    resizeMode: "contain",
  },
  textContainer: {
    flex: 1,
    marginLeft: horizontalScale(10),
  },
  title: {
    fontSize: RFValue(16 , height),
    fontFamily: "Montserrat-SemiBold",
    color: "#333",
  },
  type: {
    fontSize: RFValue(14 , height),
    fontFamily: "Montserrat-Regular",
    color: "#777",
  },
});
export default Resources;
