import {StyleSheet, Text, View, Image, TouchableOpacity , Linking} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import {
  horizontalScale,
  moderateScale,
  verticalScale,
} from '../../helpers/Metrics';
import {RFValue} from 'react-native-responsive-fontsize';


const NotificationsScreen = ({navigation}) => {

  const notificationPermission = () =>{
    if (Platform.OS === 'ios') {
      Linking.openURL('app-settings:');
    } else if (Platform.OS === 'android') {
      Linking.openSettings();
    }
  }

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
        <Text style={styles.headerText}>push notifications</Text>
        
      </View>

      <View style={styles.content}>

        <Text style={styles.title}>push notifications</Text>

        <View style={styles.buttonContainer}>
          <TouchableOpacity style={styles.button} onPress={notificationPermission}>
            <View style={styles.buttonContent}>
              <Text style={styles.buttonText}>Enable push notifications</Text>
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

export default NotificationsScreen;

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
  title: {
    fontSize: RFValue(14),
    fontWeight: 'bold',
    marginTop: verticalScale(20),
    marginBottom: verticalScale(10),
    marginLeft: horizontalScale(20),
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
