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
      {/* HEADERE */}
      <View style={createStyles.header}>
        <TouchableOpacity
          style={createStyles.backButton}
          onPress={() => router.back()}
        >
          <Ionicons name="arrow-back" size={24} color={COLORS.text} />
        </TouchableOpacity>
        <Text style={createStyles.headerTitle}>New Transaction</Text>
        <TouchableOpacity
          style={[
            createStyles.saveButtonContainer,
            isLoading && createStyles.saveButtonDisabled,
          ]}
          onPress={handleCreate}
          disabled={isLoading}
        >
          <Text style={createStyles.saveButton}>
            {isLoading ? "Saving..." : "Save"}
          </Text>
          {!isLoading && (
            <Ionicons name="checkmark" size={18} color={COLORS.primary} />
          )}
        </TouchableOpacity>
      </View>

      {/* CARD */}
      <View style={createStyles.card}>
        <View style={createStyles.typeSelector}>
          {/* EXPENSE SELECTOR */}
          <TouchableOpacity
            style={[
              createStyles.typeButton,
              isExpense && createStyles.typeButtonActive,
            ]}
            onPress={() => setIsExpense(true)}
          >
            <Ionicons
              name="arrow-down-circle"
              size={22}
              color={isExpense ? COLORS.white : COLORS.expense}
              style={createStyles.typeIcon}
            />
            <Text
              style={[
                createStyles.typeButtonText,
                isExpense && createStyles.typeButtonTextActive,
              ]}
            >
              Expense
            </Text>
          </TouchableOpacity>

          {/* INCOME SELECTOR */}
          <TouchableOpacity
            style={[
              createStyles.typeButton,
              !isExpense && createStyles.typeButtonActive,
            ]}
            onPress={() => setIsExpense(false)}
          >
            <Ionicons
              name="arrow-up-circle"
              size={22}
              color={!isExpense ? COLORS.white : COLORS.income}
              style={createStyles.typeIcon}
            />
            <Text
              style={[
                createStyles.typeButtonText,
                !isExpense && createStyles.typeButtonTextActive,
              ]}
            >
              Income
            </Text>
          </TouchableOpacity>
        </View>
     

      {/* AMOUNT CONTAINER */}
      <View style={createStyles.amountContainer}>
        <Text style={createStyles.currencySymbol}>$</Text>
        <TextInput
          style={createStyles.amountInput}
          placeholder="0.00"
          placeholderTextColor={COLORS.textLight}
          value={amount}
          onChangeText={setAmount}
          keyboardType="numeric"
        />
      </View>

      {/* INPUT CONTAINER */}
      <View style={createStyles.inputContainer}>
        <Ionicons
          name="create-outline"
          size={22}
          color={COLORS.textLight}
          style={createStyles.inputIcon}
        />
        <TextInput
          style={createStyles.input}
          placeholder="Transaction Title"
          placeholderTextColor={COLORS.textLight}
          value={title}
          onChangeText={setTitle}
        />
      </View>

      {/* TITLE */}
      <Text style={createStyles.sectionTitle}>
        <Ionicons name="pricetag-outline" size={16} color={COLORS.text} />{" "}
        Category
      </Text>

      <View style={createStyles.categoryGrid}>
        {CATEGORIES.map((category) => (
          <TouchableOpacity
            key={category.id}
            style={[
              createStyles.categoryButton,
              selectedCategory === category.name &&
                createStyles.categoryButtonActive,
            ]}
            onPress={() => setSelectedCategory(category.name)}
          >
            <Ionicons
              name={category.icon}
              size={20}
              color={
                selectedCategory === category.name ? COLORS.white : COLORS.text
              }
              style={createStyles.categoryIcon}
            />
            <Text
              style={[
                createStyles.categoryButtonText,
                selectedCategory === category.name &&
                  createStyles.categoryButtonTextActive,
              ]}
            >
              {category.name}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>

      {isLoading && (
        <View style={createStyles.loadingContainer}>
          <ActivityIndicator size="large" color={COLORS.primary} />
        </View>
      )}
     </View>
  );
};

export default CreateScreen;
