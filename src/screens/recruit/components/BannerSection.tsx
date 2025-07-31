import { ScrollView, StyleSheet } from 'react-native';
import { BannerCard } from '../../../components/Card/BannerCard';

interface BannerSectionProps {
  data: any[];
}

export const BannerSection = ({ data }: BannerSectionProps) => {
  return (
    <ScrollView
      horizontal
      showsHorizontalScrollIndicator={false}
      contentContainerStyle={styles.scrollContainer}
    >
      {data.map(item => (
        <BannerCard key={item.title} {...item} />
      ))}
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  scrollContainer: {
    gap: 15,
  },
});
