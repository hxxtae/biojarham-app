import { Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { Entypo } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { colors } from '../../../global/colors';
import { styles as S } from './styles';

IotCard.propTypes = {
  title: PropTypes.string.isRequired,
  desc: PropTypes.string.isRequired,
}

export default function IotCard({ title, desc }) {
  const navigator = useNavigation();

  const onClickIot = (iot) => {
    navigator.navigate(iot);
  }
  return (
    <View style={S.card}>
      <View style={S.cardWrapper1}>
        <Text style={S.cardText}>{title}</Text>
        <Text style={S.cardContent}>{desc}</Text>
      </View>
      <TouchableOpacity style={S.cardWrapper2}>
        <Entypo name="chevron-right" size={24} color={colors.tertiary} onPress={() => onClickIot('Led')} />
      </TouchableOpacity>
    </View>
  )
}