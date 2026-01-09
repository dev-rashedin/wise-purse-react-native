
import { COLORS } from "@/constants/colors";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreen = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
         <SafeAreaView style={{ flex: 1, paddingTop: insets.top, backgroundColor: COLORS.background, ...style }}>
          {children}
         </SafeAreaView>
         </SafeAreaProvider>
  );
};

export default SafeScreen;