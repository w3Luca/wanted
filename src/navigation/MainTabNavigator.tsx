import RecruitStack from './stacks/RecruitStack';
import CareerStack from './stacks/CareerStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SocialStack from './stacks/SocialStack';
import MyWantedStack from './stacks/MyWantedStack';
import AllMenuStack from './stacks/AllMenuStack';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

// 하단 탭 UI와 탭 간 전환 관리
// RecruitStack과 CareerStack을 탭으로 연결
export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#007AFF',
      }}
    >
      <Tab.Screen
        name="RecruitTab"
        component={RecruitStack}
        options={{
          title: '채용',
          tabBarIcon: ({ focused, color, size }) => (
            <Icon name="bag" size={size} color={focused ? '#007AFF' : color} />
          ),
        }}
      />
      <Tab.Screen
        name="CareerTab"
        component={CareerStack}
        options={{
          title: '커리어',
        }}
      />
      <Tab.Screen
        name="SocialTab"
        component={SocialStack}
        options={{
          title: '소셜',
        }}
      />
      <Tab.Screen
        name="MyWantedTab"
        component={MyWantedStack}
        options={{
          title: 'MY 원티드',
        }}
      />
      <Tab.Screen
        name="AllMenuTab"
        component={AllMenuStack}
        options={{
          title: '전체',
        }}
      />
    </Tab.Navigator>
  );
}
