import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: colors.background,
  },
  wrapper: {
    marginBottom: 20,
  },
  ledWrapper: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 30,
    borderRadius: 8,
    marginBottom: 15,
  },
  ledBox: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 80,
    height: 80,
    borderRadius: 100,
    backgroundColor: colors.background,
    elevation: 6,
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
});