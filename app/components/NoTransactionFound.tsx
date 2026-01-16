import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";
import {  homeStyles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { useRouter } from "expo-router";

const NoTransactionsFound = () => {
  const router = useRouter();

  return (
    <View style={homeStyles.emptyState}>
      <Ionicons
        name="receipt-outline"
        size={60}
        color={COLORS.textLight}
        style={homeStyles.emptyStateIcon}
      />
      <Text style={homeStyles.emptyStateTitle}>No transactions yet</Text>
      <Text style={homeStyles.emptyStateText}>
        Start tracking your finances by adding your first transaction
      </Text>
      <TouchableOpacity style={homeStyles.emptyStateButton} onPress={() => router.push("/create")}>
        <Ionicons name="add-circle" size={18} color={COLORS.white} />
        <Text style={homeStyles.emptyStateButtonText}>Add Transaction</Text>
      </TouchableOpacity>
    </View>
  );
};
export default NoTransactionsFound;