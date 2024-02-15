import { ScrollView } from 'react-native';

import { styles as S } from './styles';
import LedPower from './LedPower';
import LedTotal from './LedTotal';
import LedDetail from './LedDetail';

export default function LedComponent() {

  return (
    <ScrollView style={S.container}>
      <LedPower />
      <LedTotal />
      <LedDetail />
    </ScrollView>
  )
}

