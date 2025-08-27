import { TouchableOpacity, Text } from 'react-native';

type Props = {
  label: string;
  onPress: () => void;
};

export default function Button({ label, onPress }: Props) {
  return (
    <TouchableOpacity
      className="w-full rounded-full h-14 flex items-center mt-6 justify-center bg-azul-escuro"
      onPress={onPress}
    >
      <Text className="text-lg font-semibold text-branco">{label}</Text>
    </TouchableOpacity>
  );
}
