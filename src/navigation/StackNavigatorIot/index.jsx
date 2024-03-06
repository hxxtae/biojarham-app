import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IotComponent from '../../page/IotComponent';
import LedComponent from '../../page/LedComponent';
import PumpComponent from '../../page/PumpComponent';
import { colors } from '../../global/colors';

export default function StackNavigatorIot() {
  const Stack = createNativeStackNavigator();

  return (
    <Stack.Navigator initialRouteName='Iot' >
      <Stack.Screen name='Iot' component={IotComponent} options={{
        headerShown: false
      }} />
      <Stack.Screen name='Led' component={LedComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'LED',
        headerTintColor: colors.text,
      }} />
      <Stack.Screen name='Pump' component={PumpComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'Water Pump',
        headerTintColor: colors.text,
      }} />
    </Stack.Navigator>
  )
}