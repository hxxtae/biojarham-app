import { Text, View } from 'react-native';
import { useRecoilState } from 'recoil';

import { styles as S } from './styles';
import LedDetailItem from './LedDetailItem';
import {
  ledStateOfDetail1,
  ledStateOfDetail2,
  ledStateOfDetail3,
  ledStateOfDetail4
} from '../../../global/atom';

export default function LedDetail() {
  console.log('Detail');
  const [detailRGB1, setDetailRGB1] = useRecoilState(ledStateOfDetail1);
  const [detailRGB2, setDetailRGB2] = useRecoilState(ledStateOfDetail2);
  const [detailRGB3, setDetailRGB3] = useRecoilState(ledStateOfDetail3);
  const [detailRGB4, setDetailRGB4] = useRecoilState(ledStateOfDetail4);

  return (
    <View style={S.rgbDetailSection}>
      <View style={S.titleBox}>
        <Text style={S.title}>RGB 상세 제어</Text>
      </View>

      <View style={S.rgbDetail}>
        <View style={S.rgbDetailWrapper}>
          <LedDetailItem key={1} kindName='LED 1' detailRGB={detailRGB1} setDetailRGB={setDetailRGB1} />
          <LedDetailItem key={2} kindName='LED 2' detailRGB={detailRGB2} setDetailRGB={setDetailRGB2} />
        </View>
        <View style={S.rgbDetailWrapper}>
          <LedDetailItem key={3} kindName='LED 3' detailRGB={detailRGB3} setDetailRGB={setDetailRGB3} />
          <LedDetailItem key={4} kindName='LED 4' detailRGB={detailRGB4} setDetailRGB={setDetailRGB4} />
        </View>
      </View>
    </View>
  )
}