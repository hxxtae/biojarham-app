import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../global/colors';
import { styles as S } from './styles';
import LedTotal from './LedTotal';
import LedDetail from './LedDetail';

export default function LedComponent() {
  

  return (
    <ScrollView style={S.container}>
      <View style={S.topBtnBox}>
        <TouchableOpacity style={[S.circleBtn]}>
          <Feather name="bluetooth" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={[S.circleBtn]}>
          <Feather name="power" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      <LedTotal />
      <LedDetail />
    </ScrollView>
  )
}

