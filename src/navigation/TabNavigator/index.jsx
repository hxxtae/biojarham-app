import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Entypo, Feather } from '@expo/vector-icons';
import { colors } from '../../global/colors';
import StackNavigatorIot from '../StackNavigatorIot';
import HomeComponent from '../../page/homeComponent';

export default function TabNavigator() {
  const Tab = createBottomTabNavigator();

  return (
    <Tab.Navigator screenOptions={{
      headerShown: false,
      tabBarActiveTintColor: colors.text,
      tabBarActiveBackgroundColor: colors.background,
      tabBarInactiveBackgroundColor: colors.background,
    }}>
      <Tab.Screen
        name='HomeTab'
        component={HomeComponent}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Feather name="home" size={24} color={focused ? colors.text : colors.secondary} />
          ),
        }}
      />

      <Tab.Screen
        name='IotTab'
        component={StackNavigatorIot}
        options={{
          tabBarShowLabel: false,
          tabBarIcon: ({ focused }) => (
            <Entypo name="list" size={24} color={focused ? colors.text : colors.secondary} />
          ),
        }}
      />
    </Tab.Navigator>
  )
}