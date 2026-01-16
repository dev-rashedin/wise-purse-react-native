import { View, Text } from "react-native";
import {  homeStyles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { formatCurrency, getCurrencySymbol } from "@/lib/utils";

export const BalanceCard = ({ summary } : { summary: Summary }) => {
  return (
    <View style={homeStyles.balanceCard}>
      <Text style={homeStyles.balanceTitle}>Total Balance</Text>
      <Text style={homeStyles.balanceAmount}>৳{formatCurrency(summary.balance)}</Text>
      <View style={homeStyles.balanceStats}>
        <View style={homeStyles.balanceStatItem}>
          <Text style={homeStyles.balanceStatLabel}>Income</Text>
          <Text style={[homeStyles.balanceStatAmount, { color: COLORS.income }]}>
              +{getCurrencySymbol("")}
              {formatCurrency(summary.income)}
          </Text>
        </View>
        <View style={[homeStyles.balanceStatItem, homeStyles.statDivider]} />
        <View style={homeStyles.balanceStatItem}>
          <Text style={homeStyles.balanceStatLabel}>Expenses</Text>
          <Text style={[homeStyles.balanceStatAmount, { color: COLORS.expense }]}>
            -{getCurrencySymbol("")}
            {formatCurrency(Math.abs(summary.expense))}
          </Text>
        </View>
      </View>
    </View>
  );
};