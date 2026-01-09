import React from 'react'
import { Stack } from 'expo-router'

const StackScreen = ({children}: {children: React.ReactNode}) => {
  return (
   <Stack>
      <Stack.Screen
        name="index"
        options={{
          headerShown: false,
        }}
      />
   </Stack>
  )
}

export default StackScreen