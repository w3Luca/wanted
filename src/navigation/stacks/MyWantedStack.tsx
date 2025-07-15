import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyWantedScreen from '../../screens/MyWantedScreen';

// 각 도메인별 화면 그룹 관리
const Stack = createNativeStackNavigator();

export default function MyWantedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="MyWantedScreen"
        component={MyWantedScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
}
