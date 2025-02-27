// import React, { useRef } from "react";
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Animated,
//   Image,
// } from "react-native";
// import colors from "../constants/color";
// import { RFValue } from "react-native-responsive-fontsize";
// import { horizontalScale, verticalScale } from "../helpers/Metrics";

// // Get device width and height
// const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// const ScrollableContent = ({
//   navigation,
//   headerTitle,
//   imageSource,
//   backCancelIcon,
//   contentTitle,
//   contentText,
//   subTitles,
//   descriptions,
//   sourceText,
// }) => {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const imageHeight = deviceHeight * 0.3;

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   const imageOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [1, 0],
//     extrapolate: "clamp",
//   });

//   return (
//     <View style={styles.container}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
//         <TouchableOpacity
//           style={styles.headerIcon}
//           onPress={() => navigation.goBack()}
//         >
//           {/* <Image source={backCancelIcon} style={styles.cancelIcon} /> */}
//         </TouchableOpacity>

//         <Text style={styles.headerText}>{headerTitle}</Text>
// {/* 
//         <TouchableOpacity style={styles.headerIcon}>
//           <Image
//             source={require("../assets/icons/sharedetail.png")}
//             style={styles.shareIcon}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.headerIcon}>
//           <Image
//             source={require("../assets/images/heart.png")}
//             style={styles.likeIcon}
//           />
//         </TouchableOpacity> */}
//       </Animated.View>

//       {/* Scrollable Content */}
//       <Animated.ScrollView
//         showsVerticalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//         {/* Animated Image */}
//         <Animated.Image
//           source={imageSource}
//           style={[styles.ladyImage, { opacity: imageOpacity }]}
//         />

//         <TouchableOpacity
//           style={styles.cancelButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image
//             source={backCancelIcon}
//             style={styles.cancelIcon}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.shareButton}>
//           <Image
//             source={require("../assets/icons/sharedetail.png")}
//             style={styles.shareIcon}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.likeButton}>
//           <Image
//             source={require("../assets/images/heart.png")}
//             style={styles.likeIcon}
//           />
//         </TouchableOpacity>

//         {/* Content Below */}
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>{contentTitle}</Text>
//           <Text style={styles.text}>{contentText}</Text>

//           {subTitles?.length > 0
//             ? subTitles.map((subTitle, index) => (
//                 <View key={index}>
//                   <Text style={styles.subTitle}>{subTitle}</Text>
//                   <Text style={styles.description}>
//                     {descriptions?.[index]}
//                   </Text>
//                 </View>
//               ))
//             : descriptions?.length > 0 &&
//               descriptions.map((desc, index) => (
//                 <Text key={index} style={styles.description}>
//                   {desc}
//                 </Text>
//               ))}

//           <Text style={styles.titleSource}>Source:</Text>
//           <Text style={styles.sourceText}>{sourceText}</Text>

