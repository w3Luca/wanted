import { Image } from 'react-native';
import { IconType } from '../../types/icon';

export const ResumeIcon = ({ size = 24, style }: IconType) => {
  return (
    <Image
      source={require('../../assets/icons/resume.png')}
      style={[{ width: size, height: size }, style]}
    />
  );
};
