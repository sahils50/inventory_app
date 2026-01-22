import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const LoginHistory = () => {
  return (
    <View>
      <Text className="text-xl font-bold mb-2">Login History</Text>

      <View className="flex-row items-center gap-4 p-4 mb-4 bg-white rounded-xl border border-gray-200 shadow-sm">
        {/* Icon */}
        <View className="bg-gray-100 w-12 h-12 rounded-lg items-center justify-center">
          <FontAwesome name="mobile" size={24} color="#4b5563" />
        </View>

        {/* Text */}
        <View className="flex-1">
          <Text className="font-semibold text-lg text-gray-900">iPhone 13</Text>
          <Text className="text-gray-500 text-sm mt-1">
            Active • Jan 14, 2026 • Pune, India
          </Text>
        </View>

        {/* Status */}
      </View>

      <View className="flex-row items-center gap-4 p-4 mb-4 bg-white rounded-xl border border-gray-200 shadow-sm">
        {/* Icon */}
        <View className="bg-gray-100 w-12 h-12 rounded-lg items-center justify-center">
          <FontAwesome name="mobile" size={24} color="#4b5563" />
        </View>

        {/* Text */}
        <View className="flex-1">
          <Text className="font-semibold text-lg text-gray-900">iPhone 13</Text>
          <Text className="text-gray-500 text-sm mt-1">
            Active • Jan 14, 2026 • Pune, India
          </Text>
        </View>
      </View>
      <TouchableOpacity className="px-2 py-2 bg-purple-600 rounded-md  text-center  mb-4">
        <Text className="text-white text-center"> Clear History</Text>
      </TouchableOpacity>
    </View>
  );
};

export default LoginHistory;
