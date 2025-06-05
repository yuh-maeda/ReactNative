import React from "react";
import { TextInput } from "react-native";

type Props = {
  value: string;
  onChangeText: (text: string) => void;
};

export default function SearchInput({ value, onChangeText }: Props) {
  return (
    <TextInput
      placeholder="Buscar nome..."
      value={value}
      onChangeText={onChangeText}
      className="border border-gray-300 rounded-lg px-4 py-2 mb-4 text-base"
      placeholderTextColor="#999"
    />
  );
}
