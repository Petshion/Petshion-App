import React, {useState} from 'react';
import {Dimensions, StyleSheet} from 'react-native';
import styled from 'styled-components/native';
import RNPickerSelect from 'react-native-picker-select';
import Icon from '../Icon';

import {Text} from '../Text';

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
  padding: 8px 20px;
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

export default () => {
  const [selectedColor, setSelectedColor] = useState();
  const [selectedSize, setSelectedSize] = useState();
  const [count, setCount] = useState(1);

  const minus = () => {
    if (count === 1) {
      return;
    }
    setCount(count - 1);
  };

  return (
    <SelectOrderWrap>
      <RNPickerSelect
        onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
        placeholder={{
          label: '색상',
          value: 'null',
        }}
        //Icon={() => <Icon name={'expand-more'} color={'#000'} size={18} />}
        style={pickerSelectStyles}
        items={[
          {label: '검은색', value: '검은색'},
          {label: '노랑색', value: '노랑색'},
          {label: '파랑색', value: '파랑색'},
        ]}
      />
      <RNPickerSelect
        onValueChange={(itemValue, itemIndex) => setSelectedColor(itemValue)}
        placeholder={{
          label: '사이즈',
          value: 'null',
        }}
        //Icon={() => <Icon name={'expand-more'} color={'#000'} size={18} />}
        style={pickerSelectStyles}
        items={[
          {label: 'S', value: 'S'},
          {label: 'M', value: 'M'},
          {label: 'L', value: 'L'},
        ]}
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
          <CountButton onPress={() => setCount(count + 1)}>
            <Icon name={'add'} color={'#fff'} size={18} />
          </CountButton>
        </CountView>
      </SelectedCountView>
      <BottomWrap>
        <Button>
          <BasketButton>
            <BasketText>장바구니</BasketText>
          </BasketButton>
        </Button>
        <Button>
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
    paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 1,
    borderColor: '#cacaca',
    borderRadius: 4,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  placeholder: {
    color: '#4e4e4e',
  },
});
