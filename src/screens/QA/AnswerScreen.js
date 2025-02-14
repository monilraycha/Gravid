import React, {useEffect} from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import colors from '../../constants/color';
import { horizontalScale , moderateScale, verticalScale } from '../../helpers/Metrics';
import { RFValue } from 'react-native-responsive-fontsize';

const AnswerScreen = ({route, navigation}) => {
  const {question, answer} = route.params;

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Image
          source={require('../../assets/icons/close.png')}
          style={styles.headerImage}
        />
        </TouchableOpacity>
        <Text style={styles.headerText}>{question}</Text>
      </View>
      <Text style={styles.answerText}>{answer}</Text>
    </View>
  );
};

export default AnswerScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  questionText: {
    fontSize: RFValue(18),
    fontWeight: 'bold',
    marginBottom: verticalScale(10),
    color: '#333',
  },
  answerText: {
    fontSize: RFValue(16),
    color: '#555',
    lineHeight: moderateScale(24),
    marginVertical: verticalScale(20),
    marginHorizontal: horizontalScale(15),
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
    fontSize: RFValue(14),
    textAlign: 'center',
    flex: 1,
    fontWeight: moderateScale(300),
},
});
