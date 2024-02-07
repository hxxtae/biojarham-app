import { ScrollView, StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { Entypo } from '@expo/vector-icons';

import { colors } from '../../global/colors';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';

export default function IotComponent() {
  const navigator = useNavigation();

  const onClickIot = (iot) => {
    navigator.navigate(iot);
  }

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Biojarham</Text>
      </View>
      <ScrollView>
        {/* NOTE: LED */}
        <View style={styles.card}>
          <View style={styles.cardWrapper1}>
            <Text style={styles.cardText}>LED</Text>
            <Text style={styles.cardContent}>RGB 3가지 색을 제어하여 미세조류 실험하기</Text>
          </View>
          <TouchableOpacity style={styles.cardWrapper2}>
            <Entypo name="chevron-right" size={24} color={colors.tertiary} onPress={() => onClickIot('LedComponent')} />
          </TouchableOpacity>
        </View>

        {/* NOTE: Water Pump */}
        <View style={styles.card}>
          <View style={styles.cardWrapper1}>
            <Text style={styles.cardText}>Water Pump</Text>
            <Text style={styles.cardContent}>Water 펌프를 제어하여 미세조류 실험하기</Text>
          </View>
          <TouchableOpacity style={styles.cardWrapper2}>
            <Entypo name="chevron-right" size={24} color={colors.tertiary} />
          </TouchableOpacity>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
    backgroundColor: `${colors.background}`,
  },
  titleBox: {
    backgroundColor: colors.background,
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
  
  
})