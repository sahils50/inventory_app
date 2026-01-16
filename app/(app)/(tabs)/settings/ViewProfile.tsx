import ProfileCard from "@/components/setting/ProfileCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import {
    ScrollView,
    Text,
    TouchableOpacity,
    View
} from "react-native";

export default function ProfileInfoScreen() {
  return (
    <ScrollView className="flex-1 px-5 pt-6">
      <ProfileCard
        name="Rajesh Kumar"
        role="Store Owner"
        onEditPress={() => router.push("/(app)/(tabs)/settings/EditProfile")}
      />

      <View className="mb-8">
        <View className="flex-row items-center mb-4">
          <View className="bg-purple-100 p-3 rounded-full mr-3">
            <Ionicons name="person-outline" size={28} color="#7c3aed" />
          </View>
          <Text className="text-xl font-bold text-gray-800">
            Personal Information
          </Text>
        </View>

        <View className="bg-white rounded-2xl shadow-sm shadow-gray-200 overflow-hidden border border-gray-100">
          <InfoRow label="Name" value="Rajesh Kumar More" />
          <InfoRow label="Phone" value="+91 21321 12313" />
          <InfoRow label="Email" value="user@gmail.com" />
          <InfoRow label="Password" value="••••••••••" isLast showChange />
        </View>
      </View>

      {/* Shop Information Section */}
      <View className="mb-10">
        <View className="flex-row items-center mb-4">
          <View className="bg-purple-100 p-3 rounded-full mr-3">
            <Ionicons name="storefront-outline" size={28} color="#7c3aed" />
          </View>
          <Text className="text-xl font-bold text-gray-800">
            Shop Information
          </Text>
        </View>

        <View className="bg-white rounded-2xl shadow-sm shadow-gray-200 overflow-hidden border border-gray-100">
          <InfoRow label="Shop Name" value="Dana Bazar" />
          <InfoRow label="GSTIN" value="12JAB84897232H28" />
          <InfoRow
            label="Shop Address"
            value="......................."
            isLast
          />
        </View>
      </View>

      {/* Logout Button */}
      <TouchableOpacity
        activeOpacity={0.8}
        className={`
            bg-red-600 
            rounded-xl 
            py-4 
            flex-row items-center justify-center 
            gap-2 
            shadow-md shadow-red-600/30
            active:bg-red-700
            mx-4 mb-12
          `}
      >
        <Ionicons name="log-out-outline" size={22} color="white" />
        <Text className="text-white font-semibold text-lg">Logout</Text>
      </TouchableOpacity>
    </ScrollView>
  );
}

// Reusable Row Component
function InfoRow({
  label,
  value,
  isLast = false,
  showChange = false,
}: {
  label: string;
  value: string;
  isLast?: boolean;
  showChange?: boolean;
}) {
  return (
    <View
      className={`
        flex-row justify-between items-center 
        px-5 py-4
        ${isLast ? "" : "border-b border-gray-100"}
      `}
    >
      <Text className="text-gray-600 font-medium">{label}</Text>

      <View className="flex-row items-center">
        <Text className="text-gray-900 font-medium mr-3">{value}</Text>
        {showChange && (
          <TouchableOpacity>
            <Text className="text-purple-600 text-sm font-medium">Change</Text>
          </TouchableOpacity>
        )}
      </View>
    </View>
  );
}
