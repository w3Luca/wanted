import { createNativeStackNavigator } from '@react-navigation/native-stack';
import RecruitScreen from '../../screens/recruit/RecruitScreen';
import { recruitNavigations } from '../../constants/navigations';

export type RecruitStackParamList = {
  [recruitNavigations.RECRUIT]: undefined;
};

const Stack = createNativeStackNavigator<RecruitStackParamList>();

export default function RecruitStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={recruitNavigations.RECRUIT}
        component={RecruitScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="RecruitDetailScreen" component={RecruitDetailScreen} /> */}
    </Stack.Navigator>
  );
}
