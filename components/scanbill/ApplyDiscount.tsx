import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const ApplyDiscount = () => {
  return (
    <View>
      <View
        className="bg-white rounded-2xl p-5 gap-4 mt-4"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.12,
          shadowRadius: 8,
          elevation: 6,
        }}
      >
        <Text className="text-lg font-bold text-gray-800">Apply Discount</Text>

        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
          <Text className="text-gray-500 font-semibold mr-2">%</Text>
          <TextInput
            placeholder="Discount Percentage"
            placeholderTextColor="#9ca3af"
            keyboardType="numeric"
            className="flex-1 text-gray-800"
          />
        </View>

        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
          <FontAwesome name="tag" size={18} color="#6b7280" />
          <TextInput
            placeholder="Enter Coupon Code"
            placeholderTextColor="#9ca3af"
            autoCapitalize="characters"
            className="flex-1 ml-3 text-gray-800"
          />
        </View>

        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
          <Text className="text-gray-500 font-semibold mr-2">₹</Text>
          <TextInput
            placeholder="Enter Discount Amount"
            placeholderTextColor="#9ca3af"
            keyboardType="numeric"
            className="flex-1 text-gray-800"
          />
        </View>

        <TouchableOpacity className="bg-purple-700 py-3 rounded-xl mt-2">
          <Text className="text-white text-center font-semibold text-base">
            Apply Discount
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ApplyDiscount