import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const SettingsPage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={aboutStyles.aboutContainer}>
        <View>
          <Text style={aboutStyles.titleText}>Settings Page</Text>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default SettingsPage


const aboutStyles = StyleSheet.create({
  aboutContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
    padding: 20
  },
  titleText: {
    fontSize: 40,
    fontWeight: 'bold',
    marginBottom: 10
  },
  linkText: {
    color: '#007AFF',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: 24,
    textAlign: 'center'
  }
})