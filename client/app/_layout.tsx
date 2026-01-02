import { Slot } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo';
import RootLayoutContainer from '@/components/RootLayoutContainer';

export default function RootLayout() {
  return (
    <ClerkProvider>
      <RootLayoutContainer>
        <Slot />
      </RootLayoutContainer>
    </ClerkProvider>
  );
}
