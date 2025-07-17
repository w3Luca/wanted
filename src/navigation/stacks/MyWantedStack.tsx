import { createNativeStackNavigator } from '@react-navigation/native-stack';
import MyWantedScreen from '../../screens/myWanted/MyWantedScreen';
import { myWantedNavigations } from '../../constants/navigations';

export type MyWantedStackParamList = {
  [myWantedNavigations.MY_WANTED]: undefined;
};

const Stack = createNativeStackNavigator<MyWantedStackParamList>();

export default function MyWantedStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={myWantedNavigations.MY_WANTED}
        component={MyWantedScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
