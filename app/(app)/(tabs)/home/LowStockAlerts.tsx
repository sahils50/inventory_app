import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesome } from '@expo/vector-icons';


type LowStockItem = {
  id: number;
  name: string;
  stock: number;
};

const lowStockData: LowStockItem[] = [
  { id: 1, name: "Maggie Noodles", stock: 2 },
  { id: 2, name: "Sunflower Oil", stock: 1 },
  { id: 3, name: "Sugar 1kg", stock: 3 },
];

const LowStockAlerts = () => {
  return (
    <View>
      <View className="p-2">
        <View className="flex flex-row justify-between pr-2">
          <Text className="font-bold text-2xl mt-2 px-2">Low Stock Alerts</Text>
          <TouchableOpacity>
            <Text className="mt-3 text-purple-600 font-bold">See All</Text>
          </TouchableOpacity>
        </View>
        <View
          className="bg-white rounded-2xl p-3 shadow-md mt-3 mx-2 "
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.12,
            shadowRadius: 8,
            elevation: 5,
          }}
        >
          {lowStockData.map((item, index) => (
            <View
              key={item.id}
              className={`flex-row items-center  py-4 ${
                index !== lowStockData.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              {/* Icon */}
              <View className="bg-red-100 p-3 rounded-full mr-4 ">
                <FontAwesome
                  name="exclamation-triangle"
                  size={20}
                  color="#DC2626"
                />
              </View>

              {/* Text */}
              <View className="flex-1">
                <Text className="text-base font-semibold text-gray-800">
                  {item.name}
                </Text>
                <Text className="text-xs text-red-600 mt-1">
                  Stock: {item.stock} Packs
                </Text>
              </View>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default LowStockAlerts