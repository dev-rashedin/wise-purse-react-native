import { useCallback, useState } from "react";


export const useTransactions = (userId: string) => {
  const [transactions, setTransactions] = useState([]);
  const [loading, setLoading] = useState(true);

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
        `${process.env.API_URL}/transactions/${userId}`
      );
      const data = await response.json();
      setTransactions(data.transactions);
      setSummary(data.summary);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
}, [userId])

const fetchSummary = useCallback(
    async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.API_URL}/transactions/summary/${userId}`
      );
      const data = await response.json();
      setTransactions(data.transactions);
      setSummary(data.summary);
    } catch (error) {
      console.error("Error fetching transactions:", error);
    } finally {
      setLoading(false);
    }
}, [userId])

 const loadData = useCallback(async () => {
  if (!userId) return;
  
  try {
    await Promise.all([fetchTransactions(), fetchSummary()]);
  } catch (error) {
    console.error("Error loading data", error);
  }
 }, [userId, fetchTransactions, fetchSummary]);

  return {
    transactions,
    loading,
    summary,
    loadData,
  };
}