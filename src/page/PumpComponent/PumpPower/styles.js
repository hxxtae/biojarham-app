import { StyleSheet } from 'react-native';
import { colors } from '../../../global/colors';

export const styles = StyleSheet.create({
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
  powerBtn: (state) => ({
    backgroundColor: state ? colors.foreground : colors.first,
  })
})