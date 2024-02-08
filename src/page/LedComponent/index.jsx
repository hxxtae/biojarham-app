import { Pressable, ScrollView, Switch, Text, TouchableOpacity, View } from 'react-native';
import { Feather, MaterialIcons ,Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';
import Slider from '@react-native-community/slider';

import { colors } from '../../global/colors';
import { styles as S } from './styles';

export default function LedComponent() {
  
  const navigation = useNavigation();

  const onClickDetailLed = (name) => {
    navigation.navigate(name);
  }

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

      {/* RGB 전체 제어 */}
      <View style={S.rgbTotalSection}>
        <View style={S.titleBox}>
          <Text style={S.title}>RGB 전체 제어</Text>
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

      {/* RGB 상세 제어 */}
      <View style={S.rgbDetailSection}>
        <View style={S.titleBox}>
          <Text style={S.title}>RGB 상세 제어</Text>
        </View>

        <View style={S.rgbDetail}>
          <View style={S.rgbDetailTop}>
            <View style={S.rgbDetailBox}>
              <View style={S.wrapperTop}>
                <View style={S.rgbIcon}>
                  <MaterialIcons name="lightbulb" size={24} color={colors.text} />
                </View>
                <View style={S.rgbNameBox}>
                  <Text style={S.rgbName}>LED 1</Text>
                </View>
              </View>
    
              <View style={S.wrapperBottom}>
                <Text style={S.rgbValue}>152.132.89</Text>
                <View style={S.rgbBtns}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={colors.text}
                    ios_backgroundColor="#3e3e3e"
                  />
                  <TouchableOpacity onPress={() => onClickDetailLed('Led1')}>
                    <Ionicons name="settings-outline" size={24} style={S.ledIcon} color={colors.secondary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={S.rgbDetailBox}>
              <View style={S.wrapperTop}>
                <View style={S.rgbIcon}>
                  <MaterialIcons name="lightbulb" size={24} color={colors.text} />
                </View>
                <View style={S.rgbNameBox}>
                  <Text style={S.rgbName}>LED 2</Text>
                </View>
              </View>
    
              <View style={S.wrapperBottom}>
                <Text style={S.rgbValue}>152.132.89</Text>
                <View style={S.rgbBtns}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={colors.text}
                    ios_backgroundColor="#3e3e3e"
                  />
                  <TouchableOpacity onPress={() => onClickDetailLed('Led2')}>
                    <Ionicons name="settings-outline" size={24} style={S.ledIcon} color={colors.secondary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>

          <View style={S.rgbDetailBottom}>
            <View style={S.rgbDetailBox}>
              <View style={S.wrapperTop}>
                <View style={S.rgbIcon}>
                  <MaterialIcons name="lightbulb" size={24} color={colors.text} />
                </View>
                <View style={S.rgbNameBox}>
                  <Text style={S.rgbName}>LED 3</Text>
                </View>
              </View>
    
              <View style={S.wrapperBottom}>
                <Text style={S.rgbValue}>152.132.89</Text>
                <View style={S.rgbBtns}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={colors.text}
                    ios_backgroundColor="#3e3e3e"
                  />
                  <TouchableOpacity onPress={() => onClickDetailLed('Led3')}>
                    <Ionicons name="settings-outline" size={24} style={S.ledIcon} color={colors.secondary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>

            <View style={S.rgbDetailBox}>
              <View style={S.wrapperTop}>
                <View style={S.rgbIcon}>
                  <MaterialIcons name="lightbulb" size={24} color={colors.text} />
                </View>
                <View style={S.rgbNameBox}>
                  <Text style={S.rgbName}>LED 4</Text>
                </View>
              </View>
    
              <View style={S.wrapperBottom}>
                <Text style={S.rgbValue}>152.132.89</Text>
                <View style={S.rgbBtns}>
                  <Switch
                    trackColor={{false: '#767577', true: '#81b0ff'}}
                    thumbColor={colors.text}
                    ios_backgroundColor="#3e3e3e"
                  />
                  <TouchableOpacity onPress={() => onClickDetailLed('Led4')}>
                    <Ionicons name="settings-outline" size={24} style={S.ledIcon} color={colors.secondary} />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

