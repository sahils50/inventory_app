import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

type ActionItem = {
  id: number;
  title: string;
  icon: keyof typeof FontAwesome.glyphMap;
  route: string;
};

const actions: ActionItem[] = [
  {
    id: 1,
    title: "Scan & Bill",
    icon: "qrcode",
    route: "/(app)/(tabs)/home/ScanBill",
  },
  {
    id: 2,
    title: "Create Invoice",
    icon: "file-text",
    route: "/(app)/(tabs)/home/ScanBill",
  },
  {
    id: 3,
    title: "Add Stock",
    icon: "plus-square",
    route: "/(app)/(tabs)/inventory/",
  },
  {
    id: 4,
    title: "Reports",
    icon: "bar-chart",
    route: "/(app)/(tabs)/reports/",
  },
];

const QuickActions = () => {
  return (
    <View>
      <Text className="font-bold text-2xl mt-3 px-2">Quick Actions</Text>

      <View className="flex-row justify-between mt-2 p-2">
        {actions.map((item) => (
          <TouchableOpacity
            key={item.id}
            onPress={() => router.push(item.route)}
            className="items-center bg-white p-2 rounded-2xl shadow-md flex-1 mx-1"
          >
            <FontAwesome
              name={item.icon}
              size={26}
              color="#8A63F2"
              className="bg-purple-100 px-3 py-2 rounded-lg"
            />
            <Text className="text-sm text-center font-semibold text-gray-700 mt-2">
              {item.title}
            </Text>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default QuickActions;
