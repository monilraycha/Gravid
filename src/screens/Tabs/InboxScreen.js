import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import { RFValue } from 'react-native-responsive-fontsize';


const InboxScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Custom Header */}
      <View style={styles.header}>
        {/* Left Close Icon */}
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image 
            source={require('../../assets/icons/close.png')} // Your custom close icon
            style={styles.closeIcon}
          />
        </TouchableOpacity>
        
        {/* Title */}
        <Text style={styles.headerTitle}>PregLife Inbox</Text>
      </View>

      {/* Main Content */}
      <View style={styles.content}>
        <Image 
          source={require('../../assets/images/email.png')}
          style={[styles.emailIcon, { tintColor: colors.primary }]} 
        />
        <Text style={styles.noUpdatesText}>We have no updates.</Text>
        <Text style={styles.noUpdatesText}>Please check again later.</Text>
      </View>
    </View>
  );
};

export default InboxScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: 15,
    backgroundColor: colors.primary,
    paddingVertical: 20,
  },
  closeIcon: {
    width: 24,
    height: 24,
  },
  headerTitle: {
    flex: 1,
    textAlign: 'center',
    fontSize: RFValue(16),
    fontFamily: 'Montserrat Medium',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  emailIcon: {
    width: 80,
    height: 80,
    marginBottom: 15,
  },
  noUpdatesText: {
    fontSize: 16,
    textAlign: 'center',
    fontFamily: 'Montserrat Medium',
  },
});
