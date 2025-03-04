import { StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { Calendar } from "react-native-calendars";
import ToolsHeader from "./ToolsHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, verticalScale } from "../../helpers/Metrics";
import colors from "../../constants/color";

const CustomCalendar = ({ navigation }) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const [today, setToday] = useState(new Date());
  const [formattedDate, setFormattedDate] = useState(
    today.toLocaleDateString("en-US", { day: "numeric", month: "long" })
  );

  useEffect(() => {
    setFormattedDate(
      today.toLocaleDateString("en-US", { day: "numeric", month: "long" })
    );
  }, [today]);

  const handleDayPress = (day) => {
    setSelectedDate(day.dateString);
    console.log("Selected day", day);
  };

  return (
    <View style={styles.container}>
      <ToolsHeader title="Calendar" navigation={navigation} />
      <Text style={styles.date}>{formattedDate}</Text>
      <Calendar
        style={styles.calendar}
        onDayPress={handleDayPress}
        markedDates={{
          [selectedDate]: {
            selected: true,
            selectedColor: "#F88C8C",
          },
        }}
        theme={{
          backgroundColor: "#ffffff",
          calendarBackground: "#ffffff",
          textSectionTitleColor: "#b6c1cd",
          selectedDayBackgroundColor: "#F88C8C",
          selectedDayTextColor: "#ffffff",
          todayTextColor: "#ffffff",
          todayBackgroundColor: "#F88C8C",
          dayTextColor: "#2d4150",
          arrowColor: "#F88C8C",
        }}
      />
    </View>
  );
};

export default CustomCalendar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  date: {
    margin: 10,
    fontSize: RFValue(20),
    color: colors.black,
    fontFamily: "Montserrat-SemiBold",
    marginTop: verticalScale(20),
  },
  calendar: {
    padding: moderateScale(10),
    margin: moderateScale(10),
  },
});
