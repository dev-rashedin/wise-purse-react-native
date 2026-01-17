import { View, Text, Alert, TouchableOpacity, TextInput, ActivityIndicator} from "react-native";
import React, { useState } from "react";
import { useRouter } from "expo-router";
import { useUser } from "@clerk/clerk-expo";
import api_url from "@/constants/api";
import { createStyles } from "@/assets/styles/create.styles";
import { COLORS } from "@/constants/colors";
import Ionicons from "@expo/vector-icons/build/Ionicons";
import { CATEGORIES } from "@/constants/category";
const CreateScreen = () => {
  const router = useRouter();
  const { user } = useUser();

  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("");
  const [isExpense, setIsExpense] = useState(true);
  const [isLoading, setIsLoading] = useState(false);

  const handleCreate = async () => {
    // validations
    if (!title.trim())
      return Alert.alert("Error", "Please enter a transaction title");
    if (!amount || isNaN(parseFloat(amount)) || parseFloat(amount) <= 0) {
      Alert.alert("Error", "Please enter a valid amount");
      return;
    }

    if (!selectedCategory)
      return Alert.alert("Error", "Please select a category");

    setIsLoading(true);

    try {

        const formattedAmount = isExpense
        ? -Math.abs(parseFloat(amount))
        : Math.abs(parseFloat(amount));

      const response = await fetch(`${api_url}/transactions`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          user_id: user?.id,
          title: title.trim(),
          amount: formattedAmount,
          category: selectedCategory,
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        console.log(errorData);
        throw new Error(errorData.error || "Failed to create transaction");
      }

      Alert.alert("Success", "Transaction created successfully");
      router.back();
    } catch (error: any) {
      Alert.alert("Error", error.message || "Failed to create transaction");
      console.error("Error creating transaction:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
   <View style={createStyles.container}>
    <Text style={createStyles.header}>Create Transaction</Text>
   </View>
  );
};

export default CreateScreen;
