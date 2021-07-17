import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const Icon = createIconSetFromIcoMoon(icoMoonConfig);

const BottomIcon = ({name, color, size}: any) => (
  <Icon name={name} color={color} size={size} />
);

export default BottomIcon;
