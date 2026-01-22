import AnalyticsTabs from "@/components/reports/AnalyticsTabs";
import ReportsHeader from "@/components/reports/ReportHeader";
import React from "react";
import { View } from "react-native";

export default function Home() {
  return (
    <View className="flex-1 bg-gray-100">
      <ReportsHeader />
      <AnalyticsTabs />
    </View>
  );
}
