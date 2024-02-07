import { NavigationContainer } from '@react-navigation/native';
import TabNavigator from '../TabNavigator';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

export default function MainNavigator() {
  const Stack = createNativeStackNavigator();

  return (
    <NavigationContainer independent={true}>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name="TabNavigator" component={TabNavigator} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}