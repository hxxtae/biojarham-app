import { ScrollView, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import { StatusBar } from 'expo-status-bar';

import { colors } from '../../global/colors';
import { styles as S } from './styles';

export default function IotComponent() {
  const navigator = useNavigation();

  const onClickIot = (iot) => {
    navigator.navigate(iot);
  }

  return (
    <SafeAreaView style={S.container}>
      <ScrollView stickyHeaderIndices={[0]} showsVerticalScrollIndicator={false}>
        <View style={S.titleBox}>
          <Text style={S.title}>BIOJARHAM</Text>
        </View>
        {/* NOTE: LED */}
        <View style={S.card}>
          <View style={S.cardWrapper1}>
            <Text style={S.cardText}>LED</Text>
            <Text style={S.cardContent}>RGB를 제어하여 미세조류 실험하기.</Text>
          </View>
          <TouchableOpacity style={S.cardWrapper2}>
            <Entypo name="chevron-right" size={24} color={colors.tertiary} onPress={() => onClickIot('Led')} />
          </TouchableOpacity>
        </View>

        {/* NOTE: Water Pump */}
        <View style={S.card}>
          <View style={S.cardWrapper1}>
            <Text style={S.cardText}>Water Pump</Text>
            <Text style={S.cardContent}>Water 펌프를 제어하여 미세조류 실험하기.</Text>
          </View>
          <TouchableOpacity style={S.cardWrapper2}>
            <Entypo name="chevron-right" size={24} color={colors.tertiary} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}
