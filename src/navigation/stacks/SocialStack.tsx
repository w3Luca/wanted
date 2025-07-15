import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SocialScreen from '../../screens/SocialScreen';

// 각 도메인별 화면 그룹 관리
const Stack = createNativeStackNavigator();

export default function SocialStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SocialScreen"
        component={SocialScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
}
