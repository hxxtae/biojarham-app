import { Text, View } from 'react-native';

import { styles as S } from './styles';
import LedDetailItem from './LedDetailItem';

export default function LedDetail() {

  return (
    <View style={S.rgbDetailSection}>
      <View style={S.titleBox}>
        <Text style={S.title}>RGB 상세 제어</Text>
      </View>

      <View style={S.rgbDetail}>
        <View style={S.rgbDetailWrapper}>
          <LedDetailItem key={1} kindName='LED 1' />
          <LedDetailItem key={2} kindName='LED 2' />
        </View>
        <View style={S.rgbDetailWrapper}>
          <LedDetailItem key={3} kindName='LED 3' />
          <LedDetailItem key={4} kindName='LED 4' />
        </View>
      </View>
    </View>
  )
}