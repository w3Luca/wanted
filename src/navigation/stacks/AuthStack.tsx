import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screens/auth/AuthScreen';
import LoginScreen from '../../screens/auth/LoginScreen';
import { authNavigations } from '../../constants/navigations';

export type AuthStackParamList = {
  [authNavigations.AUTH]: undefined;
  [authNavigations.LOGIN]: undefined;
};

const Stack = createNativeStackNavigator<AuthStackParamList>();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={authNavigations.AUTH}
        component={AuthScreen}
        options={{
          title: '로그인',
          headerShown: false, // 로그인 화면은 헤더 숨김
        }}
      />
      <Stack.Screen
        name={authNavigations.LOGIN}
        component={LoginScreen}
        options={{ title: '로그인' }}
      />
    </Stack.Navigator>
  );
}
