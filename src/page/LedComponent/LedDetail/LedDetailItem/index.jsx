import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import PropTypes from 'prop-types';

import { colors } from '../../../../global/colors';
import { styles as S } from './styles';
import { useState } from 'react';
import BottomSheet from '../../../../components/BottomSheet';
import LedDetailComponent from '../../../LedDetailComponent';

LedDetailItem.propTypes = {
  kindName: PropTypes.string.isRequired,
}

export default function LedDetailItem({ kindName }) {
  const [modalState, setModalState] = useState(false);

  const LedDetailModalProps = {
    modalVisible: modalState,
    setModalVisible: setModalState,
    height: '100%'
  };

  const handleModalState = (state) => {
    setModalState(state);
  }

  return (
    <>
      <View style={S.rgbDetailBox}>
        <View style={S.wrapperTop}>
          <View style={S.rgbIcon}>
            <MaterialIcons name="lightbulb" size={24} color={colors.text} />
          </View>
          <View style={S.rgbNameBox}>
            <Text style={S.rgbName}>{kindName}</Text>
          </View>
        </View>

        <View style={S.wrapperBottom}>
          <Text style={S.rgbValue}>152.132.89</Text>
          <View style={S.rgbBtns}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={colors.text}
              ios_backgroundColor="#3e3e3e"
            />
            <TouchableOpacity onPress={() => handleModalState(true)}>
              <Ionicons name="settings-outline" size={24} style={S.ledIcon} color={colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <BottomSheet {...LedDetailModalProps}>
        <LedDetailComponent kindName={kindName} />
      </BottomSheet>
    </>
  )
}