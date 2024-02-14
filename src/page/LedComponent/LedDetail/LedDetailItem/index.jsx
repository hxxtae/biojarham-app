import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { useCallback, useState } from 'react';
import { produce } from 'immer';
import PropTypes from 'prop-types';

import { colors } from '../../../../global/colors';
import { styles as S } from './styles';
import BottomSheet from '../../../../components/BottomSheet';
import LedDetailComponent from '../../../LedDetailComponent';

LedDetailItem.propTypes = {
  kindName: PropTypes.string.isRequired,
}

export default function LedDetailItem({ kindName }) {
  console.log('detail: ' + kindName)
  const [modalState, setModalState] = useState(false);
  const [rgb, setRgb] = useState({ R: 0, G: 0, B: 0 });
  const [rgbSwitch, setRgbSwitch] = useState(false);

  const LedDetailModalProps = {
    modalVisible: modalState,
    setModalVisible: setModalState,
    height: '100%'
  };

  const handleModalState = (state) => {
    setModalState(state);
  }

  const getRgbText = useCallback((str) => {
    return Object.keys(rgb)
      .map(color => rgb[color])
      .join(str);
  }, [rgb])

  const setRgbText = useCallback((kind, val) => {
    setRgb((prev) => produce(prev, (draft) => {
      draft[kind] = val;
      return draft;
    }));
  }, []);

  const onChangeRgbSwitch = () => {
    setRgbSwitch((prev) => !prev);
  }

  return (
    <>
      <View style={S.rgbDetailBox(rgbSwitch)}>
        <View style={S.wrapperTop}>
          <View style={S.rgbIcon}>
            <MaterialIcons name="lightbulb" size={24} color={rgbSwitch ? `rgb(${getRgbText(',')})` : colors.background} />
          </View>
          <View style={S.rgbNameBox}>
            <Text style={S.rgbName}>{kindName}</Text>
          </View>
        </View>

        <View style={S.wrapperBottom}>
          <Text style={S.rgbValue}>{ getRgbText(',') }</Text>
          <View style={S.rgbBtns}>
            <Switch
              trackColor={{false: '#767577', true: '#81b0ff'}}
              thumbColor={colors.text}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChangeRgbSwitch}
              value={rgbSwitch}
            />
            <TouchableOpacity onPress={() => handleModalState(true)}>
              <Ionicons name="settings-outline" size={24} style={S.ledIcon} color={colors.secondary} />
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <BottomSheet {...LedDetailModalProps}>
        <LedDetailComponent
          kindName={kindName}
          rgb={rgb}
          getRgbText={getRgbText}
          setRgbText={setRgbText}
          getRgbSwitch={rgbSwitch}
          setRgbSwitch={onChangeRgbSwitch}
        />
      </BottomSheet>
    </>
  )
}