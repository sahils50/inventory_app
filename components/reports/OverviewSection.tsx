import { Feather, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, View } from "react-native";

const OverviewSection = () => {
  return (
    <ScrollView
      className="flex-1 space-y-4 pb-10"
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Stat Grid (2x2) */}
      <View className="flex-row flex-wrap justify-between">
        <StatCard
          title="Today's Sales"
          value="₹8,450"
          change="+12.5%"
          icon="currency-eth"
        />
        <StatCard
          title="Today's Sales"
          value="₹2,120"
          change="+8.3%"
          icon="trending-up"
          isVector
        />
        <StatCard
          title="Customers"
          value="1,780"
          change="+6.7%"
          icon="account-group"
        />
        <StatCard
          title="Products Sold"
          value="4,006"
          change="+9.8%"
          icon="shopping"
        />
      </View>

      {/* 2. Sales Trend Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-4">
          <MaterialCommunityIcons
            name="chart-timeline-variant"
            size={24}
            color="#7B4DFF"
          />
          <Text className="ml-2 text-lg font-bold text-[#7B4DFF]">
            Sales Trend
          </Text>
        </View>
        {/* Placeholder for Line Chart */}
        <View className="h-40 w-full bg-slate-50 rounded-xl items-center justify-center border border-dashed border-slate-200">
          <Text className="text-slate-400">Line Chart Visualization</Text>
        </View>
      </View>

      {/* 3. Sales by Category Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-6">
          <MaterialCommunityIcons
            name="chart-donut"
            size={24}
            color="#7B4DFF"
          />
          <Text className="ml-2 text-lg font-bold text-[#7B4DFF]">
            Sales by Category
          </Text>
        </View>

        {/* Circular Chart Placeholder */}
        <View className="items-center justify-center mb-8">
          <View className="w-48 h-48 rounded-full border-[15px] border-[#7B4DFF] items-center justify-center relative">
            <View
              className="absolute inset-0 rounded-full border-[15px] border-emerald-400"
              style={{
                borderRightColor: "transparent",
                borderBottomColor: "transparent",
              }}
            />
            <View className="w-32 h-32 bg-white rounded-full shadow-inner" />
          </View>
        </View>

        {/* Category List */}
        <View className="space-y-4">
          <CategoryRow
            label="Food Items"
            value="₹28,450"
            percent="35%"
            color="bg-indigo-600"
          />
          <CategoryRow
            label="Beverages"
            value="₹19,800"
            percent="25%"
            color="bg-emerald-400"
          />
          <CategoryRow
            label="Personal Care"
            value="₹15,900"
            percent="35%"
            color="bg-rose-400"
          />
          <CategoryRow
            label="Snacks"
            value="₹9,550"
            percent="12%"
            color="bg-amber-500"
          />
          <CategoryRow
            label="Cleaning"
            value="₹7,150"
            percent="8%"
            color="bg-emerald-500"
          />
        </View>
      </View>
    </ScrollView>
  );
};

// --- Sub-components for cleaner code ---

const StatCard = ({ title, value, change, icon, isVector }: any) => (
  <View className="bg-white w-[48%] p-4 rounded-3xl mb-4 shadow-sm border border-gray-100">
    <View className="flex-row items-center mb-2">
      <View className="bg-slate-100 p-2 rounded-lg">
        {isVector ? (
          <Feather name={icon} size={16} color="#64748b" />
        ) : (
          <MaterialCommunityIcons name={icon} size={16} color="#64748b" />
        )}
      </View>
      <Text className="ml-2 text-slate-400 text-xs font-medium">{title}</Text>
    </View>
    <Text className="text-xl font-bold text-slate-800">{value}</Text>
    <View className="flex-row items-center mt-1">
      <Feather name="arrow-up-right" size={12} color="#10b981" />
      <Text className="text-emerald-500 text-[10px] ml-1">
        {change} from yesterday
      </Text>
    </View>
  </View>
);

const CategoryRow = ({ label, value, percent, color }: any) => (
  <View className="flex-row items-center justify-between py-2 border-b border-gray-50">
    <View className="flex-row items-center">
      <View className={`w-3 h-3 rounded-full ${color} mr-3`} />
      <Text className="text-slate-700 font-semibold">{label}</Text>
    </View>
    <View className="items-end">
      <Text className="text-indigo-600 font-bold">{value}</Text>
      <Text className="text-slate-400 text-[10px]">{percent} of total</Text>
    </View>
  </View>
);

export default OverviewSection;
