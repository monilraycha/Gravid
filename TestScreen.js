import { ScrollView, Text, View, Animated, StyleSheet } from 'react-native';
import React from 'react';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import colors from './src/constants/color';



// Animated Header Component
const AnimatedHeader = ({ animatedValue }) => {
  const headerHeight = animatedValue.interpolate({
    inputRange: [0, 150],
    outputRange: [200, 80],
    extrapolate: 'clamp',
  });

  return (
    <Animated.View style={[styles.header, { height: headerHeight }]}>
      <Text style={styles.headerText}>Book List</Text>
    </Animated.View>
  );
};

export default function TestScreen() {
  const offset = React.useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaProvider>
      <SafeAreaView style={styles.safeArea} forceInset={{ top: 'always' }}>
        <AnimatedHeader animatedValue={offset} />
        <ScrollView
          style={styles.scrollView}
          contentContainerStyle={styles.contentContainer}
          showsVerticalScrollIndicator={false}
          scrollEventThrottle={16}
          onScroll={Animated.event(
            [{ nativeEvent: { contentOffset: { y: offset } } }],
            { useNativeDriver: false }
          )}
        >
          {DATA.map(item => (
            <View key={item.id} style={styles.itemContainer}>
              <Text style={styles.itemText}>{item.title}</Text>
            </View>
          ))}
        </ScrollView>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
  },
  header: {
    backgroundColor: colors.primary, 
    justifyContent: 'center',
    alignItems: 'center',
    borderBottomLeftRadius: 30,
    borderBottomRightRadius: 30,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    position: 'relative',
  },
  headerText: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },

  scrollView: {
    flex: 1,
    backgroundColor: 'white',
  },
  contentContainer: {
    alignItems: 'center',
    paddingTop: 220,
    paddingHorizontal: 20,
  },
  itemContainer: {
    marginBottom: 20,
  },
  itemText: {
    color: '#101010',
    fontSize: 24,
  },
});


header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: moderateScale(15),
  },