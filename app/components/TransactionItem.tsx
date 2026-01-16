import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import {  homeStyles } from "../assets/styles/home.styles";
import { COLORS } from "../constants/colors";
import { formatDate } from "../lib/utils";

interface TransactionItemProps {
  item: {
    id: string;
    title: string;
    amount: string;
    category: string;
    created_at: string;
  };
  onDelete: (id: string) => void;
}


interface CategoryIconMap {
  [key: string]: string;
}


// Map categories to their respective icons
const CATEGORY_ICONS: CategoryIconMap = {
  "Food & Drinks": "fast-food",
  Shopping: "cart",
  Transportation: "car",
  Entertainment: "film",
  Bills: "receipt",
  Income: "cash",
  Other: "ellipsis-horizontal",
};

export const TransactionItem = ({ item, onDelete } : TransactionItemProps) => {
  const isIncome = parseFloat(item.amount) > 0;
  const iconName = CATEGORY_ICONS[item.category] || "pricetag-outline";

  return (
    <View style={homeStyles.transactionCard} key={item.id}>
      <TouchableOpacity style={homeStyles.transactionContent}>
        <View style={homeStyles.categoryIconContainer}>
          <Ionicons name={iconName as any} size={22} color={isIncome ? COLORS.income : COLORS.expense} />
        </View>
        <View style={homeStyles.transactionLeft}>
          <Text style={homeStyles.transactionTitle}>{item.title}</Text>
          <Text style={homeStyles.transactionCategory}>{item.category}</Text>
        </View>
        <View style={homeStyles.transactionRight}>
          <Text
            style={[homeStyles.transactionAmount, { color: isIncome ? COLORS.income : COLORS.expense }]}
          >
            {isIncome ? "+" : "-"}${Math.abs(parseFloat(item.amount)).toFixed(2)}
          </Text>
          <Text style={homeStyles.transactionDate}>{formatDate(item.created_at)}</Text>
        </View>
      </TouchableOpacity>
      <TouchableOpacity style={homeStyles.deleteButton} onPress={() => onDelete(item.id)}>
        <Ionicons name="trash-outline" size={20} color={COLORS.expense} />
      </TouchableOpacity>
    </View>
  );
};