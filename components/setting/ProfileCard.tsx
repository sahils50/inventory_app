// components/ProfileCard.tsx
import { Ionicons } from "@expo/vector-icons";
import { Text, TouchableOpacity, View } from "react-native";

interface ProfileCardProps {
  name?: string;
  role?: string;
  onEditPress?: () => void;
}

export default function ProfileCard({
  name = "Rajesh Kumar",
  role = "Store Owner",
  onEditPress,
}: ProfileCardProps) {
  return (
    <View className="items-center">
      <View
        className={`
          bg-amethyst 
          rounded-2xl 
          px-6 py-4 
          w-full max-w-[350px]
          shadow-lg shadow-purple-500/30
          flex-row 
          items-center
        `}
      >
        {/* Avatar / Icon */}
        <View className="w-14 h-14 bg-white/20 rounded-full items-center justify-center mr-4">
          <Ionicons name="person" size={32} color="white" />
        </View>

        {/* Name & Role */}
        <View className="flex-1">
          <Text
            className="text-white text-xl font-bold tracking-wide"
            numberOfLines={1}
          >
            {name}
          </Text>
          <Text className="text-purple-100 text-base font-medium mt-0.5">
            {role}
          </Text>
        </View>

        {/* Edit Button */}
        <TouchableOpacity
          onPress={onEditPress}
          activeOpacity={0.7}
          className="p-2 rounded-full bg-white/15"
        >
          <Ionicons name="pencil" size={22} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
}
