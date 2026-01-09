import { Slot } from "expo-router";
import { ClerkProvider } from "@clerk/clerk-expo";
import SafeScreen from "@/components/SafeScreen";

export default function RootLayout() {
  return (
    <ClerkProvider>
    <SafeScreen>
        <Slot />
    </SafeScreen>
    </ClerkProvider>
  );
}
