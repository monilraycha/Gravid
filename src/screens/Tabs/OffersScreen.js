import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import colors from '../../constants/color';
import { RFValue } from 'react-native-responsive-fontsize';

const {width} = Dimensions.get('window'); // Get screen width

const OffersScreen = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerText}>Offers</Text>
      </View>
      <View style={styles.card}>
        <Image
          source={require('../../assets/images/prmother.jpg')}
          style={styles.image}
        />

        <Text style={styles.title}>
          Unlimited access to A FREE WEEK of tailored workouts
        </Text>

        <Text style={styles.description}>
          Enjoy secure workout routines, including yoga sessions designed
          specifically for pregnancy. Dive into a world of self-care with our
          FREE WEEK TRIAL of the ultimate health and wellness program by signing
          up today!
        </Text>
      </View>
    </View>
  );
};

export default OffersScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: colors.background,
  },
  header: {
    backgroundColor: colors.primary,
    paddingVertical: 20,
    paddingHorizontal: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    elevation: 3,
  },
  headerText: {
    fontSize: RFValue(18),
    fontWeight: '300',
    flex: 1,
    textAlign: 'center',
  },
  card: {
    width: width - 40, 
    marginTop: 15,
    backgroundColor: '#ffffff',
    borderRadius: 20,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 4},
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 8, 
    alignItems: 'center', 
    overflow: 'hidden', 
  },
  image: {
    width: width - 40, 
    height: 230,
    borderTopLeftRadius: 10, 
    borderTopRightRadius: 10, 
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
    textAlign: 'left', 
    padding:10
  },
  description: {
    fontSize: 14,
    color: '#666',
    lineHeight: 20,
    textAlign: 'left', 
    padding:10,
    marginBottom: 10,
  },
});
