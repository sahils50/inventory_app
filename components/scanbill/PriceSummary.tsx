import { View, Text } from 'react-native'
import React from 'react'

const PriceSummary = () => {
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
        <Text className="text-lg font-bold text-gray-800">Price Summary</Text>

        <View className="flex-row justify-between">
          <Text className="text-gray-600">Subtotal</Text>
          <Text className="font-medium">₹1,200</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-green-600">Discount</Text>
          <Text className="text-green-600 font-medium">- ₹200</Text>
        </View>

        <View className="flex-row justify-between">
          <Text className="text-gray-600">GST (18%)</Text>
          <Text className="font-medium">₹180</Text>
        </View>

        <View className="border-t border-dashed border-gray-300 my-2" />

        <View className="flex-row justify-between">
          <Text className="text-lg font-bold">Total Amount</Text>
          <Text className="text-lg font-bold text-purple-700">₹1,180</Text>
        </View>
      </View>
    </View>
  );
}

export default PriceSummary