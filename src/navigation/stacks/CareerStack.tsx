import { createNativeStackNavigator } from '@react-navigation/native-stack';
import CareerScreen from '../../screens/career/CareerScreen';
import { careerNavigations } from '../../constants/navigations';

export type CareerStackParamList = {
  [careerNavigations.CAREER]: undefined;
};

const Stack = createNativeStackNavigator<CareerStackParamList>();

export default function CareerStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={careerNavigations.CAREER}
        component={CareerScreen}
        options={{ headerShown: false }}
      />
      {/* <Stack.Screen name="CareerDetailScreen" component={CareerDetailScreen}/> */}
    </Stack.Navigator>
  );
}
