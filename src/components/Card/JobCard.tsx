import { Image, Pressable, StyleSheet, Text, View } from 'react-native';
import { colors } from '../../constants/theme/colors';
import Ionicons from 'react-native-vector-icons/Ionicons';

const jobImages = {
  job1: require('../../assets/images/job1.webp'),
  job2: require('../../assets/images/job2.webp'),
  job3: require('../../assets/images/job3.webp'),
  job4: require('../../assets/images/job4.webp'),
  job5: require('../../assets/images/job5.webp'),
  job6: require('../../assets/images/job6.webp'),
  job7: require('../../assets/images/job7.webp'),
  job8: require('../../assets/images/job8.webp'),
  job9: require('../../assets/images/job9.webp'),
  job10: require('../../assets/images/job10.webp'),
  job11: require('../../assets/images/job11.webp'),
  job12: require('../../assets/images/job12.webp'),
};

interface JobCardProps {
  title: string;
  company: string;
  info: string;
  image: string;
}

export const JobCard = ({ title, company, info, image }: JobCardProps) => {
  return (
    <Pressable>
      <View style={styles.imageContainer}>
        <Image
          source={jobImages[image as keyof typeof jobImages]}
          style={styles.image}
          resizeMode="cover"
        />

        <View style={styles.overlay}>
          <Text style={styles.badgeText}>합격보상금 </Text>
          <Text style={styles.badgeText}>100만원</Text>
        </View>

        <Pressable style={styles.bookmark}>
          <Ionicons name="bookmark-outline" size={20} color={colors.white} />
        </Pressable>

        <View style={styles.content}>
          <Text style={styles.title}>{title}</Text>

          <View style={styles.info}>
            <Text style={styles.infoText}>{company}</Text>
            <Text style={styles.infoText}>{info}</Text>
          </View>
        </View>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  imageContainer: {
    position: 'relative',
    gap: 10,
    width: 140,
    height: 220,
  },
  image: {
    width: '100%',
    height: 110,
    borderRadius: 15,
  },
  overlay: {
    position: 'absolute',
    top: 8,
    left: 8,
    right: 8,
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  badgeText: {
    color: colors.white,
    fontSize: 12,
    fontWeight: 'bold',
  },
  content: {
    gap: 10,
  },
  bookmark: {
    position: 'absolute',
    top: 10,
    right: 10,
  },
  title: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  info: {
    gap: 5,
  },
  infoText: {
    color: colors.gray200,
  },
});
