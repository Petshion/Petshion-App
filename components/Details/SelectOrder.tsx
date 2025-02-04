import React, {useState} from 'react';
import {Alert, Dimensions, StyleSheet, Vibration} from 'react-native';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from '../Icon';

import {useNavigation} from '@react-navigation/native';
import {RootStackParamList} from '../../assets/types';
import {useSelector} from 'react-redux';
import {authSelector} from '../../modules/hooks';
import {basketApi} from '../../api';

const {width: WIDTH, height: HEIGHT} = Dimensions.get('window');

const SelectOrderWrap = styled.View`
  flex: 1;
  padding: 0 20px;
`;

const BottomWrap = styled.View`
  width: ${WIDTH}px;
  height: 50px;
  position: absolute;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  bottom: 0px;
`;

const BasketButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #4e4e4e;
`;

const BasketText = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;
  color: #ffd426;
`;

const OrderButton = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: #ffd426;
`;

const OrderText = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;
  color: #4e4e4e;
`;

const Button = styled.TouchableOpacity`
  flex: 1;
`;

const SelectedCountView = styled.View`
  padding: 2px 16px;
  justify-content: space-between;
  flex-direction: row;
`;

const SelectedText = styled.Text`
  font-family: NanumSquareBold;
  font-size: 18px;
`;

const CountView = styled.View`
  width: 80px;
  flex-direction: row;
  justify-content: space-between;
`;

const Count = styled.Text``;

const CountButton = styled.TouchableOpacity`
  width: 20px;
  height: 20px;
  align-items: center;
  justify-content: center;
  border-radius: 50px;
  background-color: #4e4e4e;
`;

export default ({id, color, size}) => {
  const {AUTHItem} = useSelector(authSelector);
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [count, setCount] = useState(1);

  const navigation = useNavigation<RootStackParamList>();

  const minus = () => {
    Vibration.vibrate(5);
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  const plus = () => {
    Vibration.vibrate(5);
    setCount(count + 1);
  };

  const buttonDisabled = () => {
    if (selectedColor && selectedSize) {
      return false;
    } else {
      return true;
    }
  };

  const orderButtonAlert = () =>
    Alert.alert('팻션', '주문을 완료하였습니다.', [
      {text: '확인', onPress: () => navigation.navigate('Main')},
    ]);

  const pleaseLogin = () => {
    Alert.alert('팻션', '로그인이 필요한 서비스입니다.', [
      {text: '확인', onPress: () => navigation.navigate('User')},
    ]);
  };

  const basketButton = async () => {
    if (!AUTHItem) {
      pleaseLogin();
      return;
    }
    await basketApi.addBasket(
      {
        product_id: id,
        color: selectedColor,
        size: selectedSize,
        count: count,
      },
      AUTHItem?.token,
    );
    navigation.navigate('Basket');
  };

  return (
    <SelectOrderWrap>
      <RNPickerSelect
        onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
        placeholder={{
          label: '색상',
          value: 'null',
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => <Icon name={'expand-more'} color={'#000'} size={25} />}
        style={pickerSelectStyles}
        items={color.map(color => {
          let tempColor = {};
          tempColor = {label: color, value: color};
          return tempColor;
        })}
      />
      <RNPickerSelect
        onValueChange={(itemValue, itemIndex) => setSelectedSize(itemValue)}
        placeholder={{
          label: '사이즈',
          value: 'null',
        }}
        useNativeAndroidPickerStyle={false}
        Icon={() => <Icon name={'expand-more'} color={'#000'} size={25} />}
        style={pickerSelectStyles}
        items={size.map(size => {
          let tempSize = {};
          tempSize = {label: size, value: size};
          return tempSize;
        })}
      />
      <SelectedCountView>
        <SelectedText>
          {selectedColor} / {selectedSize}
        </SelectedText>
        <CountView>
          <CountButton onPress={minus}>
            <Icon name={'remove'} color={'#fff'} size={18} />
          </CountButton>
          <Count>{count}</Count>
          <CountButton onPress={plus}>
            <Icon name={'add'} color={'#fff'} size={18} />
          </CountButton>
        </CountView>
      </SelectedCountView>
      <BottomWrap>
        <Button onPress={basketButton} disabled={buttonDisabled()}>
          <BasketButton>
            <BasketText>장바구니</BasketText>
          </BasketButton>
        </Button>
        <Button onPress={orderButtonAlert} disabled={buttonDisabled()}>
          <OrderButton>
            <OrderText>주문하기</OrderText>
          </OrderButton>
        </Button>
      </BottomWrap>
    </SelectOrderWrap>
  );
};

const pickerSelectStyles = StyleSheet.create({
  inputAndroid: {
    fontFamily: 'NanumSquareBold',
    fontSize: 16,
    marginBottom: 20,
    paddingHorizontal: 10,
    paddingVertical: 2,
    borderWidth: 1,
    borderColor: '#cacaca',
    borderRadius: 4,
    color: '#4e4e4e',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    fontFamily: 'NanumSquareBold',
    fontSize: 16,
    color: '#4e4e4e',
  },
  iconContainer: {
    top: 4,
    right: 10,
  },
});
