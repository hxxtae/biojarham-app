import { StyleSheet } from 'react-native';
import { colors } from '../../global/colors';

export const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 24,
    paddingTop: 20,
    backgroundColor: colors.background,
  },

  pumpSection: {
    marginTop: 20,
  },
  pumpControlBox: {
    alignItems: 'center',
    paddingVertical: 30,
    borderRadius: 8,
    marginBottom: 15,
    backgroundColor: colors.first,
  },
  controlBar: (height) => ({
    position: "relative",
    alignItems: "center",
    width: 60,
    height: height,
    borderRadius: 100,
    backgroundColor: colors.background,
    overflow: "hidden",
  }),
  bar: {
    position: "absolute",
    bottom: 0,
    width: "100%",
    height: "100%",
    backgroundColor: colors.tertiary,
  },
  barText: {
    position: "absolute",
    top: 15,
    color: colors.text,
    fontSize: 15,
    fontWeight: "600",
    letterSpacing: 1.4,
    zIndex: 1,
  },
  barIcon: {
    position: "absolute",
    bottom: 15,
    color: colors.text,
    zIndex: 1,
  },

  pumpBtnBox: {
    
  },
  pumpWrapper: {
    flexDirection: "row",
    gap: 15,
    marginBottom: 15,
  },
  controlBtn: (state) => ({
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    paddingVertical: 25,
    borderRadius: 8,
    backgroundColor: state ? colors.tertiary : colors.first,
  }),
  btnText: {
    textAlign: "center",
    color: colors.text,
    fontWeight: "600",
    fontSize: 14,
    lineHeight: 25,
  },
});