import { ScrollView, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';

import { styles as S } from './styles';
import IotCard from './IotCard';

export default function IotComponent() {

  return (
    <SafeAreaView style={S.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={S.titleBox}>
          <Text style={S.title}>BIOJARHAM</Text>
        </View>
        <IotCard title='LED' name='Led' desc='RGB를 제어하여 미세조류 실험하기.' />
        <IotCard title='Water Pump' name='Pump' desc='Water 펌프를 제어하여 미세조류 실험하기.' />
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}
