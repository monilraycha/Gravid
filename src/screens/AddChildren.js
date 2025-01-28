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
import React, {useState} from 'react';
import CommonButton from '../components/CommonButton';

const AddChildren = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [childName, setChildName] = useState('');
  const [dateOfBirth, setDateOfBirth] = useState('');
  const [selectedGender, setSelectedGender] = useState(null);
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  const handleCheckboxPress = gender => {
    setSelectedGender(gender);
  };

  const checkIfButtonShouldBeEnabled = () => {
    if (childName && dateOfBirth) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  };

  React.useEffect(() => {
    checkIfButtonShouldBeEnabled(); // Check if the button should be enabled when inputs change
  }, [childName, dateOfBirth]);

  const closeModal = () => {
    setModalVisible(false); // Close the modal when tapping outside
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
      <TouchableOpacity
        onPress={() => setModalVisible(true)}
        style={styles.button}>
        <Image
          source={require('../assets/images/add.png')}
          style={styles.icon}
        />
        <Text style={styles.buttonText}>Add Child</Text>
      </TouchableOpacity>

      <TouchableOpacity
        onPress={() => {
        }}
        style={styles.addLater}>
        <Text style={styles.laterbuttonText} onPress={
          () => {
            navigation.goBack(); // navigate to main screen remaining 
          }
        }>ADD LATER</Text>
      </TouchableOpacity>

      <Modal
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => setModalVisible(!modalVisible)}>
        <TouchableWithoutFeedback onPress={closeModal}>
          <View style={styles.modalBackground}>
            {/* The Modal content will still be clickable without closing */}
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
                  {/* First Checkbox (Girl) */}
                  <TouchableOpacity
                    onPress={() => handleCheckboxPress('girl')}
                    style={styles.checkboxItem}>
                    <View
                      style={[
                        styles.checkbox,
                        selectedGender === 'girl' && styles.checkboxChecked,
                      ]}>
                      {selectedGender === 'girl' && (
                        <Image
                          source={require('../assets/images/check.png')} // Add the correct path for your check icon
                          style={styles.checkmarkIcon}
                        />
                      )}
                    </View>
                    <Text style={styles.checkboxText}>Girl</Text>
                  </TouchableOpacity>
                  {/* Second Checkbox (Boy) */}
                  <TouchableOpacity
                    onPress={() => handleCheckboxPress('boy')}
                    style={styles.checkboxItem}>
                    <View
                      style={[
                        styles.checkbox,
                        selectedGender === 'boy' && styles.checkboxChecked,
                      ]}>
                      {selectedGender === 'boy' && (
                        <Image
                          source={require('../assets/images/check.png')} // Add the correct path for your check icon
                          style={styles.checkmarkIcon}
                        />
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
                }
                  }
                  titleStyle={styles.modalButtonText}
                  disabled={!isButtonEnabled} 
                />{' '}
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
    backgroundColor: '#FFF3E6',
    padding: 20,
    marginTop: 50,
    alignItems: 'flex-start',
  },
  title: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 15,
    textAlign: 'left',
    fontFamily:'Montserrat Bold'

  },
  description: {
    fontSize: 16,
    color: '#555',
    lineHeight: 24,
    textAlign: 'left',
    marginBottom: 10,
    fontFamily:'Montserrat ExtraLight'
  },
  highlights: {
    fontSize: 18,
    color: '#000000',
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily:'Montserrat'

  },
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    borderWidth: 1,
    borderColor: '#F88C8C',
    width: '100%',
  },
  icon: {
    width: 22,
    height: 22,
    marginRight: 10,
  },
  buttonText: {
    fontSize: 17,
    color: '#000000',
    fontWeight: 'bold',
    marginLeft: 5,
    fontFamily:'Montserrat'

  },
  addLater: {
    backgroundColor: 'transparent',
    borderRadius: 12,
    paddingVertical: 15,
    paddingHorizontal: 25,
    marginTop: 10,
    alignSelf: 'center',
    position: 'absolute',
    bottom: 25,
  },
  laterbuttonText: {
    letterSpacing: 1,
  },
  modalBackground: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Semi-transparent background
  },
  modalContainer: {
    backgroundColor: 'white',
    padding: 40,
    margin: 40,
    width: '80%',
    borderRadius: 12,
    position: 'absolute',
    top: '40%',
    left: '50%',
    transform: [{translateX: -190}, {translateY: -180}],
    width: 300,
  },
  modalTitle: {
    fontSize: 20,
    marginBottom: 30,
    textAlign: 'center',
    fontFamily:'Montserrat'

  },
  modalButtonText: {
    color: '#F88C8C',
    fontWeight: 'bold',
    letterSpacing: 1,
  },

  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 10,
    marginBottom: 15,
    fontFamily:'Montserrat'

  },
  label: {
    fontSize: 12,
    marginBottom: 10,
    letterSpacing: 1,
    marginTop: 10,
    fontFamily:'Montserrat'

  },
  checkboxContainer: {
    flexDirection: 'row',
    marginBottom: 20,
    marginTop: 10,
  },
  checkboxItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginRight: 20,
    marginBottom: 10,
  },
  checkbox: {
    width: 24,
    height: 24,
    borderWidth: 2,
    borderRadius: 12,
    borderColor: '#F88C8C',
    marginRight: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  checkboxChecked: {
    backgroundColor: '#F88C8C',
  },
  checkmarkIcon: {
    width: 18,
    height: 18,
    tintColor: 'white',
  },
  checkboxText: {
    fontSize: 16,
    color: '#333',
  },
  addButton: {
    backgroundColor: '#F88C8C',
    borderRadius: 12,
    paddingVertical: 15,
    alignItems: 'center',
  },
  addButtonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    fontFamily:'Montserrat'

  },
});
