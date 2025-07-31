import { Image } from 'react-native';
import { IconType } from '../../types/icon';

export const CareerIcon = ({ size = 24, style }: IconType) => {
  return (
    <Image
      source={require('../../assets/icons/career.png')}
      style={[{ width: size, height: size }, style]}
    />
  );
};
