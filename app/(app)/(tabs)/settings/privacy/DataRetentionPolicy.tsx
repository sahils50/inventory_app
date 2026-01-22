import React, { useState } from "react";
import {
  SafeAreaView,
  View,
  Text,
  ScrollView,
  StatusBar,
  Pressable,
  TouchableOpacity,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

/* ================= TYPES ================= */

type RetentionOptionId = number | string;

interface RetentionOption {
  id: RetentionOptionId;
  title: string;
  heading: string;
  desc: string;
}

interface RetentionDataItem {
  category: string;
  period: string;
  basis: string;
}

/* ================= DATA ================= */

const retentionOptions: RetentionOption[] = [
  {
    id: 1,
    title: "3 Months",
    heading: "Short-term retention",
    desc: "Your inactive account data will be deleted after 3 months.",
  },
  {
    id: 2,
    title: "6 Months",
    heading: "Standard retention",
    desc: "We keep your data for 6 months before permanent deletion.",
  },
  {
    id: 3,
    title: "12 Months",
    heading: "Extended retention",
    desc: "Your data is stored securely for up to 1 year.",
  },
  {
    id: "4",
    title: "5 Year",
    heading: "Extended retention for compliance",
    desc: "Required for some regulatory requirements and audits.",
  },
  {
    id: "5",
    title: "Indefinite",
    heading: "Keep data until manually deleted",
    desc: "Data retained until you request deletion. Not recommended for privacy.",
  },
];

const retentionData: RetentionDataItem[] = [
  {
    category: "Account Information",
    period: "Until deletion request",
    basis: "Contract fulfillment",
  },
  {
    category: "Transaction Records",
    period: "7 years (legal requirement)",
    basis: "Tax compliance",
  },
  {
    category: "Inventory Data",
    period: "Based on your setting",
    basis: "Business operations",
  },
  {
    category: "Customer Data",
    period: "Based on your setting",
    basis: "Legitimate interest",
  },
  {
    category: "Usage Analytics",
    period: "2 years",
    basis: "Service improvement",
  },
];

/* ================= SCREEN ================= */

const DataRetentionScreen: React.FC = () => {
  const [selectedId, setSelectedId] = useState<RetentionOptionId | null>(null);

  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <ScrollView contentContainerStyle={{ padding: 24 }}>
        {/* Header */}
        <View className="mb-6">
          <Text className="text-xl font-extrabold text-purple-500">
            Data Retention Options
          </Text>
          <Text className="text-base font-medium text-gray-500 mt-1">
            Choose how long we retain your inactive account data:
          </Text>
        </View>

        {/* Options */}
        <View className="gap-y-4">
          {retentionOptions.map((item) => {
            const isSelected = selectedId === item.id;

            return (
              <Pressable
                key={item.id.toString()}
                onPress={() => setSelectedId(item.id)}
                className={`relative pl-8 pr-14 py-6 rounded-xl border-2 shadow-sm bg-white
                  ${
                    isSelected
                      ? "border-purple-500 bg-purple-100"
                      : "border-gray-200"
                  }`}
              >
                {/* Text Content */}
                <View>
                  <Text
                    numberOfLines={1}
                    className={`text-lg font-bold ${
                      isSelected ? "text-purple-700" : "text-gray-800"
                    }`}
                  >
                    {item.title}
                  </Text>

                  <Text
                    numberOfLines={1}
                    className={`mt-1 text-sm font-semibold ${
                      isSelected ? "text-purple-600" : "text-gray-600"
                    }`}
                  >
                    {item.heading}
                  </Text>

                  <Text
                    className={`mt-2 text-xs ${
                      isSelected ? "text-purple-600" : "text-gray-500"
                    }`}
                  >
                    {item.desc}
                  </Text>
                </View>

                {/* Check Icon */}
                {isSelected && (
                  <Ionicons
                    name="checkmark-circle"
                    size={24}
                    color="#8b5cf6"
                    style={{
                      position: "absolute",
                      right: 16,
                      top: 16,
                    }}
                  />
                )}
              </Pressable>
            );
          })}
        </View>

        {/* Retention Table Title */}
        <Text className="text-xl font-extrabold text-purple-500 my-5">
          Retention By Data Type
        </Text>

        {/* Table */}
        <View className="border border-gray-200 rounded-xl overflow-hidden">
          {/* Header Row */}
          <View className="flex-row bg-gray-50 border-b border-gray-200">
            <Text className="flex-1 px-4 py-3 text-sm font-semibold text-purple-600">
              Data Category
            </Text>
            <Text className="flex-1 px-4 py-3 text-sm font-semibold text-purple-600">
              Retention Period
            </Text>
            <Text className="flex-1 px-4 py-3 text-sm font-semibold text-purple-600">
              Legal Basis
            </Text>
          </View>

          {/* Data Rows */}
          {retentionData.map((item, index) => (
            <View
              key={index}
              className={`flex-row border-b border-gray-200 ${
                index === retentionData.length - 1 ? "border-b-0" : ""
              }`}
            >
              <Text className="flex-1 px-4 py-4 text-sm text-gray-600">
                {item.category}
              </Text>
              <Text className="flex-1 px-4 py-4 text-sm text-gray-600">
                {item.period}
              </Text>
              <Text className="flex-1 px-4 py-4 text-sm text-gray-600">
                {item.basis}
              </Text>
            </View>
          ))}
        </View>

        {/* Info + Save */}
        <View className="items-center">
          <View className="w-96 h-24 bg-blue-200 rounded-2xl px-5 justify-center my-5 shadow-lg border-l-4 border-blue-500">
            <Text className="text-black text-md font-bold">
              <Text className="font-extrabold">Business Data:</Text>{" "}
              Inventory information, sales records, customer data, supplier
              information, and financial transactions.
            </Text>
          </View>

          <TouchableOpacity className="bg-turquoise py-4 flex-row w-96 justify-center gap-3 rounded-lg">
            <Ionicons name="save-outline" size={24} color="white" />
            <Text className="text-xl text-white font-semibold">
              Save retention setting
            </Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default DataRetentionScreen;
