import { StatusBar } from 'expo-status-bar';
import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { colors } from '../../global/colors';

export default function HomeComponent() {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.titleBox}>
        <Text style={styles.title}>Biojarham</Text>
      </View>
      <ScrollView>
        <View>
          <Text>Home</Text>
        </View>
      </ScrollView>
      <StatusBar style='light'/>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.background,
    paddingHorizontal: 24,
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
})