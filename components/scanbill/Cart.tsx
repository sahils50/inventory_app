import { View, Text } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';

const Cart = () => {
  return (
    <View>
      <View
        className="bg-white rounded-3xl p-6 gap-5"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.18,
          shadowRadius: 10,
          elevation: 8,
        }}
      >
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-gray-800">Cart Items</Text>

          <View className="bg-purple-100 px-4 py-1 rounded-full">
            <Text className="text-purple-700 font-semibold">0 Items</Text>
          </View>
        </View>

        <View className="items-center mt-4">
          <View className="bg-purple-50 p-6 rounded-full">
            <FontAwesome name="shopping-cart" size={60} color="#7c3aed" />
          </View>
        </View>

        <Text className="text-center text-lg font-semibold text-gray-700">
          Your cart is empty
        </Text>

        <Text className="text-center text-gray-500 leading-5">
          Scan or search products to add items to your cart
        </Text>
      </View>
    </View>
  );
}

export default Cart