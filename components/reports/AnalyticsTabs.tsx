import React, { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";
import InventorySection from "./InventorySection";
import OverviewSection from "./OverviewSection";
import ProfitSection from "./ProfitSection";
import SalesSection from "./SalesSection";

const AnalyticsTabs = () => {
  const [activeTab, setActiveTab] = useState("Sales");
  const tabs = ["overview", "Sales", "Inventory", "Profit"];

  // Helper to render sections
  const renderContent = () => {
    switch (activeTab) {
      case "overview":
        return <OverviewSection />;
      case "Sales":
        return <SalesSection />;
      case "Inventory":
        return <InventorySection />;
      case "Profit":
        return <ProfitSection />;
      default:
        return null;
    }
  };

  return (
    <View className="flex-1 bg-gray-100">
      {/* Toggler Bar */}
      <View className="px-4 -mt-6">
        {/* Pulls up slightly into the purple header */}
        <View className="bg-white rounded-2xl flex-row justify-between items-center px-2 py-1 shadow-sm h-14">
          {tabs.map((tab) => {
            const isActive = activeTab === tab;
            return (
              <TouchableOpacity
                key={tab}
                onPress={() => setActiveTab(tab)}
                className="flex-1 items-center justify-center h-full"
              >
                <Text
                  className={`capitalize font-bold text-base ${
                    isActive ? "text-[#7B4DFF]" : "text-slate-400"
                  }`}
                >
                  {tab}
                </Text>
                {/* Active Indicator Line */}
                {isActive && (
                  <View className="absolute bottom-0 w-10 h-[3px] bg-[#7B4DFF] rounded-t-full" />
                )}
              </TouchableOpacity>
            );
          })}
        </View>
      </View>

      {/* Content Section */}
      <ScrollView className="flex-1 p-6">{renderContent()}</ScrollView>
    </View>
  );
};

// Simple placeholder for sections
const SectionPlaceholder = ({
  title,
  color,
}: {
  title: string;
  color: string;
}) => (
  <View
    className={`p-10 rounded-3xl border-2 border-dashed border-gray-300 ${color} items-center`}
  >
    <Text className="text-gray-500 font-medium">{title} Section</Text>
  </View>
);

export default AnalyticsTabs;
