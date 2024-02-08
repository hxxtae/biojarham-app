import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
  },
  titleBox: {
    width: '100%',
    backgroundColor: colors.background,
    paddingVertical: 10,
    marginVertical: 20,
  },
  title: {
    fontSize: 20,
    fontWeight: '600',
    color: colors.text
  },
})