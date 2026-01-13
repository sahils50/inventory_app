// app/about.tsx
import { Ionicons } from "@expo/vector-icons";
import {
  ScrollView,
  StatusBar,
  Text,
  TouchableOpacity,
  View,
} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

export default function AboutScreen() {
  return (
    <SafeAreaView className="flex-1 bg-gray-50">
      <StatusBar barStyle="dark-content" backgroundColor="#f9fafb" />

      <ScrollView className="flex-1">
        {/* Header / Logo Area */}
        <View className="items-center py-10 px-6 bg-white border-b border-gray-200">
          <View className="w-24 h-24 bg-amethyst rounded-2xl items-center justify-center mb-4 shadow-lg">
            <Text className="text-white text-5xl font-bold">🛒</Text>
          </View>
          <Text className="text-3xl font-bold text-gray-800">ShopSmart</Text>
          <Text className="text-lg text-gray-500 mt-1">
            Smart Inventory Manager for Small Businesses
          </Text>
        </View>

        {/* App Information Card */}
        <View className="mx-5 mt-6 bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden">
          <View className="p-5 border-b border-gray-100">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              App Information
            </Text>

            <InfoRow label="Version" value="2.1.4" />
            <InfoRow label="Release Date" value="Jan 15, 2024" />
            <InfoRow label="App Size" value="45.2 MB" />
            <InfoRow label="Supported on" value="Android 12+" />
          </View>

          {/* What is ShopSmart */}
          <View className="p-5 border-b border-gray-100">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              What is ShopSmart?
            </Text>
            <Text className="text-gray-700 leading-6">
              ShopSmart is an all-in-one inventory management solution designed
              specifically for small business owners in India.
            </Text>
            <Text className="text-gray-700 leading-6 mt-3">
              Our app helps you manage inventory, track sales, generate reports,
              and grow your business - all from your mobile device.
            </Text>
          </View>

          {/* Key Features */}
          <View className="p-5">
            <Text className="text-xl font-semibold text-gray-800 mb-4">
              Key Features
            </Text>

            <FeatureItem
              icon="cube-outline"
              title="Inventory Tracking"
              description="Real-time stock management with alerts"
            />
            <FeatureItem
              icon="cart-outline"
              title="Sales Management"
              description="Generate invoices and track daily sales"
            />
            <FeatureItem
              icon="people-outline"
              title="Customer Database"
              description="Build & manage customer relationships"
            />
            <FeatureItem
              icon="bar-chart-outline"
              title="Business Reports"
              description="Detailed analytics and insights"
            />
            <FeatureItem
              icon="cloud-offline-outline"
              title="Offline Mode"
              description="Work without internet connection easily"
            />
          </View>
        </View>

        {/* Legal Section */}
        <View className="mx-5 mt-6 mb-10 bg-white rounded-2xl shadow-sm border border-gray-200 p-6">
          <Text className="text-xl font-semibold text-gray-800 mb-4">
            Legal Information
          </Text>

          <Text className="text-gray-700">
            ShopSmart v2.1.4 © 2023-2025 ShopSmart Inc.{"\n"}
            All rights reserved. ShopSmart is protected by copyright,{"\n"}
            patent and international treaties.
          </Text>

          <View className="flex-row mt-6 space-x-4">
            <TouchableOpacity className="flex-1 bg-amethyst py-3 px-4 rounded-xl items-center">
              <Text className="text-white font-medium">Terms of Services</Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 bg-gray-700 py-3 px-4 rounded-xl items-center">
              <Text className="text-white font-medium">Privacy Policy</Text>
            </TouchableOpacity>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

// Reusable Components
type InfoRowProps = {
  label: string;
  value: string;
};

function InfoRow({ label, value }: InfoRowProps) {
  return (
    <View className="flex-row justify-between py-2.5 border-b border-gray-100 last:border-b-0">
      <Text className="text-gray-600 font-medium">{label}</Text>
      <Text className="text-gray-800 font-medium">{value}</Text>
    </View>
  );
}

type FeatureItemProps = {
  icon: keyof typeof Ionicons.glyphMap;
  title: string;
  description: string;
};

function FeatureItem({ icon, title, description }: FeatureItemProps) {
  return (
    <View className="flex-row items-start py-3 last:pb-0">
      <View className="mr-4 mt-1">
        <Ionicons name={icon} size={28} color="#8B5CF6" />
      </View>
      <View className="flex-1">
        <Text className="text-gray-800 font-semibold text-base">{title}</Text>
        <Text className="text-gray-600 mt-0.5">{description}</Text>
      </View>
    </View>
  );
}
