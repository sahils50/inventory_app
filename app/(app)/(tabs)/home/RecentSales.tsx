import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'


type SaleItem = {
  id: number;
  customer: string;
  time: string;
  items: number;
  amount: number;
};

const recentSales: SaleItem[] = [
  { id: 1, customer: "Rahul Sharma", time: "10:45 AM", items: 3, amount: 1250 },
  { id: 2, customer: "Priya Verma", time: "11:20 AM", items: 5, amount: 1980 },
  { id: 3, customer: "Amit Patel", time: "12:05 PM", items: 2, amount: 640 },
];


const RecentSales = () => {
  return (
    <View>
      <View className="p-3">
        <View className="flex flex-row justify-between pr-2">
          <Text className="font-bold text-2xl mt-2 px-2">Recent Sales</Text>
          <TouchableOpacity>
            <Text className="mt-3 text-purple-600 font-bold">See All</Text>
          </TouchableOpacity>
        </View>

        <View
          className="bg-white rounded-2xl p-4 shadow-md mt-4"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          {recentSales.map((sale, index) => (
            <View
              key={sale.id}
              className={`flex-row justify-between items-center py-3 ${
                index !== recentSales.length - 1
                  ? "border-b border-gray-200"
                  : ""
              }`}
            >
              <View>
                <Text className="text-md font-semibold text-gray-800">
                  {sale.customer}
                </Text>

                <View className="flex-row mt-1">
                  <Text className="text-xs text-gray-500">{sale.time}</Text>
                  <Text className="text-xs text-gray-500 mx-2">•</Text>
                  <Text className="text-xs text-gray-500">
                    {sale.items} Items
                  </Text>
                </View>
              </View>

              <Text className="text-base font-bold text-green-600">
                ₹ {sale.amount}
              </Text>
            </View>
          ))}
        </View>
      </View>
    </View>
  );
}

export default RecentSales