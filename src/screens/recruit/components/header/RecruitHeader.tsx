import { StyleSheet, Text, View } from 'react-native';
import { useState } from 'react';
import { UserButtons } from './UserButtons';
import { GuestButtons } from './GuestButtons';
import { colors } from '../../../../constants/theme/colors';

interface RecruitHeaderProps {
  onSearchPress?: () => void;
}

export const RecruitHeader = ({ onSearchPress }: RecruitHeaderProps) => {
  const [isLogin, setIsLogin] = useState(false);

  return (
    <View style={styles.container}>
      <View style={styles.leftSection}>
        <Text style={styles.title}>채용</Text>
      </View>

      {isLogin && <UserButtons />}
      {!isLogin && <GuestButtons />}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 8,
    backgroundColor: colors.white,
  },
  leftSection: {
    flex: 1,
  },
  title: {
    fontSize: 24,
    fontWeight: '600',
    color: colors.black,
  },
});
