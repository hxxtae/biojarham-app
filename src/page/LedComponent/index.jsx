import { Pressable, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Feather } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';
import { colors } from '../../global/colors';
import Slider from '@react-native-community/slider';

export default function LedComponent() {
  

  return (
    <ScrollView style={styles.container}>
      <View style={styles.topBtnBox}>
        <TouchableOpacity style={[styles.circleBtn]}>
          <Feather name="bluetooth" size={24} color={colors.text} />
        </TouchableOpacity>
        <TouchableOpacity style={[styles.circleBtn]}>
          <Feather name="power" size={24} color={colors.text} />
        </TouchableOpacity>
      </View>

      {/* RGB 전체 제어 */}
      <View style={styles.rgbTotalSection}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>RGB 전체 제어</Text>
        </View>

        <View style={styles.rgbTextBox}>
          <Text style={styles.rgbText}>{`250 . 152 . 178`}</Text>
        </View>

        <View style={styles.rgbSliderBox}>
          <View style={styles.rgbSliderWrapper}>
            <Text style={styles.rgbSliderText}>0</Text>
            <Slider
              style={styles.rgbSlider}
              minimumValue={0}
              maximumValue={255}
              minimumTrackTintColor={colors.text}
              maximumTrackTintColor={colors.background}
              thumbTintColor={colors.text}
            />
            <Text style={styles.rgbSliderText}>255</Text>
          </View>
        </View>

        <View style={styles.rgbBtnBox}>
          <Pressable style={styles.rgbBtn}>
            <View style={styles.btnWrapper}>
              <MaterialIcons name="lightbulb" size={24} color={colors.red} />
              <Text style={styles.rgbBtnText}>RED</Text>
            </View>
          </Pressable>
          <Pressable style={styles.rgbBtn}>
          <View style={styles.btnWrapper}>
            <MaterialIcons name="lightbulb" size={24} color={colors.green} />
            <Text style={styles.rgbBtnText}>GREEN</Text>
          </View>
          </Pressable>
          <Pressable style={styles.rgbBtn}>
            <View style={styles.btnWrapper}>
              <MaterialIcons name="lightbulb" size={24} color={colors.blue} />
              <Text style={styles.rgbBtnText}>BLUE</Text>
            </View>
          </Pressable>
        </View>
      </View>

      {/* RGB 상세 제어 */}
      <View style={styles.rgbDetailSection}>
        <View style={styles.titleBox}>
          <Text style={styles.title}>RGB 상세 제어</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: colors.background,
  },
  // 1. Top Buttons
  topBtnBox: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
    gap: 20,
  },
  circleBtn: {
    padding: 10,
    borderRadius: 100,
    backgroundColor: colors.first,
  },
  
  // 2. Total RGB Control
  rgbTotalSection: {
    marginBottom: 20,
  },
  titleBox: {
    marginBottom: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.secondary
  },
  rgbTextBox: {
    width: '100%',
    height: 100,
    marginBottom: 15,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.first,
    borderRadius: 8,
  },
  rgbText: {
    fontSize: 25,
    fontWeight: '500',
    color: colors.text,
  },
  rgbSliderBox: {
    backgroundColor: colors.first,
    borderRadius: 8,
    marginBottom: 15,
  },
  rgbSliderWrapper: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
    gap: 20,
  },
  rgbSliderText: {
    fontSize: 14,
    fontWeight: '500',
    color: colors.secondary,
  },
  rgbSlider: {
    flex: 1,
    height: 50,
    
  },
  rgbBtnBox: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    gap: 15,
    
  },
  rgbBtn: {
    flex: 1,
    height: 100,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: colors.first,
    borderRadius: 8,
  },
  btnWrapper: {
    alignItems: 'center',
    gap: 10,
  },
  rgbBtnText: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.secondary
  }
})