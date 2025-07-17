import { createNativeStackNavigator } from '@react-navigation/native-stack';
import AllMenuScreen from '../../screens/AllMenu/AllMenuScreen';
import { allMenuNavigations } from '../../constants/navigations';

export type AllMenuStackParamList = {
  [allMenuNavigations.ALL_MENU]: undefined;
};

const Stack = createNativeStackNavigator<AllMenuStackParamList>();

export default function AllMenuStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={allMenuNavigations.ALL_MENU}
        component={AllMenuScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
