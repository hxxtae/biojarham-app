import { Pressable, ScrollView, Switch, Text, View } from 'react-native';
import { MaterialIcons } from '@expo/vector-icons';
import { SafeAreaView } from 'react-native-safe-area-context';
import Slider from '@react-native-community/slider';
import PropTypes from 'prop-types';

import { colors } from '../../global/colors';
import { styles as S } from './styles';

LedDetailComponent.propTypes = {
  kindName: PropTypes.string.isRequired,
  closeModal: PropTypes.func,
}

export default function LedDetailComponent({ kindName, closeModal }) {
  console.log(kindName)
  console.log(closeModal)

  return (
    <SafeAreaView>
      <View style={S.titleBox}>
        <Text style={S.title}>{kindName}</Text>
      </View>
      <ScrollView style={S.container}>
        <View style={S.wrapper}>
          <View style={S.ledWrapper}>
            <View style={S.ledBox}>
              <MaterialIcons name="lightbulb" size={24} color={colors.text} />
            </View>
          </View>

          <View style={S.rgbTextBox}>
            <Text style={S.rgbText}>{`250 . 152 . 178`}</Text>
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
              />
              <Text style={S.rgbSliderText}>255</Text>
            </View>
          </View>
      
          <View style={S.rgbBtnBox}>
            <Pressable style={S.rgbBtn}>
              <View style={S.btnWrapper}>
                <MaterialIcons name="lightbulb" size={24} color={colors.red} />
                <Text style={S.rgbBtnText}>RED</Text>
              </View>
            </Pressable>
            <Pressable style={S.rgbBtn}>
            <View style={S.btnWrapper}>
              <MaterialIcons name="lightbulb" size={24} color={colors.green} />
              <Text style={S.rgbBtnText}>GREEN</Text>
            </View>
            </Pressable>
            <Pressable style={S.rgbBtn}>
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
            />
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}