//           <View style={styles.horizontalLine}></View>
//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default ScrollableContent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   fixedHeader: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: colors.primary,
//     paddingVertical: verticalScale(15),
//     paddingHorizontal: horizontalScale(20),
//     flexDirection: "row",
//     alignItems: "center",
//     zIndex: 1,
//   },
//   headerIcon: {
//     paddingBottom: verticalScale(10),
//   },
//   cancelButton: {
//     marginRight: horizontalScale(10),
//     position: "absolute",
//     top: verticalScale(15),
//     left: horizontalScale(10),
//   },
//   cancelIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//   },
//   shareButton: {
//     position: "absolute",
//     top: verticalScale(15),
//     right: horizontalScale(50),
//   },
//   shareIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//   },
//   likeButton: {
//     position: "absolute",
//     right: horizontalScale(10),
//     top: verticalScale(15),
//   },
//   likeIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//     marginLeft: horizontalScale(10),
//   },
//   headerText: {
//     fontSize: RFValue(12),
//     flex: 1,
//     textAlign: "center",
//     fontFamily: "Montserrat Medium",
//     flexWrap: "wrap",
//     paddingBottom: verticalScale(10),
//   },
//   ladyImage: {
//     width: deviceWidth,
//     height: deviceHeight * 0.3,
//     resizeMode: "cover",
//   },
//   contentContainer: {
//     padding: horizontalScale(20),
//     paddingTop: verticalScale(20),
//   },
//   text: {
//     fontSize: RFValue(17),
//     marginBottom: verticalScale(20),
//     fontFamily: "Montserrat Bold",
//   },
//   subTitle: {
//     fontSize: RFValue(14),
//     marginBottom: verticalScale(10),
//     paddingVertical: verticalScale(5),
//     fontFamily: "Montserrat Bold",
//   },
//   description: {
//     fontSize: RFValue(14),
//     marginBottom: verticalScale(15),
//     lineHeight: verticalScale(20),
//     fontFamily: "Montserrat Light",
//   },
//   title: {
//     fontSize: RFValue(10),
//     width: "20%",
//     marginBottom: verticalScale(20),
//     letterSpacing: 1,
//     backgroundColor: "#D3D3D3",
//     padding: horizontalScale(5),
//     borderRadius: horizontalScale(20),
//     textAlign: "center",
//     fontFamily: "Montserrat",
//   },
//   titleSource: {
//     fontSize: RFValue(15),
//     fontFamily: "Montserrat Medium",
//     marginBottom: verticalScale(20),
//     letterSpacing: 1,
//   },
//   sourceText: {
//     fontSize: RFValue(14),
//     marginBottom: verticalScale(20),
//     lineHeight: verticalScale(20),
//     fontFamily: "Montserrat Light",
//   },
//   horizontalLine: {
//     height: verticalScale(1),
//     backgroundColor: "#D3D3D3",
//     marginVertical: verticalScale(20),
//   },
// });// import React, { useRef } from "react";
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Animated,
//   Image,
// } from "react-native";
// import colors from "../constants/color";
// import { RFValue } from "react-native-responsive-fontsize";
// import { horizontalScale, verticalScale } from "../helpers/Metrics";

// // Get device width and height
// const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// const ScrollableContent = ({
//   navigation,
//   headerTitle,
//   imageSource,
//   backCancelIcon,
//   contentTitle,
//   contentText,
//   subTitles,
//   descriptions,
//   sourceText,
// }) => {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const imageHeight = deviceHeight * 0.3;

//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   const imageOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [1, 0],
//     extrapolate: "clamp",
//   });

//   return (
//     <View style={styles.container}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
//         <TouchableOpacity
//           style={styles.headerIcon}
//           onPress={() => navigation.goBack()}
//         >
//           {/* <Image source={backCancelIcon} style={styles.cancelIcon} /> */}
//         </TouchableOpacity>

//         <Text style={styles.headerText}>{headerTitle}</Text>
// {/* 
//         <TouchableOpacity style={styles.headerIcon}>
//           <Image
//             source={require("../assets/icons/sharedetail.png")}
//             style={styles.shareIcon}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.headerIcon}>
//           <Image
//             source={require("../assets/images/heart.png")}
//             style={styles.likeIcon}
//           />
//         </TouchableOpacity> */}
//       </Animated.View>

//       {/* Scrollable Content */}
//       <Animated.ScrollView
//         showsVerticalScrollIndicator={false}
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//         {/* Animated Image */}
//         <Animated.Image
//           source={imageSource}
//           style={[styles.ladyImage, { opacity: imageOpacity }]}
//         />

//         <TouchableOpacity
//           style={styles.cancelButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image
//             source={backCancelIcon}
//             style={styles.cancelIcon}
//           />
//         </TouchableOpacity>

//         <TouchableOpacity style={styles.shareButton}>
//           <Image
//             source={require("../assets/icons/sharedetail.png")}
//             style={styles.shareIcon}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.likeButton}>
//           <Image
//             source={require("../assets/images/heart.png")}
//             style={styles.likeIcon}
//           />
//         </TouchableOpacity>

//         {/* Content Below */}
//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>{contentTitle}</Text>
//           <Text style={styles.text}>{contentText}</Text>

//           {subTitles?.length > 0
//             ? subTitles.map((subTitle, index) => (
//                 <View key={index}>
//                   <Text style={styles.subTitle}>{subTitle}</Text>
//                   <Text style={styles.description}>
//                     {descriptions?.[index]}
//                   </Text>
//                 </View>
//               ))
//             : descriptions?.length > 0 &&
//               descriptions.map((desc, index) => (
//                 <Text key={index} style={styles.description}>
//                   {desc}
//                 </Text>
//               ))}

