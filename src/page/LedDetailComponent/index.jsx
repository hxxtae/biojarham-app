import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { MaterialIcons, Ionicons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

import { colors } from '../../global/colors';
import { styles as S } from './styles';
import { useState } from 'react';
import { produce } from 'immer';

LedDetailComponent.propTypes = {
  kindName: PropTypes.string.isRequired,
  rgb: PropTypes.object.isRequired,
  getRgbText: PropTypes.func.isRequired,
  setRgbText: PropTypes.func.isRequired,
  getRgbSwitch: PropTypes.bool.isRequired,
  setRgbSwitch: PropTypes.func.isRequired,
  closeModal: PropTypes.func,
}

export default function LedDetailComponent({ kindName, rgb, getRgbText, setRgbText, getRgbSwitch, setRgbSwitch, closeModal }) {
  // console.log(kindName)
  const [rgbClone, setRgbClone] = useState({...rgb});
  const [rgbState, setRgbState] = useState(rgb.R ?? 0);
  const [rgbBtn, setRgbBtn] = useState('R'); // 'R' | 'G' | 'B'

  const handleRgbState = (value) => {
    value = Math.floor(value);
    setRgbState(value);
    setRgbClone((prev) => produce(prev, (draft) => {
      draft[rgbBtn] = value;
      return draft;
    }));
    setRgbText(rgbBtn, value);
  }

  const getRgbButtonState = (state) => {
    return getRgbSwitch && (rgbBtn === state);
  }

  const onClickRgbButton = (state) => {
    if (!getRgbSwitch) return;
    setRgbBtn(() => {
      setRgbState(rgbClone[state]);
      return state;
    });
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
              <MaterialIcons name="lightbulb" size={24} color={getRgbSwitch ? `rgb(${getRgbText(',')})` : colors.background} />
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
                value={rgbState}
                disabled={!getRgbSwitch}
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
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={colors.text}
              ios_backgroundColor="#3e3e3e"
              onValueChange={setRgbSwitch}
              value={getRgbSwitch}
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