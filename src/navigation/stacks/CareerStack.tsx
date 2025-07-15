import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CareerScreen from '../../screens/CareerScreen';

const Stack = createNativeStackNavigator();

// Career 관련 화면들의 Stack Navigator
// 각 도메인별 화면 그룹 관리
export default function CareerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="CareerScreen"
        component={CareerScreen}
        // options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="CareerDetailScreen" component={CareerDetailScreen}/> */}
    </Stack.Navigator>
  );
}
