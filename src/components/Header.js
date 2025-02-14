import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import colors from '../constants/color'

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
        fontSize: 30,
        color: colors.primary,
        fontFamily: 'Montserrat Bold',
    }
})