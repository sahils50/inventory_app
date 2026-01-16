import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from "react";

const TwoFactoron = () => {
  return (
    <View>
      <Text className="text-xl font-bold mb-2 text-purple-700">
        Two-Factor Authentication
      </Text>
      <Text className="font-semibold text-lg">SMS Text Message</Text>
      <Text className="text-gray-600 mb-3 text-sm">Get Code via SMS.</Text>

      <TextInput
        className="border border-gray-500 rounded-md px-2 py-2 mb-4"
        placeholder="Enter Your Phone Number"
      />

      <Text className="text-xl font-semibold mb-2">Verification Code</Text>

      <View className="flex flex-row gap-2">
        <TextInput
          className="border border-gray-500 rounded-md px-2 py-2 mb-4 w-30"
          placeholder="Enter Code"
        />

        <TextInput
          className="border border-gray-500 rounded-md px-2 py-2 mb-4 w-24"
          placeholder="Send Code"
        />
      </View>

      <TouchableOpacity className="px-2 py-3 bg-purple-600 rounded-md mb-3 ">
        <Text className="text-white text-center">
          Enable Two-Factor Authentication
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default TwoFactoron;
