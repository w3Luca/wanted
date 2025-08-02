import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme/colors';

const themeImages = {
  theme1: require('../../assets/images/theme1.webp'),
  theme2: require('../../assets/images/theme2.webp'),
  theme3: require('../../assets/images/theme3.webp'),
  theme4: require('../../assets/images/theme4.webp'),
  theme5: require('../../assets/images/theme5.webp'),
  theme6: require('../../assets/images/theme6.webp'),
};

interface ThemeCardProps {
  title: string;
  description: string;
  image: string;
}

export const ThemeCard = ({ title, description, image }: ThemeCardProps) => {
  return (
    <Pressable style={styles.container}>
      <View>
        <Image
          source={themeImages[image as keyof typeof themeImages]}
          style={styles.image}
        />
      </View>
      <View style={styles.info}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 250,
    height: 180,
    borderRadius: 15,
    borderWidth: 1,
    borderColor: colors.gray50,
    overflow: 'hidden',
  },

  image: { width: '100%', height: 110 },
  info: {
    gap: 5,
    padding: 10,
  },
  title: {
    fontSize: 14,
    fontWeight: 'bold',
  },
  description: {
    fontSize: 12,
    color: colors.gray200,
  },
});
