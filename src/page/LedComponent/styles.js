import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
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

  // 3. Detail RGB Control
  rgbDetailSection: {
    marginBottom: 100
  },
  rgbDetail: {
    
  },
  rgbDetailTop: {
    flexDirection: 'row',
    gap: 15,
    marginBottom: 15,
  },
  rgbDetailBox: {
    flex: 1,
    padding: 10,
    borderRadius: 8,
    backgroundColor: colors.first,
  },
  wrapperTop: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  rgbIcon: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60,
    borderRadius: 100,
    backgroundColor: colors.background,
    
    shadowColor: "#000",
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 4,
  },
  rgbNameBox: {
    flex: 1,
    alignItems: 'center',
  },
  rgbName: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.secondary
  },

  rgbDetailBottom: {
    flexDirection: 'row',
    gap: 15,
  },
  wrapperBottom: {
    gap: 10,
  },
  rgbValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.text,
  },
  rgbBtns: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
})