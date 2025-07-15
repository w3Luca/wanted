import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllMenuScreen from '../../screens/AllMenuScreen';

// 각 도메인별 화면 그룹 관리
const Stack = createNativeStackNavigator();

export default function AllMenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="AllMenuScreen"
        component={AllMenuScreen}
        // options={{
        //   headerShown: false,
        // }}
      />
    </Stack.Navigator>
  );
}
