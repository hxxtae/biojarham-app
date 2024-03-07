import { useMemo, useRef, useState } from 'react';
import { MaterialIcons } from '@expo/vector-icons';
import {
  Animated,
  PanResponder,
  Pressable,
  ScrollView,
  Text,
  View
} from 'react-native';

import { styles as S } from './styles';
import PumpPower from './PumpPower';

const MAX_HEIGHT = 200;
const MAX_RATIO = 100;
const onTransformOfValue = (value) => {
  return Math.floor(((MAX_HEIGHT - value) / MAX_HEIGHT) * MAX_RATIO);
}

const onTransformOfOrigin = (value) => {
  return MAX_HEIGHT - ((value / MAX_RATIO) * MAX_HEIGHT);
}

export default function PumpComponent() {
  const [prevPanY, setPrevPanY] = useState(MAX_HEIGHT); // 이전 값 저장
  const panY = useRef(new Animated.Value(MAX_HEIGHT)).current;
  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const [btnClickKind, setBtnClickKind] = useState(1);
  
  const panResponders = useMemo(() => PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderMove: (event, gestureState) => {
      setPrevPanY((prev) => {
        panY.setValue(prev + parseInt(gestureState.dy, 10));
        return prev;
      })
    },
    onPanResponderRelease: (event, gestureState) => {
      setPrevPanY((prev) => {
        const val = prev + parseInt(gestureState.dy, 10);
        if (val >= MAX_HEIGHT) return MAX_HEIGHT;
        else if (val <= 0) return 0;
        return val;
      });
      setBtnClickKind(0);
    }
  }), [prevPanY]);

  const onClickBtn = (btnId, value) => {
    setBtnClickKind(btnId);
    setPrevPanY(onTransformOfOrigin(value));
  }

  return (
    <ScrollView style={S.container}>
      <PumpPower />
      <View style={S.pumpSection}>
        <Pressable style={S.pumpControlBox}>
          <Animated.View style={S.controlBar(MAX_HEIGHT)} {...panResponders.panHandlers}>
            <Text style={S.barText}>{onTransformOfValue(prevPanY)}</Text>
            <MaterialIcons style={S.barIcon} name="electric-bolt" size={24} color="black" />
            <Animated.View style={{ ...S.bar, transform: [{ translateY: translateY }] }}/>
          </Animated.View>
        </Pressable>

        <View style={S.pumpBtnBox}>
          <View style={S.pumpWrapper}>
            <Pressable style={S.controlBtn(btnClickKind === 1)} onPress={() => onClickBtn(1, 10)}>
              <Text style={S.btnText}>POWER{"\n"}10</Text>
            </Pressable>
            <Pressable style={S.controlBtn(btnClickKind === 2)} onPress={() => onClickBtn(2, 25)}>
              <Text style={S.btnText}>POWER{"\n"}25</Text>
            </Pressable>
            <Pressable style={S.controlBtn(btnClickKind === 3)} onPress={() => onClickBtn(3, 40)}>
              <Text style={S.btnText}>POWER{"\n"}40</Text>
            </Pressable>
          </View>
          <View style={S.pumpWrapper}>
            <Pressable style={S.controlBtn(btnClickKind === 4)} onPress={() => onClickBtn(4, 60)}>
              <Text style={S.btnText}>POWER{"\n"}60</Text>
            </Pressable>
            <Pressable style={S.controlBtn(btnClickKind === 5)} onPress={() => onClickBtn(5, 80)}>
              <Text style={S.btnText}>POWER{"\n"}80</Text>
            </Pressable>
            <Pressable style={S.controlBtn(btnClickKind === 6)} onPress={() => onClickBtn(6, 100)}>
              <Text style={S.btnText}>POWER{"\n"}100</Text>
            </Pressable>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}