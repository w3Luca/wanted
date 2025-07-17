import RecruitStack from './stacks/RecruitStack';
import CareerStack from './stacks/CareerStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SocialStack from './stacks/SocialStack';
import MyWantedStack from './stacks/MyWantedStack';
import AllMenuStack from './stacks/AllMenuStack';
import IonIcon from 'react-native-vector-icons/Ionicons';

const Tab = createBottomTabNavigator();

const RecruitTabIcon = ({ color, size }: { color: string; size: number }) => (
  <IonIcon name="bag" size={size} color={color} />
);

const CareerTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <IonIcon name="flag" size={size} color={color} />;

const SocialTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <IonIcon name="people" size={size} color={color} />;

const MyWantedTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <IonIcon name="person-circle" size={size} color={color} />;

const AllMenuTabIcon = ({
  color,
  size,
}: {
  focused: boolean;
  color: string;
  size: number;
}) => <IonIcon name="menu" size={size} color={color} />;

// 하단 탭 UI와 탭 간 전환 관리
// RecruitStack과 CareerStack을 탭으로 연결
export default function MainTabNavigator() {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: '#3366ff', // 활성 탭 색상
        tabBarInactiveTintColor: '#999999', // 비활성 탭 색상
        tabBarStyle: {
          backgroundColor: 'rgba(0, 0, 0, 0.8)',
          position: 'absolute', // 투명한 배경을 위해
          paddingTop: 10,
          height: 85,
          elevation: 0, // android shadow 제거
          shadowOpacity: 0, // ios shadow 제거
        },
      }}
    >
      <Tab.Screen
        name="RecruitTab"
        component={RecruitStack}
        options={{
          title: '채용',
          tabBarIcon: RecruitTabIcon,
        }}
      />
      <Tab.Screen
        name="CareerTab"
        component={CareerStack}
        options={{
          title: '커리어',
          tabBarIcon: CareerTabIcon,
        }}
      />
      <Tab.Screen
        name="SocialTab"
        component={SocialStack}
        options={{
          title: '소셜',
          tabBarIcon: SocialTabIcon,
        }}
      />
      <Tab.Screen
        name="MyWantedTab"
        component={MyWantedStack}
        options={{
          title: 'MY 원티드',
          tabBarIcon: MyWantedTabIcon,
        }}
      />
      <Tab.Screen
        name="AllMenuTab"
        component={AllMenuStack}
        options={{
          title: '전체',
          tabBarIcon: AllMenuTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
