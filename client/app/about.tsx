import { Link } from 'expo-router';
import { View, Text, StyleSheet } from 'react-native'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const AboutPage = () => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={aboutStyles.aboutContainer}>
        <View>
          <Text style={aboutStyles.titleText}>About Page</Text>
          <Link href="/" style={aboutStyles.linkText}>Home</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}
export default AboutPage


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