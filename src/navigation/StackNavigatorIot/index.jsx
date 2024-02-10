import { createNativeStackNavigator } from '@react-navigation/native-stack'

import IotComponent from '../../page/IotComponent';
import LedComponent from '../../page/LedComponent';
import LedDetailComponent from '../../page/LedDetailComponent';
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
      <Stack.Screen name='Led1' component={LedDetailComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'LED 1',
        headerTintColor: colors.text,
      }} />
      <Stack.Screen name='Led2' component={LedDetailComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'LED 2',
        headerTintColor: colors.text,
      }} />
      <Stack.Screen name='Led3' component={LedDetailComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'LED 3',
        headerTintColor: colors.text,
      }} />
      <Stack.Screen name='Led4' component={LedDetailComponent} options={{
        headerShown: true,
        headerStyle: { backgroundColor: colors.background },
        headerTitleAlign: 'center',
        headerTitle: 'LED 4',
        headerTintColor: colors.text,
      }} />
    </Stack.Navigator>
  )
}