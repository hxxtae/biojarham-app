import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: `${colors.background}`,
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
  card: {
    flexDirection: 'row',
    width: '100%',
    height: 150,
    padding: 20,
    borderRadius: 8,
    marginBottom: 20,
    backgroundColor: `${colors.first}`,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 3,
    },
    shadowOpacity: 0.27,
    shadowRadius: 4.65,
    elevation: 6,
  },
  cardWrapper1: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    gap: 10,
  },
  cardWrapper2: {
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  cardText: {
    fontSize: 30,
    fontWeight: '600',
    color: `${colors.text}`,
  },
  cardContent: {
    fontSize: 14,
    color: `${colors.tertiary}`,
  },
});