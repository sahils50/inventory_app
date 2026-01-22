import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const TwoFactoroff = () => {
  return (
    <View>
      <Text className="text-xl font-bold mb-2 text-red-600">
        Disable Two-Factor?
      </Text>

      <Text className="font-semibold text-lg">Enter Password To Conform</Text>

      <TextInput
        className="border border-gray-500 rounded-md px-2 py-2 mb-4"
        placeholder="Enter Your Password"
      />

      <View className="flex-row gap-5 mb-4">
        {/* Cancel Button */}
        <TouchableOpacity className="w-24 py-2 border border-purple-700 rounded-md items-center">
          <Text className="text-purple-700 text-sm font-semibold">Cancel</Text>
        </TouchableOpacity>

        {/* Disable Button */}
        <TouchableOpacity className="w-28 py-2 bg-purple-600 rounded-md items-center">
          <Text className="text-white text-sm font-semibold">Disable 2FA</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default TwoFactoroff;
