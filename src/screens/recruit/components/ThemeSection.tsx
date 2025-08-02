import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { ThemeCard } from '../../../components/Card/ThemeCard';

interface ThemeSectionProps {
  data: any[];
  title: string;
}

export const ThemeSection = ({ data, title }: ThemeSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map(item => (
          <ThemeCard key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    gap: 15,
  },
});
