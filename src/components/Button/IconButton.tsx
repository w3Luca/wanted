import { PropsWithChildren } from 'react';
import { Pressable, StyleSheet, PressableProps, Text } from 'react-native';
import { colors } from '../../constants/theme/colors';

interface IconButtonProps extends PressableProps {
  title?: string;
}

export const IconButton = ({
  children,
  title,
  ...props
}: PropsWithChildren<IconButtonProps>) => {
  return (
    <Pressable
      style={({ pressed }) => [styles.iconButton, pressed && styles.pressed]}
      {...props}
    >
      {children}
      {title && <Text style={styles.title}>{title}</Text>}
    </Pressable>
  );
};

const styles = StyleSheet.create({
  iconButton: {
    padding: 6,
    borderRadius: 100,
    justifyContent: 'center',
    alignItems: 'center',
  },
  pressed: {
    backgroundColor: colors.gray50,
    opacity: 0.7,
  },
  title: {
    marginTop: 4,
    fontSize: 12,
    color: colors.gray200,
  },
});
