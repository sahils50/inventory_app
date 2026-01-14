import { Ionicons } from "@expo/vector-icons";
import {
  Text,
  TextInput,
  TouchableOpacity,
  View
} from "react-native";

export default function ChangePasswordScreen() {
  return (
      <View className="flex-1 px-6 pt-10 pb-12">
        {/* Header / Title */}
        <View className="items-center mb-10">
          <View className="bg-purple-100 p-4 rounded-full mb-4">
            <Ionicons name="lock-closed" size={40} color="#7c3aed" />
          </View>
          <Text className="text-2xl font-bold text-gray-800">
            Change Password
          </Text>
        </View>

        {/* Form */}
        <View className="space-y-6">
          {/* Current Password */}
          <View>
            <View className="flex-row justify-between items-center mb-1.5">
              <Text className="text-gray-700 font-medium">
                Current Password*
              </Text>
              <TouchableOpacity>
                <Text className="text-purple-600 text-sm font-medium">
                  Forgot Password?
                </Text>
              </TouchableOpacity>
            </View>
            <TextInput
              secureTextEntry
              placeholder="••••••••"
              className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* New Password */}
          <View>
            <Text className="text-gray-700 font-medium mb-1.5">
              New Password*
            </Text>
            <TextInput
              secureTextEntry
              placeholder="••••••••"
              className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
              placeholderTextColor="#9ca3af"
            />
            <Text className="text-gray-500 text-xs mt-1.5">
              Must be at least 8 characters with letters and numbers
            </Text>
          </View>

          {/* Confirm New Password */}
          <View>
            <Text className="text-gray-700 font-medium mb-1.5">
              Confirm New Password*
            </Text>
            <TextInput
              secureTextEntry
              placeholder="••••••••"
              className="bg-white border border-gray-300 rounded-lg px-4 py-3.5 text-base"
              placeholderTextColor="#9ca3af"
            />
          </View>

          {/* Submit Button */}
          <TouchableOpacity
            activeOpacity={0.8}
            className={`
              bg-purple-600 
              rounded-xl 
              py-4 
              mt-8 
              items-center 
              shadow-md 
              shadow-purple-500/30
              active:bg-purple-700
            `}
          >
            <Text className="text-white font-semibold text-lg">
              Update Password
            </Text>
          </TouchableOpacity>
        </View>
      </View>
  );
}
