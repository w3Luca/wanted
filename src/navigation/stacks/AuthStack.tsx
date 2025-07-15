import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AuthScreen from '../../screens/AuthScreen';

// 인증 관련 화면들의 Stack Navigator
// 각 도메인별 화면 그룹 관리
const Stack = createNativeStackNavigator();

export default function AuthStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AuthScreen"
        component={AuthScreen}
        options={{
          title: '로그인',
          headerShown: false, // 로그인 화면은 헤더 숨김
        }}
      />
      {/* <Stack.Screen 
        name="Signup" 
        component={SignupScreen}
        options={{ title: '회원가입' }}
      />
      <Stack.Screen 
        name="ForgotPassword" 
        component={ForgotPasswordScreen}
        options={{ title: '비밀번호 찾기' }}
      /> */}
    </Stack.Navigator>
  );
}