//           <Text style={styles.titleSource}>Source:</Text>
//           <Text style={styles.sourceText}>{sourceText}</Text>

//           <View style={styles.horizontalLine}></View>
//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default ScrollableContent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   fixedHeader: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: colors.primary,
//     paddingVertical: verticalScale(15),
//     paddingHorizontal: horizontalScale(20),
//     flexDirection: "row",
//     alignItems: "center",
//     zIndex: 1,
//   },
//   headerIcon: {
//     paddingBottom: verticalScale(10),
//   },
//   cancelButton: {
//     marginRight: horizontalScale(10),
//     position: "absolute",
//     top: verticalScale(15),
//     left: horizontalScale(10),
//   },
//   cancelIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//   },
//   shareButton: {
//     position: "absolute",
//     top: verticalScale(15),
//     right: horizontalScale(50),
//   },
//   shareIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//   },
//   likeButton: {
//     position: "absolute",
//     right: horizontalScale(10),
//     top: verticalScale(15),
//   },
//   likeIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//     marginLeft: horizontalScale(10),
//   },
//   headerText: {
//     fontSize: RFValue(12),
//     flex: 1,
//     textAlign: "center",
//     fontFamily: "Montserrat Medium",
//     flexWrap: "wrap",
//     paddingBottom: verticalScale(10),
//   },
//   ladyImage: {
//     width: deviceWidth,
//     height: deviceHeight * 0.3,
//     resizeMode: "cover",
//   },
//   contentContainer: {
//     padding: horizontalScale(20),
//     paddingTop: verticalScale(20),
//   },
//   text: {
//     fontSize: RFValue(17),
//     marginBottom: verticalScale(20),
//     fontFamily: "Montserrat Bold",
//   },
//   subTitle: {
//     fontSize: RFValue(14),
//     marginBottom: verticalScale(10),
//     paddingVertical: verticalScale(5),
//     fontFamily: "Montserrat Bold",
//   },
//   description: {
//     fontSize: RFValue(14),
//     marginBottom: verticalScale(15),
//     lineHeight: verticalScale(20),
//     fontFamily: "Montserrat Light",
//   },
//   title: {
//     fontSize: RFValue(10),
//     width: "20%",
//     marginBottom: verticalScale(20),
//     letterSpacing: 1,
//     backgroundColor: "#D3D3D3",
//     padding: horizontalScale(5),
//     borderRadius: horizontalScale(20),
//     textAlign: "center",
//     fontFamily: "Montserrat",
//   },
//   titleSource: {
//     fontSize: RFValue(15),
//     fontFamily: "Montserrat Medium",
//     marginBottom: verticalScale(20),
//     letterSpacing: 1,
//   },
//   sourceText: {
//     fontSize: RFValue(14),
//     marginBottom: verticalScale(20),
//     lineHeight: verticalScale(20),
//     fontFamily: "Montserrat Light",
//   },
//   horizontalLine: {
//     height: verticalScale(1),
//     backgroundColor: "#D3D3D3",
//     marginVertical: verticalScale(20),
//   },
// });


//scrollable old 

// import React, { useRef } from "react";
// import {
//   Dimensions,
//   StyleSheet,
//   Text,
//   TouchableOpacity,
//   View,
//   Animated,
//   Image,
// } from "react-native";
// import colors from "../constants/color";
// import { RFValue } from "react-native-responsive-fontsize";
// import { horizontalScale, verticalScale } from "../helpers/Metrics";
// import fonts from "../constants/fonts";

// // Get device width and height
// const { width: deviceWidth, height: deviceHeight } = Dimensions.get("window");

// const ScrollableContent = ({
//   navigation,
//   headerTitle,
//   imageSource,
//   backCancelIcon,
//   contentTitle,
//   contentText,
//   subTitles,
//   descriptions,
//   sourceText,
// }) => {
//   const scrollY = useRef(new Animated.Value(0)).current;
//   const imageHeight = deviceHeight * 0.3;

