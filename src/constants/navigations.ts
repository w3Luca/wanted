const authNavigations = {
  AUTH: 'Auth',
  LOGIN: 'Login',
} as const;

const recruitNavigations = {
  RECRUIT: 'Recruit',
} as const;

const careerNavigations = {
  CAREER: 'Career',
} as const;

const socialNavigations = {
  SOCIAL: 'Social',
} as const;

const myWantedNavigations = {
  MY_WANTED: 'MyWanted',
} as const;

const allMenuNavigations = {
  ALL_MENU: 'AllMenu',
} as const;

const mainTabNavigations = {
  RECRUIT_TAB: 'RecruitTab',
  CAREER_TAB: 'CareerTab',
  SOCIAL_TAB: 'SocialTab',
  MY_WANTED_TAB: 'MyWantedTab',
  ALL_MENU_TAB: 'AllMenuTab',
} as const;

const rootNavigations = {
  MAIN_TAB_NAVIGATOR: 'MainTabNavigator',
  AUTH_STACK: 'AuthStack',
} as const;

export {
  authNavigations,
  recruitNavigations,
  careerNavigations,
  socialNavigations,
  myWantedNavigations,
  allMenuNavigations,
  mainTabNavigations,
  rootNavigations,
};
