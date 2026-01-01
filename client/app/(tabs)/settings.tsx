import SafeAreaContainer from '@/components/SafeAreaProvider';
import { View, Text, StyleSheet } from 'react-native'

const SettingsPage = () => {


  return (
    <SafeAreaContainer>
      <View>
        <Text style={aboutStyles.titleText}>Settings Page</Text>
      </View>
    </SafeAreaContainer>
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