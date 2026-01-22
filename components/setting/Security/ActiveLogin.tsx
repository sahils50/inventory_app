import { View, Text } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

const ActiveLogin = () => {
  return (
    <View>
      <Text className="text-xl font-bold mb-2">Active Sessions</Text>
      <Text className="text-gray-600 mb-4">2 devices currently logged in.</Text>

      <View className="flex-row items-center gap-4 p-4 mb-4 bg-white rounded-xl border border-gray-200 shadow-sm">
        {/* Icon */}
        <View className="bg-gray-100 w-12 h-12 rounded-lg items-center justify-center">
          <FontAwesome name="mobile" size={24} color="#4b5563" />
        </View>

        {/* Text */}
        <View className="flex-1">
          <Text className="font-semibold text-lg text-gray-900">iPhone 13</Text>
          <Text className="text-gray-500 text-sm mt-1">
            Active • Last used 2 hours ago
          </Text>
        </View>

        {/* Status */}
        <View className="bg-green-100 px-3 py-1 rounded-full">
          <Text className="text-green-700 text-xs font-semibold">ACTIVE</Text>
        </View>
      </View>
    </View>
  );
};

export default ActiveLogin;
