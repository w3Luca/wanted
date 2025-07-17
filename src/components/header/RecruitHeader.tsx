import { Text, TouchableOpacity, View } from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';

interface RecruitHeaderProps {
  onSearchPress?: () => void;
}

export const RecruitHeader = ({
  onSearchPress = () => console.log('검색 클릭'),
}: RecruitHeaderProps) => {
  return (
    <View>
      {/* Left : Title */}
      <View>
        <Text>채용</Text>
      </View>

      {/* Right : Search Button */}
      <View>
        <TouchableOpacity>
          <Ionicons name="search" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};