//   // Header opacity animation
//   const headerOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [0, 1],
//     extrapolate: "clamp",
//   });

//   // Image animations
//   const imageTranslateY = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [0, -imageHeight * 0.2],
//     extrapolate: "clamp",
//   });

//   const imageScale = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [1, 1.5],
//     extrapolate: "clamp",
//   });

//   const imageOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [1, 0.2],
//     extrapolate: "clamp",
//   });

//   const imageRotate = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: ["0deg", "15deg"],
//     extrapolate: "clamp",
//   });

//   // Animate Fixed Icons
//   const iconsOpacity = scrollY.interpolate({
//     inputRange: [0, imageHeight * 0.01], // Start fading out before the image disappears
//     outputRange: [1, 0], // Fully visible to fully hidden
//     extrapolate: "clamp",
//   });

//   const iconsTranslateY = scrollY.interpolate({
//     inputRange: [0, imageHeight],
//     outputRange: [0, -verticalScale(20)], // Moves up as it disappears
//     extrapolate: "clamp",
//   });

//   return (
//     <View style={styles.container}>
//       {/* Animated Header */}
//       <Animated.View style={[styles.fixedHeader, { opacity: headerOpacity }]}>
//         <TouchableOpacity
//           style={styles.headerIcon}
//           onPress={() => navigation.goBack()}
//         >
//           <Image source={backCancelIcon} style={styles.HeaderCancelIcon} />
//         </TouchableOpacity>

//         <Text style={styles.headerText}>{headerTitle}</Text>

//         <View style={styles.headerRightIcons}>
//           <TouchableOpacity style={styles.headerIcon}>
//             <Image
//               source={require("../assets/icons/sharedetail.png")}
//               style={styles.shareIcon}
//             />
//           </TouchableOpacity>
//           <TouchableOpacity style={styles.headerIcon}>
//             <Image
//               source={require("../assets/images/heart.png")}
//               style={styles.likeIcon}
//             />
//           </TouchableOpacity>
//         </View>
//       </Animated.View>

//       {/* Fixed Icons Over Image */}
//       <Animated.View
//         style={[
//           styles.fixedIcons,
//           {
//             opacity: iconsOpacity,
//             transform: [{ translateY: iconsTranslateY }],
//           },
//         ]}
//       >
//         <TouchableOpacity
//           style={styles.cancelButton}
//           onPress={() => navigation.goBack()}
//         >
//           <Image source={backCancelIcon} style={styles.cancelIcon} />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.shareButton}>
//           <Image
//             source={require("../assets/icons/sharedetail.png")}
//             style={styles.shareIcon}
//           />
//         </TouchableOpacity>
//         <TouchableOpacity style={styles.likeButton}>
//           <Image
//             source={require("../assets/images/heart.png")}
//             style={styles.likeIcon}
//           />
//         </TouchableOpacity>
//       </Animated.View>

//       {/* Scrollable Content */}
//       <Animated.ScrollView
//         showsVerticalScrollIndicator={false}
//         bounces={false}
//         keyboardShouldPersistTaps="handled"
//         onScroll={Animated.event(
//           [{ nativeEvent: { contentOffset: { y: scrollY } } }],
//           { useNativeDriver: false }
//         )}
//         scrollEventThrottle={16}
//       >
//         <Animated.Image
//           source={imageSource}
//           style={[
//             styles.ladyImage,
//             {
//               transform: [
//                 { translateY: imageTranslateY },
//                 { scale: imageScale },
//                 { rotate: imageRotate },
//               ],
//               opacity: imageOpacity,
//             },
//           ]}
//         />

//         <View style={styles.contentContainer}>
//           <Text style={styles.title}>{contentTitle}</Text>
//           <Text style={styles.text}>{contentText}</Text>

//           {subTitles?.length > 0
//             ? subTitles.map((subTitle, index) => (
//                 <Animated.View key={index}>
//                   <Text style={styles.subTitle}>{subTitle}</Text>
//                   <Text style={styles.description}>
//                     {descriptions?.[index]}
//                   </Text>
//                 </Animated.View>
//               ))
//             : descriptions?.length > 0 &&
//               descriptions.map((desc, index) => (
//                 <Text key={index} style={styles.description}>
//                   {desc}
//                 </Text>
//               ))}

