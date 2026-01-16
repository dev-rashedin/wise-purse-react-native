import { View, Text } from "react-native";
import {  homeStyles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";

export const BalanceCard = ({ summary } : { summary: Summary }) => {
  return (
    <View style={homeStyles.balanceCard}>
      <Text style={homeStyles.balanceTitle}>Total Balance</Text>
      <Text style={homeStyles.balanceAmount}>${parseFloat(summary.balance).toFixed(2)}</Text>
      <View style={homeStyles.balanceStats}>
        <View style={homeStyles.balanceStatItem}>
          <Text style={homeStyles.balanceStatLabel}>Income</Text>
          <Text style={[homeStyles.balanceStatAmount, { color: COLORS.income }]}>
            +${parseFloat(summary.income).toFixed(2)}
          </Text>
        </View>
        <View style={[homeStyles.balanceStatItem, homeStyles.statDivider]} />
        <View style={homeStyles.balanceStatItem}>
          <Text style={homeStyles.balanceStatLabel}>Expenses</Text>
          <Text style={[homeStyles.balanceStatAmount, { color: COLORS.expense }]}>
            -${Math.abs(parseFloat(summary.expense)).toFixed(2)}
          </Text>
        </View>
      </View>
    </View>
  );
};