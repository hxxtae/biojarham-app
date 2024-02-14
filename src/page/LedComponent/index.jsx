import { ScrollView, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';

import { colors } from '../../global/colors';
import { styles as S } from './styles';
import LedTotal from './LedTotal';
import LedDetail from './LedDetail';
import { useState } from 'react';

export default function LedComponent() {
  const [power, setPower] = useState(true);

  const handlePowerState = () => {
    setPower((prev) => !prev);
  }

  return (
    <ScrollView style={S.container}>
      <View style={S.topBtnBox}>
        <TouchableOpacity style={[S.circleBtn]}>
          <Feather name="bluetooth" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={[S.circleBtn, S.powerBtn(power)]} onPress={handlePowerState}>
          <Feather name="power" size={24} color={power ? colors.green : colors.text} />
        </TouchableOpacity>
      </View>

      <LedTotal />
      <LedDetail />
    </ScrollView>
  )
}

