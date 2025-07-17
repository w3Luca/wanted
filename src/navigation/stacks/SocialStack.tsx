import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SocialScreen from '../../screens/social/SocialScreen';
import { socialNavigations } from '../../constants/navigations';

export type SocialStackParamList = {
  [socialNavigations.SOCIAL]: undefined;
};

const Stack = createNativeStackNavigator<SocialStackParamList>();

export default function SocialStack() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name={socialNavigations.SOCIAL}
        component={SocialScreen}
        options={{
          headerShown: false,
        }}
      />
    </Stack.Navigator>
  );
}
