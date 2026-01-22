import { Ionicons } from "@expo/vector-icons";
import type { ComponentProps } from "react";
import { Switch, Text, TouchableOpacity, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

interface SettingsToggleItemProps {
  icon: IconName;
  title: string;
  description?: string;
  value: boolean; // current toggle state
  onValueChange: (value: boolean) => void;
  disabled?: boolean;
}

export default function SettingsToggleItem({
  icon,
  title,
  description,
  value,
  onValueChange,
  disabled = false,
}: SettingsToggleItemProps) {
  return (
    <TouchableOpacity activeOpacity={0.8} disabled={disabled}>
      <View
        className={`
          flex-row items-center justify-between 
          bg-gray-100 
          px-5 py-4 
          rounded-xl 
          my-1.5 
          mx-4 
          shadow-sm
          ${disabled ? "opacity-60" : ""}
        `}
      >
        {/* Left side: icon + text */}
        <View className="flex-row items-start flex-1 gap-4">
          <View className="bg-gray-200/70 p-3 rounded-full mt-0.5">
            <Ionicons name={icon} size={26} color="#4B5563" />
          </View>

          <View className="flex-1 pr-4">
            <Text className="text-base font-medium text-gray-800">{title}</Text>
            {description && (
              <Text className="text-sm text-gray-500 mt-0.5 leading-5">
                {description}
              </Text>
            )}
          </View>
        </View>

        {/* Toggle on right */}
        <Switch
          value={value}
          onValueChange={onValueChange}
          disabled={disabled}
          trackColor={{ false: "#D1D5DB", true: "#6EE7B7" }}
          thumbColor={value ? "#10B981" : "#F3F4F6"}
          ios_backgroundColor="#D1D5DB"
        />
      </View>
    </TouchableOpacity>
  );
}
