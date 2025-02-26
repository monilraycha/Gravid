import { StyleSheet, Text, View , Dimensions } from 'react-native'
import React from 'react'
import colors from '../constants/color'
import { RFValue } from 'react-native-responsive-fontsize'

const {height} = Dimensions.get('window');

const Header = () => {
  return (
    <View>
      <Text style={styles.headerText}>Preglife</Text>
    </View>
  )
}

export default Header

const styles = StyleSheet.create({
    headerText: {
        fontSize: RFValue(23 , height),
        color: colors.primary,
        fontFamily: 'Montserrat Bold',
    }
})