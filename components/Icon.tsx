import React from 'react';
import {createIconSetFromIcoMoon} from 'react-native-vector-icons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import icoMoonConfig from '../selection.json';
const IcoMoon = createIconSetFromIcoMoon(icoMoonConfig);

interface IconProps {
  custom?: boolean;
  name: string;
  color?: string;
  size: number;
}

export default ({custom, name, color, size}: IconProps) => {
  if (!custom) return <MaterialIcons name={name} color={color} size={size} />;
  return <IcoMoon name={name} color={color} size={size} />;
};
