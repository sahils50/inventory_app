import {
  Feather,
  FontAwesome5,
  Ionicons,
  MaterialCommunityIcons,
} from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const InventorySection = () => {
  return (
    <ScrollView
      className="flex-1 space-y-4 pb-10"
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Inventory Overview Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-6">
          <MaterialCommunityIcons
            name="cart-outline"
            size={28}
            color="#7B4DFF"
          />
          <Text className="ml-2 text-xl font-bold text-[#7B4DFF]">
            Inventory Overview
          </Text>
        </View>

        {/* 2x2 Stat Grid */}
        <View className="flex-row flex-wrap justify-between">
          <InventoryStatCard
            title="Total Products"
            value="156"
            change="+12 this month"
            type="up"
          />
          <InventoryStatCard
            title="Low Stock Items"
            value="12"
            change="+3 from yesterday"
            type="up"
          />
          <InventoryStatCard
            title="Out of Stock"
            value="₹780"
            change="Needs attention"
            type="alert"
          />
          <InventoryStatCard
            title="Inv Stock Items"
            value="₹4,006"
            change="+5.8% from last month"
            type="up"
          />
        </View>
      </View>

      {/* 2. Stock Movement Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row justify-between items-center mb-4">
          <View className="flex-row items-center">
            <MaterialCommunityIcons
              name="swap-horizontal"
              size={24}
              color="#7B4DFF"
            />
            <Text className="ml-2 text-lg font-bold text-[#7B4DFF]">
              Stock Movement
            </Text>
          </View>
          <TouchableOpacity className="flex-row items-center border border-gray-200 rounded-full px-3 py-1">
            <Text className="text-gray-500 text-xs mr-1">Last 7 Day</Text>
            <Ionicons name="chevron-down" size={12} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Chart Area */}
        <View className="h-44 w-full bg-slate-50 rounded-xl items-center justify-center border border-dashed border-slate-200">
          <Text className="text-slate-400 font-medium text-center">
            Line Chart Visualization
          </Text>
          <View className="absolute bottom-2 flex-row w-full justify-around px-2">
            {["Day1", "Day2", "Day3", "Day4", "Day5", "Day6", "Day7"].map(
              (d) => (
                <Text key={d} className="text-[8px] text-gray-400">
                  {d}
                </Text>
              ),
            )}
          </View>
        </View>
      </View>

      {/* 3. Fast & Slow Movers Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-6">
          <MaterialCommunityIcons
            name="chart-bubble"
            size={24}
            color="#7B4DFF"
          />
          <Text className="ml-2 text-lg font-bold text-[#7B4DFF]">
            Fast & Slow Movers
          </Text>
        </View>

        <MoverItem
          name="Maggi Noodles"
          units="142"
          percent="+15%"
          status="fast"
        />
        <MoverItem
          name="Dairy Milk Chocolate"
          units="89"
          percent="-15%"
          status="fast"
        />
        <MoverItem
          name="Nescafe Coffee"
          units="67"
          percent="-5%"
          status="slow"
        />
        <MoverItem name="Lays Chips" units="46" percent="+8%" status="fast" />
      </View>
    </ScrollView>
  );
};

// --- Sub-components ---

const InventoryStatCard = ({ title, value, change, type }: any) => (
  <View className="bg-white w-[48%] p-4 rounded-2xl mb-4 shadow-sm border border-gray-50">
    <Text className="text-gray-400 text-xs font-semibold mb-2">{title}</Text>
    <Text className="text-2xl font-bold text-gray-800 mb-2">{value}</Text>
    <View className="flex-row items-center">
      {type === "alert" ? (
        <Ionicons name="alert-circle" size={14} color="#ef4444" />
      ) : (
        <Feather name="arrow-up" size={14} color="#10b981" />
      )}
      <Text
        className={`ml-1 text-[10px] font-medium ${
          type === "alert" ? "text-rose-500" : "text-emerald-500"
        }`}
      >
        {change}
      </Text>
    </View>
  </View>
);

const MoverItem = ({ name, units, percent, status }: any) => (
  <View className="flex-row items-center justify-between py-3">
    <View className="flex-row items-center flex-1">
      <View className="w-10 items-center justify-center">
        {status === "fast" ? (
          <FontAwesome5 name="bolt" size={20} color="#7B4DFF" />
        ) : (
          <MaterialCommunityIcons
            name="trending-down"
            size={22}
            color="#7B4DFF"
          />
        )}
      </View>
      <View className="ml-2">
        <Text className="text-gray-800 font-bold text-base">{name}</Text>
        <Text className="text-gray-400 text-xs">{units} units sold</Text>
      </View>
    </View>
    <Text
      className={`font-bold text-base ${
        percent.startsWith("+") ? "text-emerald-500" : "text-rose-500"
      }`}
    >
      {percent}
    </Text>
  </View>
);

export default InventorySection;
