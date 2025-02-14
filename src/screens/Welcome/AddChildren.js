import {
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Modal,
  TextInput,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native';
import React, { useState } from 'react';
import CommonButton from '../../components/CommonButton';
import colors from '../../constants/color';
import { moderateScale, horizontalScale, verticalScale } from '../../helpers/Metrics';
import { RFValue } from 'react-native-responsive-fontsize';

const AddChildren = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [childName, setChildName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleCheckboxPress = (gender) => {
    setSelectedGender(gender);
  };

  const checkIfButtonShouldBeEnabled = () => {
    setIsButtonEnabled(!!(childName && dateOfBirth));
  };

  React.useEffect(() => {
    checkIfButtonShouldBeEnabled();
  }, [childName, dateOfBirth]);

  const closeModal = () => {
    setModalVisible(false);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Add Children</Text>
      <Text style={styles.description}>
        Do you have children aged 0-2? Add them to follow their development
        stages and get access to articles, podcasts, and offers.
      </Text>
      <Text style={styles.highlights}>
        You can alternatively add this information later in app settings.
      </Text>

      <TouchableOpacity onPress={() => setModalVisible(true)} style={styles.button}>
        <Image source={require('../../assets/images/add.png')} style={styles.icon} />
        <Text style={styles.buttonText}>Add Child</Text>
      </TouchableOpacity>

      <TouchableOpacity onPress={() => navigation.goBack()} style={styles.addLater}>
        <Text style={styles.laterbuttonText}>ADD LATER</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            <TouchableWithoutFeedback>
              <View style={styles.modalContainer}>
                <Text style={styles.modalTitle}>Enter Child Details</Text>
                <TextInput
                  placeholder="Name (optional)"
                  style={styles.input}
                  value={childName}
                  onChangeText={setChildName}
                />
                <TextInput
                  placeholder="Date of Birth"
                  style={styles.input}
                  value={dateOfBirth}
                  onChangeText={setDateOfBirth}
                />
                <Text style={styles.label}>GENDER (OPTIONAL)</Text>

                <View style={styles.checkboxContainer}>
                  <TouchableOpacity onPress={() => handleCheckboxPress('girl')} style={styles.checkboxItem}>
                    <View style={[styles.checkbox, selectedGender === 'girl' && styles.checkboxChecked]}>
                      {selectedGender === 'girl' && (
                        <Image source={require('../../assets/images/check.png')} style={styles.checkmarkIcon} />
                      )}
                    </View>
                    <Text style={styles.checkboxText}>Girl</Text>
                  </TouchableOpacity>

                  <TouchableOpacity onPress={() => handleCheckboxPress('boy')} style={styles.checkboxItem}>
                    <View style={[styles.checkbox, selectedGender === 'boy' && styles.checkboxChecked]}>
                      {selectedGender === 'boy' && (
                        <Image source={require('../../assets/images/check.png')} style={styles.checkmarkIcon} />
                      )}
                    </View>
                    <Text style={styles.checkboxText}>Boy</Text>
                  </TouchableOpacity>
                </View>

                <CommonButton
                  filled={true}
                  title="ADD CHILD"
                  style={{
                    backgroundColor: isButtonEnabled ? '#F88C8C' : '#ccc',
                  }}
                  titleStyle={styles.modalButtonText}
                  disabled={!isButtonEnabled}
                />
              </View>
            </TouchableWithoutFeedback>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </View>
  );
};

export default AddChildren;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    padding: horizontalScale(20),
    marginTop: verticalScale(50),
    alignItems: 'flex-start',
  },
  title: {
    fontSize: RFValue(22),
    fontWeight: 'bold',
    color: '#333',
    marginBottom: verticalScale(15),
    textAlign: 'left',
    fontFamily: 'Montserrat Bold',
  },
  description: {
    fontSize: RFValue(14),
    color: '#555',
    lineHeight: verticalScale(24),
    textAlign: 'left',
    marginBottom: verticalScale(10),
    fontFamily: 'Montserrat ExtraLight',
  },
  highlights: {
    fontSize: RFValue(14),
    color: '#000000',
    // fontWeight: 'bold',
    marginBottom: verticalScale(30),
    fontFamily: 'Montserrat Medium',
  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(25),
    borderWidth: moderateScale(1),
    borderColor: '#F88C8C',
    width: '100%',
  },
  icon: {
    width: moderateScale(22),
    height: moderateScale(22),
    marginRight: horizontalScale(10),
  },
  buttonText: {
    fontSize: RFValue(14),
    color: '#000000',
    marginLeft: horizontalScale(5),
    fontFamily: 'Montserrat Medium',
  },
  addLater: {
    backgroundColor: 'transparent',
    borderRadius: moderateScale(12),
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(25),
    marginTop: verticalScale(10),
    alignSelf: 'center',
    position: 'absolute',
    bottom: verticalScale(25),
  },
  laterbuttonText: {
    letterSpacing: 1,
    fontSize: RFValue(14),
    color: '#000000',
    fontFamily: 'Montserrat Medium',
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: moderateScale(40),
    borderRadius: moderateScale(12),
    width: moderateScale(300),
  },
  modalTitle: {
    fontSize: RFValue(20),
    marginBottom: verticalScale(30),
    textAlign: 'center',
    fontFamily: 'Montserrat',
  },
  modalButtonText: {
    color: '#F88C8C',
    fontWeight: 'bold',
    letterSpacing: 1,
  },
  input: {
    borderWidth: moderateScale(1),
    borderColor: '#ccc',
    borderRadius: moderateScale(8),
    padding: moderateScale(10),
    marginBottom: verticalScale(15),
    fontFamily: 'Montserrat',
  },
  label: {
    fontSize: RFValue(12),
    marginBottom: verticalScale(10),
    letterSpacing: 1,
    marginTop: verticalScale(10),
    fontFamily: 'Montserrat',
  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: verticalScale(20),
    marginTop: verticalScale(10),
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: horizontalScale(20),
    marginBottom: verticalScale(10),
  },
  checkbox: {
    width: moderateScale(24),
    height: moderateScale(24),
    borderWidth: moderateScale(2),
    borderRadius: moderateScale(12),
    borderColor: '#F88C8C',
    marginRight: horizontalScale(10),
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#F88C8C',
  },
  checkmarkIcon: {
    width: moderateScale(18),
    height: moderateScale(18),
    tintColor: 'white',
  },
  checkboxText: {
    fontSize: RFValue(16),
    color: '#333',
  },
});
