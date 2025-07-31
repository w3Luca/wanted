import { View, Text, StyleSheet } from 'react-native';
import { colors } from '../../../constants/theme/colors';
import AntDesign from 'react-native-vector-icons/AntDesign';

export const NotificationBanner = () => {
  const isLogin = true;
  return (
    <View style={styles.container}>
      {isLogin && (
        <>
          <View style={styles.leftContent}>
            <Text style={styles.icon}>🔔</Text>
            <Text style={styles.messageText}>
              <Text style={styles.highlight}>새로 올라온 포지션</Text>
              <Text>을 가장 먼저 확인해 보세요!</Text>
            </Text>
          </View>
          <AntDesign name="right" size={16} color={colors.gray100} />
        </>
      )}

      {!isLogin && (
        <>
          <View style={styles.leftContent}>
            <Text style={styles.icon}>🧑‍🍳</Text>
            <Text style={styles.messageText}>
              <Text>로그인하면 </Text>
              <Text style={styles.highlight}>연봉 정보, 이력서 샘플 </Text>
              <Text>등 유용한 정보를 얻을 수 있어요.</Text>
            </Text>
          </View>
          <AntDesign name="right" size={16} color={colors.gray100} />
        </>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.gray50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
    paddingVertical: 20,
    borderRadius: 16,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    maxWidth: '90%',
    gap: 10,
  },
  icon: {
    fontSize: 24,
  },
  messageText: {
    fontSize: 14,
    lineHeight: 20,
    flex: 1,
  },
  highlight: {
    color: colors.blue,
  },
});
