import { Image } from 'react-native';
import { IconType } from '../../types/icon';

export const StatusIcon = ({ size = 24, style }: IconType) => {
  return (
    <Image
      source={require('../../assets/icons/status.png')}
      style={[{ width: size, height: size }, style]}
    />
  );
};
