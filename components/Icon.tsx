import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig);

const Icon = ({name, color, size}: any) => (
  <IcoMoon name={name} color={color} size={size} />
);

export default Icon;
