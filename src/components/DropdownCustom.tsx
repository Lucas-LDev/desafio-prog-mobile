import React from 'react';
import { View, Text } from 'react-native';
import { Dropdown } from 'react-native-element-dropdown';
import tw from 'twrnc';

type Item = {
  label: string;
  value: string | number;
};

type Props = {
  label?: string;
  data: Item[];
  value: string | number | null;
  onChange: (value: string | number) => void;
};

export default function DropdownCustom({
  label,
  data,
  value,
  onChange,
}: Props) {
  return (
    <View className="w-full">
      <Text className="text-lg font-semibold text-azul-escuro mb-1">
        {label}
      </Text>
      <Dropdown
        style={[tw`border-2 px-2 rounded-lg h-12`, { borderColor: '#003B71' }]}
        placeholderStyle={tw`text-sm text-neutral-600`}
        selectedTextStyle={[tw`text-sm`, { lineHeight: 20 }]}
        containerStyle={[tw`border-2 rounded-lg`, { borderColor: '#003B71' }]}
        itemContainerStyle={[tw`border-b`, { borderColor: '#003B71' }]}
        activeColor="#0066CC"
        autoScroll={false}
        data={data}
        labelField="label"
        valueField="value"
        placeholder="Selecione uma opção..."
        value={value}
        onChange={(item) => onChange(item.value)}
      />
    </View>
  );
}
