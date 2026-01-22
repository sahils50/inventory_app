import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Text, TouchableOpacity, View } from "react-native";

const ReportsHeader = () => {
  return (
    <View className="bg-[#7B4DFF] pt-16 pb-10 px-6 overflow-hidden relative">
      {/* Decorative Circle in Top Right */}
      <View className="absolute -top-10 -right-10 w-48 h-48 bg-white/20 rounded-full" />

      {/* Top Row: Title and Profile */}
      <View className="flex-row justify-between items-start mb-12">
        <Text className="text-white text-4xl font-bold max-w-[250px]">
          Reports & Analytics
        </Text>
        <TouchableOpacity>
          <Ionicons name="person-circle-outline" size={44} color="white" />
        </TouchableOpacity>
      </View>

      {/* Date Navigation Section */}
      <View className="flex-row justify-between items-center">
        {/* Left Arrow */}
        <TouchableOpacity className="bg-white/30 p-3 rounded-full">
          <Ionicons name="chevron-back" size={24} color="white" />
        </TouchableOpacity>

        {/* Date Text */}
        <View className="items-center">
          <Text className="text-white text-2xl font-semibold">Today</Text>
          <Text className="text-white/80 text-base">
            Tuesday, 9 December 2025
          </Text>
        </View>

        {/* Right Arrow */}
        <TouchableOpacity className="bg-white/30 p-3 rounded-full">
          <Ionicons name="chevron-forward" size={24} color="white" />
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default ReportsHeader;
