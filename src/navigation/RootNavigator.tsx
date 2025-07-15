import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MainTabNavigator from './MainTabNavigator';
import AuthStack from './stacks/AuthStack';

const Stack = createNativeStackNavigator();

// 임시 로그인 상태
const useAuth = () => {
  return { isLoggedIn: true };
};

// 로그인 상태에 따라 메인 탭 네비게이터 또는 로그인 화면으로 이동
// 인증 상태에 따른 라우팅 결정
export default function RootNavigator() {
  const { isLoggedIn } = useAuth();

  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      {isLoggedIn ? (
        <Stack.Screen name="MainTabNavigator" component={MainTabNavigator} />
      ) : (
        <Stack.Screen name="AuthStack" component={AuthStack} />
      )}
    </Stack.Navigator>
  );
}
