import RecruitStack, { RecruitStackParamList } from './stacks/RecruitStack';
import CareerStack, { CareerStackParamList } from './stacks/CareerStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SocialStack, { SocialStackParamList } from './stacks/SocialStack';
import MyWantedStack, { MyWantedStackParamList } from './stacks/MyWantedStack';
import AllMenuStack, { AllMenuStackParamList } from './stacks/AllMenuStack';
import IonIcon from 'react-native-vector-icons/Ionicons';
import { NavigatorScreenParams } from '@react-navigation/native';
import { mainTabNavigations } from '../constants/navigations';

export type MainTabParamList = {
  [mainTabNavigations.RECRUIT_TAB]: NavigatorScreenParams<RecruitStackParamList>;
  [mainTabNavigations.CAREER_TAB]: NavigatorScreenParams<CareerStackParamList>;
  [mainTabNavigations.SOCIAL_TAB]: NavigatorScreenParams<SocialStackParamList>;
  [mainTabNavigations.MY_WANTED_TAB]: NavigatorScreenParams<MyWantedStackParamList>;
  [mainTabNavigations.ALL_MENU_TAB]: NavigatorScreenParams<AllMenuStackParamList>;
};

type TabIconProps = {
  focused: boolean;
  color: string;
  size: number;
};

const Tab = createBottomTabNavigator<MainTabParamList>();

const RecruitTabIcon = ({ color, size }: TabIconProps) => (
  <IonIcon name="bag" size={size} color={color} />
);

const CareerTabIcon = ({ color, size }: TabIconProps) => (
  <IonIcon name="flag" size={size} color={color} />
);

const SocialTabIcon = ({ color, size }: TabIconProps) => (
  <IonIcon name="people" size={size} color={color} />
);

const MyWantedTabIcon = ({ color, size }: TabIconProps) => (
  <IonIcon name="person-circle" size={size} color={color} />
);

const AllMenuTabIcon = ({ color, size }: TabIconProps) => (
  <IonIcon name="menu" size={size} color={color} />
);

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
          backgroundColor: '#fff',
          position: 'absolute', // 투명한 배경을 위해
          paddingTop: 10,
          height: 85,
          elevation: 0, // android shadow 제거
          shadowOpacity: 0, // ios shadow 제거
        },
      }}
    >
      <Tab.Screen
        name={mainTabNavigations.RECRUIT_TAB}
        component={RecruitStack}
        options={{
          title: '채용',
          tabBarIcon: RecruitTabIcon,
        }}
      />
      <Tab.Screen
        name={mainTabNavigations.CAREER_TAB}
        component={CareerStack}
        options={{
          title: '커리어',
          tabBarIcon: CareerTabIcon,
        }}
      />
      <Tab.Screen
        name={mainTabNavigations.SOCIAL_TAB}
        component={SocialStack}
        options={{
          title: '소셜',
          tabBarIcon: SocialTabIcon,
        }}
      />
      <Tab.Screen
        name={mainTabNavigations.MY_WANTED_TAB}
        component={MyWantedStack}
        options={{
          title: 'MY 원티드',
          tabBarIcon: MyWantedTabIcon,
        }}
      />
      <Tab.Screen
        name={mainTabNavigations.ALL_MENU_TAB}
        component={AllMenuStack}
        options={{
          title: '전체',
          tabBarIcon: AllMenuTabIcon,
        }}
      />
    </Tab.Navigator>
  );
}
