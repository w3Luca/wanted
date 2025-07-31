import { ScrollView, StyleSheet, Text, View } from 'react-native';
import { JobCard } from '../../../components/Card/JobCard';

interface JobSectionProps {
  data: any[];
  title: string;
}

export const JobSection = ({ data, title }: JobSectionProps) => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <ScrollView
        horizontal
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={styles.scrollContainer}
      >
        {data.map(item => (
          <JobCard key={item.title} {...item} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    gap: 15,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  scrollContainer: {
    gap: 15,
  },
});
