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
})