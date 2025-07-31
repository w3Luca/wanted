import { Pressable, PressableProps, Text, StyleSheet } from 'react-native';

interface TextButtonProps extends PressableProps {
  title: string;
}

export const TextButton = ({ title, ...props }: TextButtonProps) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.textButton, pressed && styles.pressed]}
      {...props}
    >
      <Text style={styles.text}>{title}</Text>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  textButton: {
    marginLeft: 8,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 16,
  },
  pressed: {
    opacity: 0.7,
  },
});
