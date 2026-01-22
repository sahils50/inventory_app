import { Feather, Ionicons, MaterialCommunityIcons } from "@expo/vector-icons";
import React from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

const ProfitSection = () => {
  return (
    <ScrollView
      className="flex-1 space-y-4 pb-10"
      showsVerticalScrollIndicator={false}
    >
      {/* 1. Stock Movement (Profit Focus) */}
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

        {/* Profit Line Chart Visualization Placeholder */}
        <View className="h-44 w-full bg-slate-50 rounded-xl items-center justify-center border border-dashed border-slate-200">
          <Text className="text-slate-400 font-medium">
            Line Chart Visualization
          </Text>
          <View className="absolute bottom-2 flex-row w-full justify-around px-4">
            {["Jan", "Feb", "Mar", "Apr", "May", "June", "July"].map((m) => (
              <Text key={m} className="text-[10px] text-gray-400">
                {m}
              </Text>
            ))}
          </View>
        </View>
      </View>

      {/* 2. Profit by Category Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-6">
          <MaterialCommunityIcons name="chart-pie" size={24} color="#7B4DFF" />
          <Text className="ml-2 text-lg font-bold text-[#7B4DFF]">
            Profit by Category
          </Text>
        </View>

        {/* Pie Chart Placeholder */}
        <View className="items-center justify-center mb-8">
          <View className="w-48 h-48 rounded-full bg-[#7B4DFF] overflow-hidden relative">
            {/* Visual segments representation */}
            <View className="absolute top-0 right-0 w-24 h-24 bg-emerald-400" />
            <View className="absolute bottom-0 left-0 w-32 h-32 bg-rose-400" />
            <View className="absolute bottom-0 right-0 w-24 h-24 bg-emerald-300" />
          </View>
        </View>

        {/* Profit Legend */}
        <View className="space-y-4">
          <ProfitRow
            label="Food Items"
            value="₹16,250"
            margin="38% margin"
            color="bg-indigo-600"
          />
          <ProfitRow
            label="Beverages"
            value="₹11,980"
            margin="25% margin"
            color="bg-emerald-400"
          />
          <ProfitRow
            label="Personal Care"
            value="₹7,700"
            margin="18% margin"
            color="bg-rose-400"
          />
          <ProfitRow
            label="Snacks"
            value="₹4,280"
            margin="10% margin"
            color="bg-amber-500"
          />
          <ProfitRow
            label="Cleaning"
            value="₹2,570"
            margin="6% margin"
            color="bg-emerald-500"
          />
        </View>
      </View>

      {/* 3. % Profit Margins Card */}
      <View className="bg-white rounded-3xl p-5 shadow-sm border border-gray-100">
        <View className="flex-row items-center mb-6">
          <Text className="text-lg font-bold text-[#7B4DFF]">
            % Profit Margins
          </Text>
        </View>

        <MarginCard
          title="Overall Profit Margin"
          value="24.8%"
          change="+15.2% from last period"
        />
        <MarginCard
          title="Gross Profit"
          value="₹42,850"
          change="+18.5% from last period"
        />
        <MarginCard
          title="Net Profit"
          value="₹32,120"
          change="+14.2% from last period"
          isLast
        />
      </View>
    </ScrollView>
  );
};

// --- Helper Components ---

const ProfitRow = ({ label, value, margin, color }: any) => (
  <View className="flex-row items-center justify-between py-2 border-b border-gray-50">
    <View className="flex-row items-center">
      <View className={`w-3 h-3 rounded-full ${color} mr-3`} />
      <Text className="text-slate-700 font-bold">{label}</Text>
    </View>
    <View className="items-end">
      <Text className="text-indigo-600 font-bold">{value}</Text>
      <Text className="text-slate-400 text-[10px]">{margin}</Text>
    </View>
  </View>
);

const MarginCard = ({ title, value, change, isLast }: any) => (
  <View
    className={`p-4 rounded-2xl bg-white border border-gray-100 shadow-sm ${!isLast ? "mb-4" : ""}`}
  >
    <Text className="text-gray-400 text-sm font-medium mb-1">{title}</Text>
    <Text className="text-2xl font-bold text-gray-800 mb-2">{value}</Text>
    <View className="flex-row items-center">
      <Feather name="arrow-up" size={14} color="#10b981" />
      <Text className="ml-1 text-[10px] font-medium text-emerald-500">
        {change}
      </Text>
    </View>
  </View>
);

export default ProfitSection;
