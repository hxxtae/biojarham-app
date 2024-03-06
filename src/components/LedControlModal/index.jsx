import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

import { colors } from '../../global/colors';
import { styles as S } from './styles';

LedControlModal.propTypes = {
  kindName: PropTypes.string.isRequired,
  detailRGB: PropTypes.object.isRequired,
  getRgbText: PropTypes.func.isRequired,
  setRgbText: PropTypes.func.isRequired,
  onChangeRgbSwitch: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
}

export default function LedControlModal({ kindName, detailRGB, getRgbText, setRgbText, onChangeRgbSwitch, closeModal }) {
  const [rgbBtn, setRgbBtn] = useState('R'); // 'R' | 'G' | 'B'

  const handleRgbState = (value) => {
    value = Math.floor(value);
    setRgbText(rgbBtn, value);
  }

  const getRgbButtonState = (state) => {
    return detailRGB.switch && (rgbBtn === state);
  }

  const onClickRgbButton = (state) => {
    if (!detailRGB.switch) return;
    setRgbBtn(state);
  }

  return (
    <SafeAreaView>
      <View style={S.titleBox}>
        <Text style={S.title}>{kindName}</Text>
      </View>
      <ScrollView style={S.container}>
        <View style={S.wrapper}>
          <View style={S.ledWrapper}>
            <View style={S.ledBox}>
              <MaterialIcons name="lightbulb" size={24} color={detailRGB.switch ? `rgb(${getRgbText(',')})` : colors.background} />
            </View>
          </View>

          <View style={S.rgbTextBox}>
            <Text style={S.rgbText}>{getRgbText(' , ')}</Text>
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
                value={detailRGB.rgb[rgbBtn]}
                disabled={!detailRGB.switch}
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
              value={detailRGB.switch}
            />
          </View>

          <View style={S.closeWrapper}>
            <Pressable style={S.closeBox} onPress={closeModal}>
              <Ionicons name="close" size={24} color={colors.text} />
            </Pressable>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}