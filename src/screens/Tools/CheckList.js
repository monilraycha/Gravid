import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
} from "react-native";
import colors from "../../constants/color";
import {
  moderateScale,
  horizontalScale,
  verticalScale,
} from "../../helpers/Metrics";
import { RFValue } from "react-native-responsive-fontsize";
import ToolsHeader from "./ToolsHeader";

const { height } = Dimensions.get("window");

const Checkbox = ({ isChecked, onPress }) => (
  <TouchableOpacity style={styles.checkboxContainer} onPress={onPress}>
    <View style={[styles.checkbox, isChecked && styles.checkboxChecked]}>
      {isChecked && (
        <Image
          source={require("../../assets/images/check.png")}
          style={styles.checkmarkImage}
        />
      )}
    </View>
  </TouchableOpacity>
);

const CheckList = ({ navigation }) => {
  const [checklist1, setChecklist1] = useState([
    { label: "Stroller + sleeping bag", checked: false },
    { label: "Baby car seat", checked: false },
    { label: "Charging cable", checked: false },
    { label: "Crib + bedding", checked: false },
  ]);

  const [checklist2, setChecklist2] = useState([
    { label: "Strengthen your pelvic floor", checked: false },
    { label: "Start supplementing with folic acid", checked: false },
    { label: "Plan maternity leave with your employer", checked: false },
    { label: "Stay hydrated and maintain a balanced diet", checked: false },
  ]);

  const [checklist3, setChecklist3] = useState([
    { label: "Schedule prenatal appointments", checked: false },
    { label: "Take prenatal vitamins daily", checked: false },
    { label: "Create a birth plan", checked: false },
    { label: "Attend childbirth education classes", checked: false },
    { label: "Prepare a hospital bag", checked: false },
    { label: "Install the car seat", checked: false },
    { label: "Decorate the nursery", checked: false },
    { label: "Discuss baby names with your partner", checked: false },
    { label: "Practice relaxation techniques for labor", checked: false },
    {
      label: "Research breastfeeding or bottle-feeding options",
      checked: false,
    },
    {
      label: "Stock up on baby essentials (diapers, clothes, etc.)",
      checked: false,
    },
  ]);

  // Combine all checklists into a single array
  const allChecklists = [...checklist1, ...checklist2, ...checklist3];

  // Calculate total checked checkboxes
  const totalChecked = allChecklists.filter((item) => item.checked).length;

  // Calculate total number of checkboxes
  const totalCheckboxes = allChecklists.length;

  // Calculate progress percentage
  const progressPercentage = (totalChecked / totalCheckboxes) * 100;

  const toggleCheckbox = (checklist, setChecklist, index) => {
    const updatedChecklist = checklist.map((item, i) =>
      i === index ? { ...item, checked: !item.checked } : item
    );
    setChecklist(updatedChecklist);
  };

  const handleEditText = () => {
    alert("Edit text");
  };

  return (
    <ScrollView bounces={false} showsVerticalScrollIndicator={false}>
      <View style={styles.container}>
        {/* Custom Header with Edit Text Button */}
        <View style={styles.header}>
          <ToolsHeader title="Checklist" navigation={navigation} />
          <TouchableOpacity onPress={handleEditText} style={styles.editButton}>
            <Text style={styles.editButtonText}>Edit</Text>
          </TouchableOpacity>
        </View>

        {/* Progress Status Bar */}
        <View style={styles.progressContainer}>
          <Text style={styles.progressText}>
            Your Checklist is {progressPercentage.toFixed(0)} % Completed
          </Text>
          <View style={styles.progressBar}>
            <View
              style={[styles.progressFill, { width: `${progressPercentage}%` }]}
            />
          </View>
        </View>

        {/* Preferences Checklist */}
        <View style={styles.checklistGroup}>
          <Text style={styles.groupTitle}>What to buy?</Text>
          {checklist1.map((item, index) => (
            <View key={index} style={styles.checkboxItem}>
              <Checkbox
                isChecked={item.checked}
                onPress={() => toggleCheckbox(checklist1, setChecklist1, index)}
              />
              <Text style={styles.checkboxText}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Agreements Checklist */}
        <View style={styles.checklistGroup}>
          <Text style={styles.groupTitle}>Exercise and Diet</Text>
          {checklist2.map((item, index) => (
            <View key={index} style={styles.checkboxItem}>
              <Checkbox
                isChecked={item.checked}
                onPress={() => toggleCheckbox(checklist2, setChecklist2, index)}
              />
              <Text style={styles.checkboxText}>{item.label}</Text>
            </View>
          ))}
        </View>

        {/* Pregnancy Checklist */}
        <View style={styles.checklistGroup}>
          <Text style={styles.groupTitle}>Pregnancy</Text>
          {checklist3.map((item, index) => (
            <View key={index} style={styles.checkboxItem}>
              <Checkbox
                isChecked={item.checked}
                onPress={() => toggleCheckbox(checklist3, setChecklist3, index)}
              />
              <Text style={styles.checkboxText}>{item.label}</Text>
            </View>
          ))}
        </View>
      </View>
    </ScrollView>
  );
};

export default CheckList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: verticalScale(20),
  },
  editButton: {
    padding: moderateScale(10),
    position: "absolute",
    right: 5,
  },
  editButtonText: {
    fontSize: RFValue(15, height),
    color: colors.black,
    fontFamily: "Montserrat SemiBold",
  },
  progressContainer: {
    marginBottom: verticalScale(20),
    marginHorizontal: horizontalScale(10),
  },
  progressText: {
    fontSize: RFValue(16, height),
    color: colors.black,
    fontFamily: "Montserrat SemiBold",
    marginTop: verticalScale(5),
    // marginLeft:horizontalScale(8),
    padding: moderateScale(10),
  },
  progressBar: {
    height: verticalScale(10),
    backgroundColor: colors.lightGray,
    borderRadius: moderateScale(5),
    overflow: "hidden",
    marginLeft: horizontalScale(10),
  },
  progressFill: {
    height: "100%",
    backgroundColor: colors.primary,
    borderRadius: moderateScale(5),
  },
  checklistGroup: {
    marginBottom: verticalScale(20),
    backgroundColor: colors.white,
    borderRadius: moderateScale(10),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(15),
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  groupTitle: {
    fontSize: RFValue(18, height),
    fontFamily: "Montserrat SemiBold",
    color: colors.primary,
    marginBottom: verticalScale(10),
  },
  checkboxItem: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: verticalScale(10),
  },
  checkboxText: {
    marginLeft: horizontalScale(10),
    color: colors.black,
    fontSize: RFValue(14, height),
    fontFamily: "Montserrat Regular",
    color: colors.text,
    flexShrink: 1,
  },
  checkboxContainer: {
    marginTop: verticalScale(5),
  },
  checkbox: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderRadius: moderateScale(12),
    borderWidth: 2,
    borderColor: colors.primary,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxChecked: {
    backgroundColor: colors.primary,
    borderColor: colors.primary,
  },
  checkmarkImage: {
    width: moderateScale(14),
    height: moderateScale(14),
    tintColor: colors.white,
  },
});
