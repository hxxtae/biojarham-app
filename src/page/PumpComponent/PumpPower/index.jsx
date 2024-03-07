import { Feather } from '@expo/vector-icons';
import { TouchableOpacity, View } from 'react-native';
import { useState } from 'react';

import { styles as S } from './styles';
import { colors } from '../../../global/colors';

export default function PumpPower() {
  console.log('PumpPower');
  const [power, setPower] = useState(true);

  const handlePowerState = () => {
    setPower((prev) => !prev);
  }

  return (
    <View style={S.topBtnBox}>
      <TouchableOpacity style={[S.circleBtn]}>
        <Feather name="bluetooth" size={24} color={colors.text} />
      </TouchableOpacity>
      <TouchableOpacity style={[S.circleBtn, S.powerBtn(power)]} onPress={handlePowerState}>
        <Feather name="power" size={24} color={power ? colors.green : colors.text} />
      </TouchableOpacity>
    </View>
  )
}