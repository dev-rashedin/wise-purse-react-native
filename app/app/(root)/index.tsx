import { useUser } from '@clerk/clerk-expo'
import { Text, View } from 'react-native'
import { useTransactions } from '@/hooks/useTransactions';
import { useEffect } from 'react';
import PageLoader from '@/components/PageLoader';
import { homeStyles } from '@/assets/styles/home.styles';

export default function Page() {
  const { user } = useUser();
  const {transactions, summary, loading, loadData, deleteTransaction} = useTransactions(user?.id || '');

    console.log("user id inside index.ts", user?.id);

  useEffect(() => {
   loadData();
  }, [loadData]);

  if (loading) {
    return <PageLoader/>
  }


  return (
    <View style={homeStyles.container}>
    
    </View>
  )
}