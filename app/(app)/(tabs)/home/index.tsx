import { FontAwesome } from "@expo/vector-icons";

import { ScrollView, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import QuickActions from "./QuickActions";
import RecentSales from "./RecentSales";
import LowStockAlerts from "./LowStockAlerts";

export default function HomeScreen() {
  return (
    <ScrollView>
      <SafeAreaView>
        <View className="bg-[#8A63F2] rounded-b-3xl px-6  shadow-lg p-2 ">
          {/* Header */}
          <View className="flex-row justify-between items-center mt-6">
            <Text className="text-3xl font-extrabold text-white ">
              Shopmart
            </Text>

            <View className="bg-white/25 px-2 py-1 rounded-full shadow-md">
              <FontAwesome name="user" size={26} color="white" />
            </View>
          </View>

          {/* Welcome Section */}
          <View className="mt-5 mb-6">
            <Text className="text-white text-xl opacity-90">
              Welcome Back 👋
            </Text>
            <Text className="text-white text-2xl font-bold mt-1">
              Your Shop Performed Great Yesterday
            </Text>
          </View>

          {/* Stats Cards */}
          <View className="flex-row justify-between">
            <View className="flex-1 bg-white/15 p-4 rounded-2xl items-center shadow-md">
              <Text className="text-white text-sm opacity-80">
                Today’s Sales
              </Text>
              <Text className="text-white text-2xl font-bold mt-1">
                ₹12,450
              </Text>
            </View>

            <View className="w-3" />

            <View className="flex-1 bg-white/15 p-4 rounded-2xl items-center shadow-md">
              <Text className="text-white text-sm opacity-80">
                Pending Orders
              </Text>
              <Text className="text-white text-2xl font-bold mt-1">0</Text>
            </View>
          </View>
        </View>

        <View>
          <QuickActions />
        </View>

        <View>
          <RecentSales />
        </View>

        <View>
          <LowStockAlerts />
        </View>
      </SafeAreaView>
    </ScrollView>
  );
}
