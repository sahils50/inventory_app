import { FontAwesome, Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";

interface HeaderProps {
  title: string;
  subheading: string;
  showBackButton?: boolean;
}

const Header: React.FC<HeaderProps> = ({
  title,
  subheading,
  showBackButton = true,
}) => {
  const router = useRouter();
  const insets = useSafeAreaInsets();

  return (
    <View className="bg-amethyst px-4" style={{ paddingTop: insets.top }}>
      <View className="flex-row items-center py-4">
        {showBackButton && (
          <TouchableOpacity onPress={() => router.back()} className="mr-4">
            <Ionicons name="arrow-back" size={24} color="white" />
          </TouchableOpacity>
        )}
        <View className="flex-1 flex-row justify-center items-center">
          <FontAwesome name="cube" size={24} color="white" />
          <Text className="text-white text-xl font-bold ml-2">ShopMart</Text>
        </View>
      </View>
      <Text className="text-white text-3xl font-bold text-center mb-2">
        {title}
      </Text>
      <Text className="text-white text-base text-center mb-6">
        {subheading}
      </Text>
    </View>
  );
};

export default Header;
