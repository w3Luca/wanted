import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecruitScreen from '../../screens/RecruitScreen';

const Stack = createNativeStackNavigator();

// Recruit 관련 화면들의 Stack Navigator
// 각 도메인별 화면 그룹 관리
export default function RecruitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="RecruitScreen"
        component={RecruitScreen}
        // options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="RecruitDetailScreen" component={RecruitDetailScreen} /> */}
    </Stack.Navigator>
  );
}
