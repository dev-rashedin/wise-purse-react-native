
import { SafeAreaProvider, SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";

const SafeScreen = ({ children, style }: { children: React.ReactNode; style?: any }) => {
  const insets = useSafeAreaInsets();

  return (
    <SafeAreaProvider>
         <SafeAreaView style={{ flex: 1, paddingTop: insets.top, ...style }}>
          {children}
         </SafeAreaView>
         </SafeAreaProvider>
  );
};

export default SafeScreen;