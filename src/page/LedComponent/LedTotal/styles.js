import { StyleSheet } from 'react-native';
import { colors } from '../../../global/colors';

export const styles = StyleSheet.create({
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
  },
  rgbOnOffBox: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 5,
    borderRadius: 8,
    marginVertical: 15,
    backgroundColor: colors.first,
  },

})