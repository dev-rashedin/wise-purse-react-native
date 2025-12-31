
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons';
const _layout = () => {
  return (
    <Tabs screenOptions={{
      tabBarActiveTintColor: "#4422cc",
      tabBarInactiveTintColor: "#cccfff",
      tabBarStyle: {
        backgroundColor: "#000000",
        borderTopWidth: 0,
        elevation: 0,
        shadowOpacity: 0,
        height: 90,
        paddingBottom: 30,
        paddingTop: 15
      }
    }}>
      <Tabs.Screen
        name='index'
        options={{
          title: 'Home',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="home" size={size} color={color} />
          )
        }}
      />
      <Tabs.Screen
        name="settings"
        options={{
          title: 'Settings',
          tabBarIcon: ({ color, size }) => (
            <Ionicons name="settings" size={size} color={color} />
          )
      }}/>
    </Tabs>
  )
}
export default _layout