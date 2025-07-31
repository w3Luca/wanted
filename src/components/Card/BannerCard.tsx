import { Image, StyleSheet, Text, View } from 'react-native';

const bannerImages = {
  banner1: require('../../assets/images/banner1.webp'),
  banner2: require('../../assets/images/banner2.webp'),
  banner3: require('../../assets/images/banner3.webp'),
  banner4: require('../../assets/images/banner4.webp'),
  banner5: require('../../assets/images/banner5.webp'),
};

interface BannerCardProps {
  title: string;
  description: string;
  image: string;
}

export const BannerCard = ({ title, description, image }: BannerCardProps) => {
  return (
    <View style={styles.container}>
      <Image
        source={bannerImages[image as keyof typeof bannerImages]}
        style={styles.image}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <Text style={styles.description}>{description}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: 300,
    height: 200,
    position: 'relative',
  },
  image: {
    width: '100%',
    height: '100%',
    borderRadius: 15,
  },
  content: {
    gap: 5,
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    padding: 20,
  },
  title: {
    fontSize: 16,
    color: 'white',
    fontWeight: 'bold',
  },
  description: {
    fontSize: 14,
    color: 'white',
  },
});
