import { createNativeStackNavigator } from '@react-navigation/native-stack'
import IotComponent from '../../page/IotComponent';
import LedComponent from '../../page/LedComponent';
import { colors } from '../../global/colors';

export default function StackNavigatorIot() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='IotComponent' >
      <Stack.Screen name='IotComponent' component={IotComponent} options={{
        headerShown: false
      }} />
      <Stack.Screen name='LedComponent' component={LedComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'LED',
        headerTintColor: colors.text,
      }} />
    </Stack.Navigator>
  )
}