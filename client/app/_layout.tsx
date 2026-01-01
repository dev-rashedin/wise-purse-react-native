import { Slot } from 'expo-router';
import { ClerkProvider } from '@clerk/clerk-expo';

export default function RootLayout() {
  return (
    <ClerkProvider>
      <Slot />
    </ClerkProvider>
  );
}
