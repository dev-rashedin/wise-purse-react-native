import { View, ActivityIndicator } from "react-native";
import { homeStyles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { JSX } from "react/jsx-runtime";

const PageLoader = () : JSX.Element => {
  return (
    <View style={homeStyles.loadingContainer}>
      <ActivityIndicator size="large" color={COLORS.primary} />
    </View>
  );
};
export default PageLoader;