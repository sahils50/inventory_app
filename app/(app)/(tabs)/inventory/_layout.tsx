import { Slot } from "expo-router";
import AppHeader from "@/components/common/AppHeader";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { View, TouchableOpacity, Text } from "react-native";

export default function InventoryLayout() {
  const data = [
    { num: "2", title: "Total Items" },
    { num: "2", title: "Low Stock" },
    { num: "1", title: "Out of Stock" },
    { num: "₹17.7k", title: "Total value" },
  ];

  return (
    <View className="flex-1 bg-gray-100">
      {/* HEADER */}
      <AppHeader
        title="Inventory"
        rightContent={
          <TouchableOpacity className="bg-white/20 p-3 rounded-full">
            <MaterialCommunityIcons
              name="account-circle-outline"
              size={28}
              color="white"
            />
          </TouchableOpacity>
        }
      >
        <View className="flex-row justify-center gap-2 px-2">
          {data.map((item, index) => (
            <View
              key={index}
              className="items-center justify-center gap-1 bg-amethyst_light rounded-lg px-3 py-2"
            >
              <Text className="text-white text-sm font-bold">{item.num}</Text>
              <Text className="text-white text-xs">{item.title}</Text>
            </View>
          ))}
        </View>
      </AppHeader>

      {/* 👇 THIS IS THE MOST IMPORTANT LINE */}
      <Slot />
    </View>
  );
}
