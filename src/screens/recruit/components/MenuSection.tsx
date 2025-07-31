import { View, StyleSheet } from 'react-native';
import { ResumeIcon } from '../../../components/Icons/ResumeIcon';
import { JobIcon } from '../../../components/Icons/JobIcon';
import { CareerIcon } from '../../../components/Icons/CareerIcon';
import { StatusIcon } from '../../../components/Icons/StatusIcon';
import { IconButton } from '../../../components/Button/IconButton';

export const MenuSection = () => {
  return (
    <View style={styles.container}>
      <IconButton title="채용공고">
        <JobIcon size={50} />
      </IconButton>
      <IconButton title="이력서 관리">
        <ResumeIcon size={50} />
      </IconButton>
      <IconButton title="커리어 조회">
        <CareerIcon size={50} />
      </IconButton>
      <IconButton title="지원 현황">
        <StatusIcon size={50} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 35,
  },
});
