import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

type CartItem = {
  id: number;
  name: string;
  qty: number;
};

const DATA: CartItem[] = [
  { id: 1, name: "Rice 1kg", qty: 1 },
  { id: 2, name: "Sugar 1kg", qty: 1 },
];

const Cart = () => {
  return (
    <View className="gap-4">
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

      {/* // open after scan */}
      <View
        className="bg-white rounded-3xl p-6 gap-4"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 6 },
          shadowOpacity: 0.18,
          shadowRadius: 10,
          elevation: 8,
        }}
      >
        {/* Header */}
        <View className="flex-row justify-between items-center">
          <Text className="text-lg font-bold text-gray-800">Cart Items</Text>

          <View className="bg-purple-100 px-4 py-1 rounded-full">
            <Text className="text-purple-700 font-semibold">
              {DATA.length} Items
            </Text>
          </View>
        </View>

        {/* Items */}
        {DATA.map((item) => (
          <View
            key={item.id}
            className="flex-row justify-between items-center border-b pb-3"
          >
            <Text className="flex-1 font-medium">{item.name}</Text>

            <View className="flex-row items-center gap-2">
              <TouchableOpacity className="bg-gray-200 px-3 py-1 rounded-lg">
                <Text>-</Text>
              </TouchableOpacity>

              <Text className="font-semibold">{item.qty}</Text>

              <TouchableOpacity className="bg-gray-200 px-3 py-1 rounded-lg">
                <Text>+</Text>
              </TouchableOpacity>

              <TouchableOpacity>
                <FontAwesome name="trash" size={18} color="#ef4444" />
              </TouchableOpacity>
            </View>
          </View>
        ))}
      </View>
    </View>
  );
};

export default Cart;
