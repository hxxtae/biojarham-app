import { StyleSheet } from 'react-native';
import { colors } from '../../../../global/colors';

export const styles = StyleSheet.create({
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
});