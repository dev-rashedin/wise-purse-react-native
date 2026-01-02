import { Stack } from 'expo-router';


const RootLayoutContainer = ({children}: {children: React.ReactNode}) => {
  return (
    <Stack screenOptions={{ headerShown: false }} >
    <Stack.Screen name="(tabs)" />
    {children}
  </Stack>
  )
}
export default RootLayoutContainer