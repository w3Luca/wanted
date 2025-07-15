import { NavigatorScreenParams } from '@react-navigation/native';

declare global {
  namespace ReactNavigation {
    interface RootParamList {
      // Root레벨
      MainTabNavigator: undefined;
      AuthStack: undefined;

      // Tab 레벨
      RecruitTab: NavigatorScreenParams<RecruitStackParamList>;
      CareerTab: NavigatorScreenParams<CareerStackParamList>;
      SocialTab: NavigatorScreenParams<SocialStackParamList>;
      MyWantedTab: NavigatorScreenParams<MyWantedStackParamList>;
      AllMenuTab: NavigatorScreenParams<AllMenuStackParamList>;

      // Stack 레벨
      RecruitScreen: undefined;
      CareerScreen: undefined;
      CareerDetailScreen: { careerId: number };
      SocialScreen: undefined;
      MyWantedScreen: undefined;
      AllMenuScreen: undefined;
      LoginScreen: undefined;
    }
  }
}

type MainTabParamList = {
  RecruitTab: NavigatorScreenParams<RecruitStackParamList>;
  CareerTab: NavigatorScreenParams<CareerStackParamList>;
  SocialTab: NavigatorScreenParams<SocialStackParamList>;
  MyWantedTab: NavigatorScreenParams<MyWantedStackParamList>;
  AllMenuTab: NavigatorScreenParams<AllMenuStackParamList>;
};

type RecruitStackParamList = {
  RecruitScreen: undefined;
  // RecruitDetailScreen: { recruitId: number }; // 나중에 추가
};

type CareerStackParamList = {
  CareerScreen: undefined;
  // CareerDetailScreen: { careerId: number }; // 나중에 추가
};

type SocialStackParamList = {
  SocialScreen: undefined;
};

type MyWantedStackParamList = {
  MyWantedScreen: undefined;
};

type AllMenuStackParamList = {
  AllMenuScreen: undefined;
};

type AuthStackParamList = {
  SigninScreen: undefined;
  SignupScreen: undefined;
};

export {};
