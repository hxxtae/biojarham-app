import { Pressable, Switch, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { useRecoilState } from 'recoil';
import { useState } from 'react';
import { produce } from 'immer';
import Slider from '@react-native-community/slider';

import { colors } from '../../../global/colors';
import { ledStateOfTotal } from '../../../global/atom';
import { styles as S } from './styles';

export default function LedTotal() {
  const [totalRGB, setTotalRGB] = useRecoilState(ledStateOfTotal);
  const [rgbBtn, setRgbBtn] = useState('R'); // 'R' | 'G' | 'B'
  console.log('Total');

  // NOTE: RGB 값 반환
  const getRgbText = (str) => {
    return Object.keys(totalRGB.rgb)
      .map(color => totalRGB.rgb[color])
      .join(str);
  }

  // NOTE: RGB 값 변경
  const setRgbText = (kind, val) => {
    setTotalRGB((prev) => produce(prev, (draft) => {
      draft.rgb[kind] = val;
      return draft;
    }));
  }

  // NOTE: RGB 버튼 선택 상태
  const getRgbButtonState = (state) => {
    return totalRGB.switch && (rgbBtn === state);
  }

  // NOTE(EventHandler): RGB 값 제어
  const handleRgbState = (value) => {
    value = Math.floor(value);
    setRgbText(rgbBtn, value);
  }

  // NOTE(EventHandler): On/Off 제어
  const onClickRgbButton = (state) => {
    if (!totalRGB.switch) return;
    setRgbBtn(state);
  }

  const onChangeRgbSwitch = () => {
    setTotalRGB((prev) => produce(prev, (draft) => {
      draft.switch = !draft.switch
      return draft;
    }));
  }

  return (
    <View style={S.rgbTotalSection}>
      <View style={S.titleBox}>
        <Text style={S.title}>RGB 전체 제어</Text>
      </View>

      <View style={S.rgbTextBox}>
        <Text style={S.rgbText}>{getRgbText()}</Text>
      </View>

      <View style={S.rgbSliderBox}>
        <View style={S.rgbSliderWrapper}>
          <Text style={S.rgbSliderText}>0</Text>
          <Slider
            style={S.rgbSlider}
            minimumValue={0}
            maximumValue={255}
            minimumTrackTintColor={colors.text}
            maximumTrackTintColor={colors.background}
            thumbTintColor={colors.text}
            onValueChange={handleRgbState}
            value={totalRGB.rgb[rgbBtn]}
            disabled={!totalRGB.switch}
          />
          <Text style={S.rgbSliderText}>255</Text>
        </View>
      </View>

      <View style={S.rgbBtnBox}>
        <Pressable style={S.rgbBtn(getRgbButtonState('R'))} onPress={() => onClickRgbButton('R')}>
          <View style={S.btnWrapper}>
            <MaterialIcons name="lightbulb" size={24} color={colors.red} />
            <Text style={S.rgbBtnText}>RED</Text>
          </View>
        </Pressable>
        <Pressable style={S.rgbBtn(getRgbButtonState('G'))} onPress={() => onClickRgbButton('G')}>
        <View style={S.btnWrapper}>
          <MaterialIcons name="lightbulb" size={24} color={colors.green} />
          <Text style={S.rgbBtnText}>GREEN</Text>
        </View>
        </Pressable>
        <Pressable style={S.rgbBtn(getRgbButtonState('B'))} onPress={() => onClickRgbButton('B')}>
          <View style={S.btnWrapper}>
            <MaterialIcons name="lightbulb" size={24} color={colors.blue} />
            <Text style={S.rgbBtnText}>BLUE</Text>
          </View>
        </Pressable>
      </View>

      <View style={S.rgbOnOffBox}>
        <Switch
          trackColor={{false: '#767577', true: colors.green}}
          thumbColor={colors.text}
          ios_backgroundColor="#3e3e3e"
          onValueChange={onChangeRgbSwitch}
          value={totalRGB.switch}
        />
      </View>
    </View>
  )
}