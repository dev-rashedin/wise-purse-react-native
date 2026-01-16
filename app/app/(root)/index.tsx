import { useUser } from '@clerk/clerk-expo'
import { Image, Text, TouchableOpacity, View } from 'react-native'
import { useTransactions } from '@/hooks/useTransactions';
import { useEffect } from 'react';
import PageLoader from '@/components/PageLoader';
import { homeStyles } from '@/assets/styles/home.styles';
import logo from '@/assets/images/logo.png';
import { Ionicons } from '@expo/vector-icons';
import { SignOutButton } from '@/components/SignOutButton';
import { useRouter } from 'expo-router';
import { BalanceCard } from '@/components/BalanceCard';

export default function Page() {
  const { user } = useUser();
  const router = useRouter();

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
      <View style={homeStyles.content}>
        {/* HEADER */}
        <View style={homeStyles.header}>
          {/* HEADER LEFT */}
          <View style={homeStyles.headerLeft}>
            <Image
            source={logo}
            style={homeStyles.headerLogo}
            resizeMode='contain'
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
            <TouchableOpacity style={homeStyles.addButton} onPress={() => router.push("/create")}>
              <Ionicons name="add" size={20} color="#FFF" />
              <Text style={homeStyles.addButtonText}>Add</Text>
            </TouchableOpacity>
            <SignOutButton />
          </View>

        </View>

{/* BALANCE CARD */}
<BalanceCard summary={summary} />

      </View>
    </View>
  )
}