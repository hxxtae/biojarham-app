import { Switch, Text, TouchableOpacity, View } from 'react-native';
import { Ionicons, MaterialIcons } from '@expo/vector-icons';
import { memo, useState } from 'react';
import { produce } from 'immer';
import PropTypes from 'prop-types';

import { colors } from '../../../../global/colors';
import { styles as S } from './styles';
import BottomSheet from '../../../../components/BottomSheet';
import LedDetailComponent from '../../../LedDetailComponent';

LedDetailItem.propTypes = {
  kindName: PropTypes.string.isRequired,
  detailRGB: PropTypes.object.isRequired,
  setDetailRGB: PropTypes.func.isRequired
}

function LedDetailItem({ kindName, detailRGB, setDetailRGB }) {
  console.log('detail: ' + kindName)
  const [modalState, setModalState] = useState(false);

  const LedDetailModalProps = {
    modalVisible: modalState,
    setModalVisible: setModalState,
    height: '100%'
  };

  const handleModalState = (state) => {
    setModalState(state);
  }

  const getRgbText = (str) => {
    return Object.keys(detailRGB.rgb)
      .map(color => detailRGB.rgb[color])
      .join(str);
  }

  const setRgbText = (kind, val) => {
    setDetailRGB((prev) => produce(prev, (draft) => {
      draft.rgb[kind] = val;
      return draft;
    }));
  };

  const onChangeRgbSwitch = () => {
    setDetailRGB((prev) => produce(prev, (draft) => {
      draft.switch = !draft.switch
      return draft;
    }));
  }

  return (
    <>
      <View style={S.rgbDetailBox(detailRGB.switch)}>
        <View style={S.wrapperTop}>
          <View style={S.rgbIcon}>
            <MaterialIcons name="lightbulb" size={24} color={detailRGB.switch ? `rgb(${getRgbText(',')})` : colors.background} />
          </View>
          <View style={S.rgbNameBox}>
            <Text style={S.rgbName}>{kindName}</Text>
          </View>
        </View>

        <View style={S.wrapperBottom}>
          <Text style={S.rgbValue}>{ getRgbText(',') }</Text>
          <View style={S.rgbBtns}>
            <Switch
              trackColor={{false: '#767577', true: colors.green}}
              thumbColor={colors.text}
              ios_backgroundColor="#3e3e3e"
              onValueChange={onChangeRgbSwitch}
              value={detailRGB.switch}
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
          detailRGB={detailRGB}
          getRgbText={getRgbText}
          setRgbText={setRgbText}
          onChangeRgbSwitch={onChangeRgbSwitch}
        />
      </BottomSheet>
    </>
  )
}

export default memo(LedDetailItem);