//           <Text style={styles.titleSource}>Source:</Text>
//           <Text style={styles.sourceText}>{sourceText}</Text>
//           <View style={styles.horizontalLine}></View>
//         </View>
//       </Animated.ScrollView>
//     </View>
//   );
// };

// export default ScrollableContent;

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: colors.background,
//   },
//   fixedHeader: {
//     position: "absolute",
//     top: 0,
//     left: 0,
//     right: 0,
//     backgroundColor: colors.primary,
//     paddingVertical: verticalScale(15),
//     paddingHorizontal: horizontalScale(20),
//     flexDirection: "row",
//     alignItems: "center",
//     zIndex: 1,
//   },
//   headerIcon: {
//     paddingBottom: verticalScale(10),
//   },
//   cancelButton: {
//     position: "absolute",
//     top: verticalScale(8),
//   },
//   HeaderCancelIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//     position: "absolute",
//     bottom: verticalScale(0),
//     left: horizontalScale(-10),
//   },
//   cancelIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//   },
//   shareButton: {
//     position: "absolute",
//     top: verticalScale(11),
//     right: horizontalScale(50),
//   },
//   shareIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//   },
//   likeButton: {
//     position: "absolute",
//     right: horizontalScale(19),
//     top: verticalScale(11),
//   },
//   likeIcon: {
//     width: horizontalScale(20),
//     height: horizontalScale(20),
//     marginLeft: horizontalScale(10),
//   },
//   headerText: {
//     fontSize: RFValue(14 , deviceHeight),
//     flex: 1,
//     textAlign: "center",
//     fontFamily: "Montserrat-Medium",
//     // marginHorizontal: horizontalScale(50),
//     marginRight: horizontalScale(30),
//     marginBottom: verticalScale(10),
//   },
//   ladyImage: {
//     width: deviceWidth,
//     height: deviceHeight * 0.3,
//     resizeMode: "cover",
//   },
//   contentContainer: {
//     padding: horizontalScale(20),
//     paddingTop: verticalScale(20),
//   },
//   text: {
//     fontSize: RFValue(17 , deviceHeight),
//     marginBottom: verticalScale(20),
//     fontFamily: fonts.MontserratBold,
//   },
//   subTitle: {
//     fontSize: RFValue(14 , deviceHeight),
//     marginBottom: verticalScale(10),
//     paddingVertical: verticalScale(5),
//     fontFamily: "Montserrat Bold",
//   },
//   description: {
//     fontSize: RFValue(14 ,deviceHeight),
//     marginBottom: verticalScale(15),
//     lineHeight: verticalScale(20),
//     fontFamily: fonts.MontserratRegular,
//   },
//   title: {
//     fontSize: RFValue(10 , deviceHeight),
//     width: "20%",
//     marginBottom: verticalScale(20),
//     letterSpacing: 1,
//     backgroundColor: "#D3D3D3",
//     padding: horizontalScale(5),
//     borderRadius: horizontalScale(20),
//     textAlign: "center",
//     fontFamily: fonts.MontserratRegular,
//   },
//   titleSource: {
//     fontSize: RFValue(15 , deviceHeight),
//     fontFamily: fonts.MontserratMedium,
//     marginBottom: verticalScale(20),
//     letterSpacing: 1,
//   },
//   sourceText: {
//     fontSize: RFValue(14 , deviceHeight),
//     marginBottom: verticalScale(20),
//     lineHeight: verticalScale(20),
//     fontFamily: fonts.MontserratRegular,
//   },
//   horizontalLine: {
//     height: verticalScale(1),
//     backgroundColor: "#D3D3D3",
//     marginVertical: verticalScale(20),
//   },
//   fixedIcons: {
//     position: "absolute",
//     left: horizontalScale(10),
//     right: horizontalScale(0),
//     flexDirection: "row",
//     justifyContent: "space-between",
//     paddingHorizontal: horizontalScale(15),
//     zIndex: 2,
//   },
//   headerRightIcons: {
//     flexDirection: "row",
//     position: "absolute",
//     right: horizontalScale(20),
//   },
// });
