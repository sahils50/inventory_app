import { Ionicons } from "@expo/vector-icons";
import { Href, useRouter } from "expo-router";
import type { ComponentProps } from "react";
import { Text, TouchableOpacity, View } from "react-native";

type IconName = ComponentProps<typeof Ionicons>["name"];

interface SettingsItemProps {
  icon: IconName;
  title: string;
  description?: string;
  onPress?: () => void;
  href?: Href;
  chevron?: boolean;
  disabled?: boolean;
}

export default function SettingsItem({
  icon,
  title,
  description,
  onPress,
  href,
  chevron = true,
  disabled = false,
}: SettingsItemProps) {
  const router = useRouter();

  const handlePress = () => {
    if (disabled) return;
    if (href) {
      router.push(href);
    } else if (onPress) {
      onPress();
    }
  };

  return (
    <TouchableOpacity
      onPress={handlePress}
      disabled={disabled}
      activeOpacity={0.7}
      className="active:opacity-70"
    >
      <View className="flex-row items-center justify-between bg-gray-100 px-5 py-4 rounded-xl my-1.5 mx-4 shadow-sm">
        {/* Icon + Text container */}
        <View className="flex-row items-start flex-1 gap-4">
          {/* Icon background */}
          <View className="bg-gray-200/70 p-3 rounded-full mt-0.5">
            <Ionicons name={icon} size={26} color="#4B5563" /> {/* gray-600 */}
          </View>

          {/* Title + Description */}
          <View className="flex-1 pr-3">
            <Text className="text-base font-medium text-gray-800">{title}</Text>
            {description && (
              <Text className="text-sm text-gray-500 mt-0.5 leading-5">
                {description}
              </Text>
            )}
          </View>
        </View>

        {/* Right side indicator */}
        {chevron && !disabled && (
          <Ionicons name="chevron-forward" size={20} color="#9CA3AF" /> // gray-400
        )}

        {disabled && (
          <Ionicons name="lock-closed-outline" size={20} color="#9CA3AF" />
        )}
      </View>
    </TouchableOpacity>
  );
}
