import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const SalesSection = () => {
  return (
    <ScrollView
      className="flex-1 space-y-6 pb-10"
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Sales Report Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row justify-between items-center mb-6">
          <View className="flex-row items-center">
            <View className="bg-indigo-100 p-2 rounded-xl mr-2">
              <MaterialCommunityIcons
                name="cart-outline"
                size={24}
                color="#7B4DFF"
              />
            </View>
            <Text className="text-xl font-bold text-[#7B4DFF]">
              Sales Report
            </Text>
          </View>

          {/* Dropdown Selector Placeholder */}
          <TouchableOpacity className="flex-row items-center border border-gray-200 rounded-full px-4 py-1">
            <Text className="text-gray-600 mr-2 text-sm font-medium">
              Today
            </Text>
            <Ionicons name="chevron-down" size={16} color="gray" />
          </TouchableOpacity>
        </View>

        {/* Bar Chart Visualization Placeholder */}
        <View className="flex-row items-end justify-between h-48 px-2">
          <Bar height="h-[60%]" label="Week1" />
          <Bar height="h-[80%]" label="Week2" />
          <Bar height="h-[55%]" label="Week3" />
          <Bar height="h-[100%]" label="Week4" isHighest />
        </View>
      </View>

      {/* 2. Sales Summary Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-8">
          <View className="bg-indigo-100 p-2 rounded-xl mr-2">
            <MaterialCommunityIcons
              name="file-document-outline"
              size={24}
              color="#7B4DFF"
            />
          </View>
          <Text className="text-xl font-bold text-[#7B4DFF]">
            Sales Summary
          </Text>
        </View>

        {/* Summary Metrics */}
        <SummaryItem
          label="Total Sales"
          value="₹28,450"
          change="+15.2% from last period"
          isPositive
        />
        <SummaryItem
          label="Average Order Value"
          value="₹592"
          change="+7.8% from last period"
          isPositive
        />
        <SummaryItem
          label="Conversion Rate"
          value="68%"
          change="-2.3% from last period"
          isPositive={false}
          noBorder
        />
      </View>
    </ScrollView>
  );
};

// --- Sub-components ---

const Bar = ({ height, label, isHighest }: any) => (
  <View className="items-center flex-1">
    <View
      className={`w-12 ${height} bg-[#7B4DFF] rounded-t-xl ${isHighest ? "opacity-100" : "opacity-80"}`}
    />
    <Text className="text-gray-400 text-[10px] mt-2 font-medium">{label}</Text>
  </View>
);

const SummaryItem = ({ label, value, change, isPositive, noBorder }: any) => (
  <View className={`mb-6 ${!noBorder ? "border-b border-gray-100 pb-6" : ""}`}>
    <Text className="text-gray-400 text-sm font-medium mb-1">{label}</Text>
    <Text className="text-3xl font-bold text-gray-800 mb-2">{value}</Text>
    <View className="flex-row items-center">
      <Feather
        name={isPositive ? "arrow-up-right" : "arrow-down-right"}
        size={16}
        color={isPositive ? "#10b981" : "#ef4444"}
      />
      <Text
        className={`ml-1 text-sm font-medium ${isPositive ? "text-emerald-500" : "text-rose-500"}`}
      >
        {change}
      </Text>
    </View>
  </View>
);

export default SalesSection;
