import { View, Text, TextInput } from 'react-native';

type Props = {
  label?: string,
  placeholder: string;
  value?: string;
  onChange: (value: string) => void;
};

export default function InputCustom({ label, placeholder, value, onChange }: Props) {
  return (
    <View>
      <Text className="text-lg font-semibold text-azul-escuro mb-1">{label}</Text>
      <TextInput
        placeholder={placeholder}
        value={value}
        className="border-2 px-2.5 rounded-lg border-azul-escuro text-base placeholder:text-neutral-600"
        onChangeText={onChange}
      />
    </View>
  );
}
