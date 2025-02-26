import React from 'react';
import { StyleSheet, View, StatusBar, Platform } from 'react-native';
import { SafeAreaProvider, useSafeAreaInsets } from 'react-native-safe-area-context';
import colors from './src/constants/color';
import AppNavigator from './src/routes/AppNavigator';

const MainApp = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={styles.container}>
      {/* Background color for iOS StatusBar */}
      {Platform.OS === 'ios' && (
        <View style={{ height: insets.top, backgroundColor: colors.primary }} />
      )}

      <StatusBar
        barStyle="dark-content"
        backgroundColor={colors.primary}  // Works on Android
        translucent={Platform.OS === 'ios'} // Make translucent on iOS
      />

      <AppNavigator />
    </View>
  );
};

const App = () => {
  return (
    <SafeAreaProvider>
      <MainApp />
    </SafeAreaProvider>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF3E6',
  },
});
