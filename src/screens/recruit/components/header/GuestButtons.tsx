import Ionicons from 'react-native-vector-icons/Ionicons';
import { IconButton } from '../../../../components/Button/IconButton';
import { TextButton } from '../../../../components/Button/TextButton';
import { StyleSheet, View } from 'react-native';

export const GuestButtons = () => {
  return (
    <View style={styles.container}>
      <IconButton accessibilityLabel="검색" accessibilityRole="button">
        <Ionicons name="search-outline" size={24} color="black" />
      </IconButton>
      <TextButton onPress={() => console.log('로그인')} title="로그인" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
