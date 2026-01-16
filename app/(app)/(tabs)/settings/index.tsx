import SettingsItem from "@/components/common/ItemsCard";
import SettingsToggleItem from "@/components/common/ToggleItemCard";
import ProfileCard from "@/components/setting/ProfileCard";
import { Ionicons } from "@expo/vector-icons";
import { router } from "expo-router";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

export default function Setting() {
  return (
    <View className="flex-1 bg-white">
      <ScrollView className="flex-1" contentContainerStyle={{ paddingTop: 20 }}>
        <ProfileCard
          name="Rajesh Kumar"
          role="Store Owner"
          onEditPress={() => router.push("/(app)/(tabs)/settings/EditProfile")}
        />
        <TouchableOpacity
          activeOpacity={0.8}
          className={`
            mb-4 mx-5 
            rounded-2xl 
            bg-white 
            border border-gray-200/70
            shadow-lg shadow-black/10           
            elevation-3`}
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
              title="View Profile"
              description="View & Update your personal information"
              onPress={() => router.push("/(app)/(tabs)/settings/ViewProfile")}
            />

            <SettingsItem
              icon="lock-closed-outline"
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
              icon="lock-open-outline"
              title="Privacy"
              description="Control your data & privacy settings"
              onPress={() => router.push("/(app)/(tabs)/settings/privacy")}
            />
          </View>
        </TouchableOpacity>
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
                <Ionicons
                  name="color-palette-outline"
                  size={28}
                  color="#8B5CF6"
                />
              </View>
              <Text className="text-2xl font-bold text-gray-900">
                App Settings
              </Text>
            </View>
          </View>
          {/* Cards */}
          <View className="pb-10">
            <SettingsToggleItem
              icon="notifications-outline"
              title="Push Notifications"
              description="Manage App Notifications"
              value={false}
              onValueChange={() => {}}
            />

            <SettingsItem
              icon="color-palette-outline"
              title="Apperance"
              description="Theme, font-size, display setting"
              onPress={() => router.push("/(app)/(tabs)/settings/Appearance")}
            />
          </View>
        </TouchableOpacity>
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
                <Ionicons name="cloud-outline" size={28} color="#8B5CF6" />
              </View>
              <Text className="text-2xl font-bold text-gray-900">
                Data Management
              </Text>
            </View>
          </View>

          {/* Cards */}
          <View className="pb-10">
            <SettingsItem
              icon="cloud-upload-outline"
              title="Backup & Restore"
              description="Backup your data to cloud"
            />
            <SettingsItem
              icon="download-outline"
              title="Export Data"
              description="Export reports and inventory data"
            />
            <SettingsItem
              icon="trash-outline"
              title="Clear Cache"
              description="Clear all cached data"
            />
          </View>
        </TouchableOpacity>
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
                <Ionicons
                  name="help-circle-outline"
                  size={28}
                  color="#8B5CF6"
                />
              </View>
              <Text className="text-2xl font-bold text-gray-900">Support</Text>
            </View>
          </View>

          {/* Cards */}
          <View className="pb-10">
            <SettingsItem
              icon="help-circle-outline"
              title="Help Center"
              description="FAQs and User Guides"
              onPress={() => router.push("/(app)/(tabs)/settings/HelpCenter")}
            />
            <SettingsItem
              icon="chatbubble-outline"
              title="Contact Support"
              description="Get Help from our support team"
              onPress={() =>
                router.push("/(app)/(tabs)/settings/ContactSupport")
              }
            />
            <SettingsItem
              icon="star-outline"
              title="Rate & Review"
              description="Share your feedback"
              onPress={() => router.push("/(app)/(tabs)/settings/Review")}
            />
            <SettingsItem
              icon="information-outline"
              title="About Us"
              description="Versions, Terms & Policies"
              onPress={() => router.push("/(app)/(tabs)/settings/Aboutus")}
            />
          </View>
        </TouchableOpacity>
        <View className="flex-1 items-center justify-center p-6">
          <TouchableOpacity
            activeOpacity={0.7}
            className={`
          flex-row items-center justify-center 
          bg-red-600 
          px-6 py-3.5 
          rounded-xl 
          shadow-md shadow-red-700/40
          active:bg-red-700
          w-[80%] max-w-[340px]   // ← optional: better mobile sizing
        `}
            onPress={() => console.log("Logging out...")}
          >
            <Ionicons
              name="log-out-outline"
              size={22}
              color="white"
              style={{ marginRight: 8 }}
            />
            <Text className="text-white font-medium text-base tracking-wide">
              Logout
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}
