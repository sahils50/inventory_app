// components/headers/AppHeader.tsx
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { Text, TouchableOpacity, View } from "react-native";

type AppHeaderProps = {
  title: string;
  showBack?: boolean; // Show back arrow on left
  rightContent?: "search-help" | "none" | React.ReactNode; // Flexible right side
  onBackPress?: () => void; // Optional custom back handler
  containerClassName?: string; // Optional: override container styles (e.g., different color)
};

export default function AppHeader({
  title,
  showBack = false,
  rightContent = "search-help", // Default: show search + help
  onBackPress,
  containerClassName = "bg-amethyst px-6 pt-14 pb-6 rounded-b-3xl",
}: AppHeaderProps) {
  const router = useRouter();
  const handleBack = () => router.back();

  return (
    <View
      className={`flex-row items-center justify-between ${containerClassName}`}
    >
      {/* Left: Back Button */}
      <View className="w-10">
        {showBack && (
          <TouchableOpacity onPress={handleBack}>
            <MaterialCommunityIcons name="arrow-left" size={28} color="white" />
          </TouchableOpacity>
        )}
      </View>

      {/* Center: Title */}
      <Text className="text-white text-3xl font-bold flex-1 text-center">
        {title}
      </Text>

      {/* Right Side */}
      <View className="w-10 justify-center">
        {typeof rightContent === "string" ? (
          rightContent === "search-help" ? (
            <View className="flex-row items-center space-x-4">
              <TouchableOpacity className="bg-white/20 p-3 rounded-full">
                <MaterialCommunityIcons
                  name="magnify"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
              <TouchableOpacity className="bg-white/20 p-3 rounded-full">
                <MaterialCommunityIcons
                  name="help-circle-outline"
                  size={24}
                  color="white"
                />
              </TouchableOpacity>
            </View>
          ) : null // "none" → nothing
        ) : (
          rightContent // Custom React node
        )}
      </View>
    </View>
  );
}
