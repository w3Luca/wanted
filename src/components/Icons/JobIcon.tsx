import { Image } from 'react-native';
import { IconType } from '../../types/icon';

export const JobIcon = ({ size = 24, style }: IconType) => {
  return (
    <Image
      source={require('../../assets/icons/job.png')}
      style={[{ width: size, height: size }, style]}
    />
  );
};
