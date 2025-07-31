import Ionicons from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import { IconButton } from '../../../../components/Button/IconButton';
import { StyleSheet, View } from 'react-native';
import { colors } from '../../../../constants/theme/colors';

export const UserButtons = () => {
  return (
    <View style={styles.container}>
      <IconButton accessibilityLabel="검색" accessibilityRole="button">
        <Ionicons name="search-outline" size={24} color={colors.black} />
      </IconButton>

      <IconButton accessibilityLabel="알림" accessibilityRole="button">
        <Feather name="bell" size={24} color={colors.black} />
      </IconButton>

      <IconButton accessibilityLabel="프로필" accessibilityRole="button">
        <Ionicons name="person-circle-sharp" size={30} color={colors.gray50} />
      </IconButton>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 12,
    flexDirection: 'row',
    alignItems: 'center',
  },
});
