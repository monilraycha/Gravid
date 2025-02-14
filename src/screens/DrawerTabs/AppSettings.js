import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import {
  horizontalScale,
  verticalScale,
} from '../../helpers/Metrics';
import {RFValue} from 'react-native-responsive-fontsize';

const AppSettings = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        {/* Wrap the Image in TouchableOpacity to make it clickable */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            source={require('../../assets/images/back.png')}
            style={styles.headerImage}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>App Settings</Text>
        
      </View>

      <View style={styles.content}>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>My Family</Text>
              <Image source={require('../../assets/icons/chevron.png')} 
               style={{width: horizontalScale(20), height: verticalScale(20)}}
              />
            </View>
          </TouchableOpacity>
        </View>
      
        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>My Profile</Text>
              <Image source={require('../../assets/icons/chevron.png')} 
               style={{width: horizontalScale(20), height: verticalScale(20)}}
              />
            </View>
          </TouchableOpacity>
        </View>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Country</Text>
              <Image source={require('../../assets/icons/chevron.png')} 
               style={{width: horizontalScale(20), height: verticalScale(20)}}
              />
            </View>
          </TouchableOpacity>
        </View>
      



      </View>
    </View>
  );
};

export default AppSettings;

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

  buttonContainer: {
    marginTop: verticalScale(5),
  },
  button: {
    backgroundColor: colors.white, // Button background color
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    backgroundColor: '#ffff',
    width: '100%',
  },
  buttonContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  buttonText: {
    fontSize: RFValue(14),
    color: colors.black, // Text color
  },

});
