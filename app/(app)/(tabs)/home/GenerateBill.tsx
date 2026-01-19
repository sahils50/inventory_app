import { View, Text, ScrollView, TouchableOpacity } from "react-native";
import React from "react";

type BillItem = {
  id: number;
  name: string;
  price: number;
};

const ITEMS: BillItem[] = [
  { id: 1, name: "Rice 1kg", price: 120 },
  { id: 2, name: "Oil 1L", price: 180 },
  { id: 3, name: "Sugar 1kg", price: 100 },
];

const DISCOUNT_PERCENT = 10;
const GST_PERCENT = 5;

const GenerateBill: React.FC = () => {
  const subTotal = ITEMS.reduce((sum, item) => sum + item.price, 0);
  const discount = (subTotal * DISCOUNT_PERCENT) / 100;
  const gst = (subTotal * GST_PERCENT) / 100;
  const total = subTotal - discount + gst;

  return (
    <ScrollView className="flex-1 bg-white p-5 ">
      
      {/* Header */}
      <View className="border-b pb-3 mb-4">
        <Text className="text-xl font-bold text-center">ShopMart Store</Text>

        <View className="flex-row justify-between mt-2">
          <Text>Bill No: 1025</Text>
          <Text>{new Date().toLocaleDateString()}</Text>
        </View>

        <Text className="text-right text-gray-500">
          {new Date().toLocaleTimeString()}
        </Text>
      </View>

      {/* Items */}
      <View>
        <View className="flex-row justify-between border-b pb-2 mb-2">
          <Text className="font-semibold">Item</Text>
          <Text className="font-semibold">₹</Text>
        </View>

        {ITEMS.map((item) => (
          <View key={item.id} className="flex-row justify-between mb-1">
            <Text>{item.name}</Text>
            <Text>₹{item.price}</Text>
          </View>
        ))}
      </View>

      {/* Summary */}
      <View className="mt-4 border-t pt-3">
        <View className="flex-row justify-between mb-1">
          <Text>Subtotal</Text>
          <Text>₹{subTotal}</Text>
        </View>

        <View className="flex-row justify-between mb-1">
          <Text>Discount ({DISCOUNT_PERCENT}%)</Text>
          <Text>- ₹{discount}</Text>
        </View>

        <View className="flex-row justify-between mb-1">
          <Text>GST ({GST_PERCENT}%)</Text>
          <Text>₹{gst}</Text>
        </View>

        <View className="flex-row justify-between mt-2 border-t pt-2">
          <Text className="font-bold text-lg">Total</Text>
          <Text className="font-bold text-lg">₹{total}</Text>
        </View>

        <View className="flex-row justify-between mt-3">
          <Text>Payment</Text>
          <Text className="font-semibold">Cash</Text>
        </View>
      </View>

      {/* Buttons */}
      <View className="flex-row gap-3 mt-6">
        <TouchableOpacity className="flex-1 bg-indigo-600 py-3 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Print
          </Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-green-600 py-3 rounded-xl">
          <Text className="text-white text-center font-semibold">
            Complete Sale
          </Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default GenerateBill;
