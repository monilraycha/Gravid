// import React, { useRef, useState } from 'react';
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Image,
//   Linking,
//   Animated,
// } from 'react-native';
// import CommonButton from '../../components/CommonButton';
// import colors from '../../constants/color';
// import { horizontalScale, verticalScale } from '../../helpers/Metrics';
// import { RFValue } from 'react-native-responsive-fontsize';

// // Get device width and height
// const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

// const FollowOnInsta = ({ navigation }) => {
//   const scrollY = useRef(new Animated.Value(0)).current;

//   // Header opacity based on scroll position
//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, deviceHeight * 0.1], // Adjust based on image height
//     outputRange: [0, 1], // Header invisible at the top, fully visible when scrolled
//     extrapolate: 'clamp',
//   });

//   // Image opacity based on scroll position
//   const imageOpacity = scrollY.interpolate({
//     inputRange: [0, deviceHeight * 0.1],
//     outputRange: [1, 0], // Image visible at the top, hidden when scrolled
//     extrapolate: 'clamp',
//   });

//   return (
//     <View style={styles.container}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
//         <TouchableOpacity
//           style={styles.cancelButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image
//             source={require('../../assets/icons/close.png')}
//             style={styles.cancelIcon}
//           />
//         </TouchableOpacity>
//         <Text style={styles.headerText}>Follow us on Instagram!</Text>
//       </Animated.View>

//       {/* Scrollable Content */}
//       <Animated.ScrollView
//          scrollEnabled
//         keyboardShouldPersistTaps="handled"
//         contentContainerStyle ={{flexGrow:1}}
//         showsVerticalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//         {/* Animated Image */}
//         <Animated.Image
//           source={require('../../assets/images/followinsta.jpeg')}
//           style={[styles.ladyImage, { opacity: imageOpacity }]}
//         />

//         {/* Content Below */}
//         <View style={styles.contentContainer}>
//           <Text style={styles.text}>Follow us on Instagram</Text>
//           <CommonButton
//             title="TAKE ME THERE"
//             filled={true}
//             style={styles.button}
//             textStyle={styles.btntext}
//             onPress={() =>
//               Linking.openURL('https://www.instagram.com/monil_4102')
//             }
//           />
//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default FollowOnInsta;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   fixedHeader: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: colors.primary,
//     paddingVertical: verticalScale(15),
//     paddingHorizontal: horizontalScale(20),
//     flexDirection: 'row',
//     alignItems: 'center',
//     zIndex: 1,
//   },
//   cancelButton: {
//     marginRight: horizontalScale(10),
//   },
//   cancelIcon: {
//     width: horizontalScale(20),
//     height: verticalScale(20),
//   },
//   headerText: {
//     fontSize: RFValue(16),
//     flex: 1,
//     textAlign: 'center',
//   },
//   ladyImage: {
//     width: deviceWidth,
//     height: deviceHeight * 0.3,
//     resizeMode: 'cover',
//   },
//   contentContainer: {
//     padding: horizontalScale(20),
//     paddingTop: verticalScale(20),
//   },
//   text: {
//     fontSize: RFValue(18),
//     fontWeight: 'bold',
//     marginBottom: verticalScale(20),
//   },
//   button: {
//     marginTop: verticalScale(20),
//     backgroundColor: '#9BAF8E',
//     alignSelf: 'center',
//   },
// });

import React, { useRef } from 'react';
import {
  Dimensions,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  Image,
  Linking,
  Animated,
  ScrollView,
} from 'react-native';
import CommonButton from '../../components/CommonButton';
import colors from '../../constants/color';
import { horizontalScale, verticalScale } from '../../helpers/Metrics';
import { RFValue } from 'react-native-responsive-fontsize';

// Get device width and height
const { width: deviceWidth, height: deviceHeight } = Dimensions.get('window');

const FollowOnInsta = ({ navigation }) => {
  return (
    <View style={styles.container}>
      {/* Fixed Header */}
      <View style={styles.fixedHeader}>
        <TouchableOpacity
          style={styles.cancelButton}
          onPress={() => navigation.goBack()}
        >
          <Image
            source={require('../../assets/icons/close.png')}
            style={styles.cancelIcon}
          />
        </TouchableOpacity>
        <Text style={styles.headerText}>Follow us on Instagram!</Text>
      </View>

      {/* Fixed Image (Not Scrollable) */}
      <View style={styles.imageContainer}>
        <Image
          source={require('../../assets/images/followinsta.jpeg')}
          style={styles.ladyImage}
        />
      </View>

      <View
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <Text style={styles.text}>Follow us on Instagram</Text>
        <CommonButton
          title="TAKE ME THERE"
          filled={true}
          style={styles.button}
          textStyle={styles.btntext}
          onPress={() => Linking.openURL('https://www.instagram.com/monil_4102')}
        />
      </View>
    </View>
  );
};

export default FollowOnInsta;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
  },
  fixedHeader: {
    backgroundColor: colors.primary,
    paddingVertical: verticalScale(15),
    paddingHorizontal: horizontalScale(20),
    flexDirection: 'row',
    alignItems: 'center',
  },
  cancelButton: {
    marginRight: horizontalScale(10),
  },
  cancelIcon: {
    width: horizontalScale(20),
    height: verticalScale(20),
  },
  headerText: {
    fontSize: RFValue(14),
    fontFamily:"Montserrat",
    flex: 1,
    textAlign: 'center',
  },
  imageContainer: {
    width: deviceWidth,
    height: deviceHeight * 0.3, // Adjust height
    justifyContent: 'center',
    alignItems: 'center',
  },
  ladyImage: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
  scrollContent: {
    flexGrow: 1,
    padding: horizontalScale(20),
    paddingTop: verticalScale(20),
  },
  text: {
    fontSize: RFValue(18),
    marginTop: verticalScale(20),
    marginLeft: horizontalScale(15),
    fontFamily:"Montserrat Bold",
  },
  button: {
    marginTop: verticalScale(30),
    backgroundColor: '#9BAF8E',
    alignSelf: 'center',
    
  },
});
