import { SafeAreaView, Text, View } from 'react-native';
import { RecruitHeader } from '../../components/header/RecruitHeader';

export default function RecruitScreen() {
  return (
    <SafeAreaView>
      <RecruitHeader />
      <View>
        <Text>Recruit</Text>
      </View>
    </SafeAreaView>
  );
}
