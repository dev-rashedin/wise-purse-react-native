import { Image } from 'expo-image';
import { Link } from 'expo-router';
import { Alert, Button, StyleSheet, Text, View } from 'react-native';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';

export default function Index() {
  const onPressLearnMore = () => {
    Alert.alert('Learn More Pressed');
  };

  return (
    <SafeAreaProvider>
      <SafeAreaView style={style.container}>
        <View
          style={{
            flex: 1,
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text>Edit app/index.tsx to edit this screen.</Text>
          <Image
            source={{
              uri: 'https://plus.unsplash.com/premium_photo-1683865776032-07bf70b0add1?q=80&w=1632&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
            }}
            style={style.image}
          />
          <View style={style.buttonContainer}>
            <Button
              onPress={onPressLearnMore}
              title='Learn More'
              color='#841584'
              accessibilityLabel='Learn more about this purple button'
            />
          </View>
          <Link href='/settings' style={style.linkText}>About</Link>
        </View>
      </SafeAreaView>
    </SafeAreaProvider>
  );
}

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    paddingHorizontal: 10,
  },
  image: {
    width: 360,
    height: 240,
    marginTop: 20,
    marginBottom: 20,
    borderRadius: 10,
  },
  buttonContainer: {
    marginTop: 20,
    color: '#841584',
  },
  linkText: {
    color: '#014c9bff',
    textDecorationLine: 'underline',
    marginTop: 10,
    fontSize: 20,
    fontWeight: '600',
    textAlign: 'center',
  },
});
