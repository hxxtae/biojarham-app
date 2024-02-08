import { StatusBar } from 'expo-status-bar';
import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { styles as S } from './styles';

export default function HomeComponent() {
  return (
    <SafeAreaView style={S.container}>
      <ScrollView stickyHeaderIndices={[0]}>
        <View style={S.titleBox}>
          <Text style={S.title}>BIOJARHAM</Text>
        </View>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}
