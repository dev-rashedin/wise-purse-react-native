import { useUser } from "@clerk/clerk-expo";
import {
  Alert,
  FlatList,
  Image,
  RefreshControl,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { useTransactions } from "@/hooks/useTransactions";
import { useEffect, useState } from "react";
import PageLoader from "@/components/PageLoader";
import { homeStyles } from "@/assets/styles/home.styles";
import logo from "@/assets/images/logo.png";
import { Ionicons } from "@expo/vector-icons";
import { SignOutButton } from "@/components/SignOutButton";
import { useRouter } from "expo-router";
import { BalanceCard } from "@/components/BalanceCard";
import { TransactionItem } from "@/components/TransactionItem";
import NoTransactionsFound from "@/components/NoTransactionFound";

export default function Page() {
  const { user } = useUser();
  const router = useRouter();

  const { transactions, summary, loading, loadData, deleteTransaction } =
    useTransactions(user?.id || "");

  const [refreshing, setRefreshing] = useState(false);

  useEffect(() => {
    loadData();
  }, [loadData]);

  const handleDelete = (id: string) => {
    Alert.alert(
      "Delete Transaction",
      "Are you sure you want to delete this transaction?",
      [
        { text: "Cancel", style: "cancel" },
        {
          text: "Delete",
          style: "destructive",
          onPress: () => deleteTransaction(id),
        },
      ]
    );
  };

   const onRefresh = async () => {
    setRefreshing(true);
    await loadData();
    setRefreshing(false);
  };

  if (loading && !refreshing) return <PageLoader />;

  return (
    <View style={homeStyles.container}>
      <View style={homeStyles.content}>
        {/* HEADER */}
        <View style={homeStyles.header}>
          {/* HEADER LEFT */}
          <View style={homeStyles.headerLeft}>
            <Image
              source={logo}
              style={homeStyles.headerLogo}
              resizeMode="contain"
            />
            <View style={homeStyles.welcomeContainer}>
              <Text style={homeStyles.welcomeText}>Welcome,</Text>
              <Text style={homeStyles.usernameText}>
                {user?.emailAddresses[0]?.emailAddress.split("@")[0]}
              </Text>
            </View>
          </View>
          {/* HEADER RIGHT */}
          <View style={homeStyles.headerRight}>
            <TouchableOpacity
              style={homeStyles.addButton}
              onPress={() => router.push("/create")}
            >
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={homeStyles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>
        </View>

        {/* BALANCE CARD */}
        <BalanceCard summary={summary} />
      </View>

      <FlatList
        style={homeStyles.transactionsList}
        contentContainerStyle={homeStyles.transactionsListContent}
        data={transactions}
        renderItem={({ item }) => (
          <TransactionItem item={item} onDelete={handleDelete} />
        )}
        ListEmptyComponent={<NoTransactionsFound />}
        showsVerticalScrollIndicator={false}
        refreshControl={<RefreshControl refreshing={refreshing} onRefresh={onRefresh} />}
      />
    </View>
  );
}
