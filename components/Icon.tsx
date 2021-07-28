import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import icoMoonConfig from '../selection.json';
const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig);

interface IconProps {
  name: string;
  color?: string;
  size: number;
}

const Icon = ({name, color, size}: IconProps) => (
  <IcoMoon name={name} color={color} size={size} />
);

export default Icon;
