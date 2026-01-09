import SafeScreen from '@/components/SafeScreen';
import { Image } from 'expo-image';
import { View, Text, StyleSheet } from 'react-native'

const AboutPage = () => {
  return (
    <SafeScreen style={aboutStyles.aboutContainer}>
       <View>
            <Text style={aboutStyles.titleText}>About Page</Text>
        </View>
        <View>
          <Image source={require("@/assets/images/icon.png")} style={{ width: 200, height: 200, marginBottom: 20 }} />
          <Image source={require("@/assets/images/icon.png")} style={{ width: 200, height: 200, marginBottom: 20 }} />
        </View>
    </SafeScreen>
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
    fontSize: 20,
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