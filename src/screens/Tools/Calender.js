import { StyleSheet, Text, View } from "react-native";
import React, { useState } from "react";
import { Calendar } from "react-native-calendars";
import ToolsHeader from "./ToolsHeader";
import { RFValue } from "react-native-responsive-fontsize";
import { moderateScale, verticalScale } from "../../helpers/Metrics";

const CustomCalendar = ({navigation}) => {
  const [selectedDate, setSelectedDate] = useState(null);
  const today = new Date();
  const formattedDate = today.toLocaleDateString('en-US', {   day: 'numeric' , month: 'long', });

  return (
    <View style={styles.container}>
      <ToolsHeader title = "Calender" navigation={navigation}/>
       <Text style = {styles.date}>
          {formattedDate}
       </Text>
      <Calendar
        style = {styles.calendar}
        onDayPress={(day) => {
          setSelectedDate(day.dateString);
          console.log("Selected day", day);
        }}
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
          todayBackgroundColor:"#F88C8C",
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
  date:{
     margin:10,
     fontSize:RFValue(20),
     fontFamily:"Montserrat -SemiBold",
     marginTop:verticalScale(20)
  },
  calendar:{
    padding:moderateScale(10),
    margin:moderateScale(10)
  },

});