import SettingsItem from "@/components/common/ItemsCard";
import SettingsToggleItem from "@/components/common/ToggleItemCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, View } from "react-native";

export default function Privacy() {
  return (
    <ScrollView className="px-6 pt-8 pb-6">
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
      <SettingsToggleItem
        icon="megaphone-outline"
        title="Personalized Ads"
        description="Manage App Notifications"
        value={false}
        onValueChange={() => {}}
      />
      <SettingsToggleItem
        icon="location-outline"
        title="Location Service"
        description="Manage App Notifications"
        value={false}
        onValueChange={() => {}}
      />
      <SettingsToggleItem
        icon="camera-outline"
        title="Camera Access"
        description="Manage App Notifications"
        value={false}
        onValueChange={() => {}}
      />

      <SettingsItem
        icon="document-text-outline"
        title="Privacy Policy"
        description="Update your logging password"
        onPress={() => router.push("/(app)/(tabs)/settings/privacy/PrivacyPolicy")}
      />
      <SettingsItem
        icon="document-text-outline"
        title="Terms & Conditions"
        description="Update your logging password"
        onPress={() => router.push("/(app)/(tabs)/settings/privacy/TermNConditions")}
      />
      <SettingsItem
        icon="trash-outline"
        title="Delete Account Data"
        description="Update your logging password"
        onPress={() => router.push("/(app)/(tabs)/settings/privacy/DeleteAccountData")}
      />

      <SettingsItem
        icon="time-outline"
        title="Data Retention Period"
        description="Update your logging password"
        onPress={() => router.push("/(app)/(tabs)/settings/privacy/DataRetentionPolicy")}
      />
    </ScrollView>
  );
}
