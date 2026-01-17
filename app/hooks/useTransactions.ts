import api_url from "@/constants/api";
import { useCallback, useState } from "react";
import { Alert } from "react-native";


export const useTransactions = (userId: string) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(false);


  const [summary, setSummary] = useState({ 
    balance: 0,
    income: 0,
    expense: 0
  });

  const fetchTransactions = useCallback(
    async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${api_url}/transactions/${userId}`
      );
      const data = await response.json();
      setTransactions(data.data);
      
    } catch (error) {
      console.error("Error fetching transactions:", error);
    }
}, [userId])

const fetchSummary = useCallback(
    async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${api_url}/transactions/summary/${userId}`
      );
      const data = await response.json();
      setSummary(data.data);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } 
}, [userId])

 const loadData = useCallback(async () => {
  if (!userId) return;
  
  try {
    await Promise.all([fetchTransactions(), fetchSummary()]);
  } catch (error) {
    console.error("Error loading data", error);
  } finally {
    setLoading(false);
  }
 }, [userId, fetchTransactions, fetchSummary]);

  const deleteTransaction = async (userId: string) => {
    try {
      const response = await fetch(
      `${api_url}/transactions/${userId}`, 
      { method: "DELETE" }
    );

      if (!response.ok) throw new Error("Failed to delete transaction");

      // Refresh data after deletion
      loadData();
      Alert.alert("Success", "Transaction deleted successfully");
    } catch (error: any) {
      console.error("Error deleting transaction:", error);
      Alert.alert("Error", error.message);
    }
  };

  return { transactions, summary, loading, loadData, deleteTransaction };
}