import { Button, SafeAreaView, View } from 'react-native';
import { AuthStackParamList } from '../../navigation/stacks/AuthStack';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { authNavigations } from '../../constants/navigations';

type AuthScreenProps = NativeStackScreenProps<
  AuthStackParamList,
  typeof authNavigations.AUTH
>;

export default function AuthScreen({ navigation }: AuthScreenProps) {
  return (
    <SafeAreaView>
      <View>
        <Button
          title="로그인화면으로 이동"
          onPress={() => navigation.navigate(authNavigations.LOGIN)}
        />
      </View>
    </SafeAreaView>
  );
}
