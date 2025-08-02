import { ScrollView, StatusBar, StyleSheet } from 'react-native';
import { RecruitHeader } from './components/header/RecruitHeader';
import { SafeAreaView } from 'react-native-safe-area-context';
import { NotificationBanner } from './components/NotificationBanner';
import { MenuSection } from './components/MenuSection';
import { JobSection } from './components/JobSection';
import { BannerSection } from './components/BannerSection';
import { ThemeSection } from './components/ThemeSection';

const jobData = [
  {
    title: '경리 및 서류 담당',
    company: '아이텍기술',
    info: '울산 남구 • 경력 1년 이상',
    image: 'job1',
  },
  {
    title: '[글로벌] 와키윌리 중국 총괄 매니저',
    company: '비케이브',
    info: '서울 마포구 • 경력 4-8년',
    image: 'job2',
  },
  {
    title: '[스나이퍼팩토리] 회계 및 서류 담당',
    company: '스팩스페이스',
    info: '서울 강서구 • 경력 1-5년',
    image: 'job3',
  },
  {
    title: '수능 영어 연구실 담당',
    company: '비메인',
    info: '서울 강남구 • 신입 이상',
    image: 'job4',
  },
  {
    title: '회계 담당자',
    company: '이노바인코리아',
    info: '서울 강남구 • 경력 5-10년',
    image: 'job5',
  },
  {
    title: '바이럴 마케팅 팀원',
    company: '네오프',
    info: '서울 송파구 • 경력 1년 이상',
    image: 'job6',
  },
  {
    title: '[인턴] 바이럴 마케터',
    company: '네오커스',
    info: '서울 강남구 • 신입',
    image: 'job7',
  },
  {
    title: '비즈니스 로직 개발자',
    company: '미림미디어랩',
    info: '서울 강서구 • 경력 3년',
    image: 'job8',
  },
  {
    title: '머리바바 서비스 기획자',
    company: '테크랩스',
    info: '서울 강남구 • 경력 7-13년',
    image: 'job9',
  },
  {
    title: '마케팅 기획 담당자',
    company: '아이오트러스트',
    info: '서울 강남구 • 경력 5-15년',
    image: 'job10',
  },

  {
    title: '글로벌 세일즈 담당',
    company: '퍼셀',
    info: '서울 강남구 • 경력 3-12년',
    image: 'job11',
  },
  {
    title: '광고기획자',
    company: '위에이알',
    info: '서울 성동구 • 경력 5-8년',
    image: 'job12',
  },
];

const bannerData = [
  {
    title: '와디즈 경력직 채용',
    description: '영업•마케팅•테크 등 전 직군 채용',
    image: 'banner1',
  },
  {
    title: '데브시스터즈 대규모 채용',
    description: '새로운 여정에 도전하세요!',
    image: 'banner2',
  },
  {
    title: '현대해상 경력직 채용',
    description: '데이터전략 등 6개 직무',
    image: 'banner3',
  },
  {
    title: '이력서 작성하면 50만 원이?',
    description: '합격코드 235 이벤트를 확인하세요',
    image: 'banner4',
  },
  {
    title: '채널코퍼레이션 집중 채용',
    description: '리크루터 • SWE • AI 전 직군',
    image: 'banner5',
  },
];

const themeData = [
  {
    title: '기업 가치 300억 이상',
    description: '아기 유니콘 기업',
    image: 'theme1',
  },
  {
    title: '합격 가능성 높은',
    description: '대규모 채용 중',
    image: 'theme2',
  },
  {
    title: 'AI 혁신을 이끄는 기업',
    description: 'AI 선도 기업',
    image: 'theme3',
  },
  {
    title: '집에서도 일할 수 있는',
    description: '재택근무',
    image: 'theme4',
  },
  {
    title: '일본에서 일하고 싶다면',
    description: '일본 현지 취업',
    image: 'theme5',
  },
  {
    title: '인재 채용에 진심인',
    description: '적극 채용 중',
    image: 'theme6',
  },
];

export default function RecruitScreen() {
  const isLoggedIn = false;
  return (
    <SafeAreaView style={{ flex: 1, backgroundColor: 'white' }}>
      <StatusBar barStyle="dark-content" />
      <RecruitHeader />
      <ScrollView
        style={styles.container}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ gap: 20, paddingHorizontal: 20 }}
      >
        <NotificationBanner />
        <MenuSection />
        <JobSection data={jobData} title="모두가 주목하고 있어요!" />
        <BannerSection data={bannerData} />
        {/* 로그인 시 합격가능높은 포지션, 비로그인 시 모두가 주목하는 직무? */}
        <ThemeSection data={themeData} title="테마로 살펴보는 회사/포지션" />
        {isLoggedIn && <JobSection data={jobData} title="최근 본 포지션" />}
        <JobSection data={jobData} title="요즘뜨는 포지션" />
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 10,
    paddingBottom: 100,
    backgroundColor: 'white',
  },
});
// 로그인시
//메뉴, 합격가능 높은 포지션, 배너, 테마, 최근본포지션, 역세권포지션, 대규모채용중
// 비로그인시
// 메뉴, 모두가 주목하고 있어요, 배너, 테마, 역세권포지션, 요즘뜨는 포지션
