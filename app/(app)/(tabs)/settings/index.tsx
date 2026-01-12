import SettingsItem from "@/components/common/ItemsCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Setting() {
  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <ScrollView className="flex-1">
        {/* Header */}
        <TouchableOpacity
          activeOpacity={0.8}
          className={`
            mb-4 mx-5 
            rounded-2xl 
            bg-white 
            border border-gray-200/70
            shadow-lg shadow-black/10           
            elevation-3                          
          `}
        >
          <View className="px-6 pt-8 pb-6">
            <View className="flex-row items-center mb-2">
              <View className="bg-violet-100 p-3 rounded-full mr-3">
                <Ionicons name="settings-sharp" size={28} color="#8B5CF6" />
              </View>
              <Text className="text-2xl font-bold text-gray-900">
                Account Settings
              </Text>
            </View>
            <Text className="text-gray-600 mt-1">
              Manage your profile and security preferences
            </Text>
          </View>

          {/* Cards */}
          <View className="pb-10">
            <SettingsItem
              icon="person-outline"
              title="Edit Profile"
              description="Update your personal information"
              onPress={() => router.push("/(app)/(tabs)/settings/EditProfile")}
            />

            <SettingsItem
              icon="key-outline"
              title="Change Password"
              description="Update your logging password"
              onPress={() =>
                router.push("/(app)/(tabs)/settings/ChangePassword")
              }
            />

            <SettingsItem
              icon="shield-checkmark-outline"
              title="Security"
              description="Two-factor authentication, login history"
              onPress={() => router.push("/(app)/(tabs)/settings/Security")}
            />

            <SettingsItem
              icon="lock-closed-outline"
              title="Privacy"
              description="Control your data & privacy settings"
              onPress={() => router.push("/(app)/(tabs)/settings/privacy")}
            />
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
