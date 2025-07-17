import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { Text, View } from 'react-native';
import { AllMenuStackParamList } from '../../navigation/stacks/AllMenuStack';
import { allMenuNavigations } from '../../constants/navigations';

type AllMenuScreenProps = NativeStackScreenProps<
  AllMenuStackParamList,
  typeof allMenuNavigations.ALL_MENU
>;

export default function AllMenuScreen({ navigation }: AllMenuScreenProps) {
  return (
    <View>
      <Text>AllMenu</Text>
    </View>
  );
}
