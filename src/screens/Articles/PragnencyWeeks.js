import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import { horizontalScale, moderateScale, verticalScale } from '../../helpers/Metrics';
import { RFValue } from 'react-native-responsive-fontsize';
import { ScrollView } from 'react-native-gesture-handler';

const PragnencyWeeks = ({ navigation, route }) => {
  const { title } = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back.png')}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>{title.toLowerCase()}</Text>
      </View>

      <View style={styles.introduction}>
        <Text style={styles.introductionText}>{title.toLowerCase()}</Text>
        <Text style={styles.introductionDescription}>
          Here is a collection of articles about expecting a baby, preparations
          before birth, and parenting.
        </Text>
      </View>

      <View style={styles.calenderButton}>
        <TouchableOpacity style={styles.buttonOfCalender}>
          <Text style={styles.calenderText}>Pregnancy calendar - week by week</Text>
          <Image
            source={require('../../assets/icons/chevron.png')}
            style={styles.nextIcon}
          />
        </TouchableOpacity>
      </View>

      <ScrollView style={styles.content}>
        {/* Reusable Category Buttons */}
        <CategoryButton title="Visits during pregnancy" articleCount={8} />
        <CategoryButton title="More information from the midwife" articleCount={9} />
        <CategoryButton title="Oxytocin" articleCount={4} />
        <CategoryButton title="Preparations" articleCount={6} />
        <CategoryButton title="Exercising" articleCount={4} />
        <CategoryButton title="Fertility" articleCount={5} />
      </ScrollView>
    </View>
  );
};

/* Reusable Category Button Component */
const CategoryButton = ({ title, articleCount }) => {
  return (
    <View style={styles.buttonContainer}>
      <TouchableOpacity style={styles.button}>
        <View style={styles.backgroundOfImage}>
        <Image
          source={require('../../assets/icons/pregnant.png')}
          style={styles.pregIcon}
        />
        </View>

        {/* Text & Chevron Content */}
        <View style={styles.buttonContent}>
          <View style={styles.textContainer}>
            <Text style={styles.buttonTitle}>{title}</Text>
            <Text style={styles.buttonText}>Number of articles: {articleCount}</Text>
          </View>
          <Image
            source={require('../../assets/icons/chevron.png')}
            style={styles.nextIcon}
          />
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default PragnencyWeeks;

/* Styles */
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
    alignItems: 'center',
    backgroundColor: colors.primary,
  },
  headerImage: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontSize: RFValue(16),
    textAlign: 'center',
    flex: 1,
  },
  introduction: {
    paddingHorizontal: horizontalScale(15),
    paddingVertical: verticalScale(15),
  },
  introductionText: {
    fontSize: RFValue(15),
    marginBottom: verticalScale(10),
    fontFamily: 'Montserrat Medium',
  },
  introductionDescription: {
    fontFamily: 'Montserrat Light',
    fontSize: RFValue(12),
  },
  calenderButton: {
    paddingVertical: verticalScale(15),
  },
  buttonOfCalender: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  calenderText: {
    fontSize: RFValue(12),
    fontFamily: 'Montserrat Medium',
  },
  nextIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },

  /* Button Container */
  buttonContainer: {
    marginTop: verticalScale(10),
    borderRadius: moderateScale(12), 
    overflow: 'hidden',
  },

  /* Button */
  button: {
    backgroundColor: colors.white,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    width: '100%',
    position: 'relative',
    flexDirection: 'row',
    alignItems: 'center',
  },

  pregIcon: {
    width: horizontalScale(30),
    height: horizontalScale(30),
    marginBottom: verticalScale(10),
    resizeMode: 'contain',
    alignSelf: 'center',
    tintColor: '#000000'
  },
  
backgroundOfImage: {
  position: 'absolute',
  top: 0,
  left: 0,
  height: horizontalScale(80),  
  width: horizontalScale(80),
  backgroundColor: '#fdf5e2',
  justifyContent: 'center',
  alignItems: 'center',
},

  /* Button Content */
  buttonContent: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginLeft: horizontalScale(80),
  },

  textContainer: {
    flex: 1,
    
  },

  buttonTitle: {
    fontSize: RFValue(12),
    fontFamily: 'Montserrat Medium',
  },

  buttonText: {
    fontSize: RFValue(10),
    marginTop: verticalScale(5),
    fontFamily: 'Montserrat Light',
  },
  content:{
    paddingBottom: horizontalScale(50),
  }
});
