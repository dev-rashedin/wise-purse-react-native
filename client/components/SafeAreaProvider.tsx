
import { COLORS } from '../constants/colors'
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context'

const SafeAreaContainer = ({children} : {children: React.ReactNode}) => {
  return (
    <SafeAreaProvider>
      <SafeAreaView style={{flex: 1, backgroundColor: COLORS.background}}>{children}</SafeAreaView>
    </SafeAreaProvider>
  )
}
export default SafeAreaContainer