import ApplyDiscount from "@/components/scanbill/ApplyDiscount";
import Cart from "@/components/scanbill/Cart";

import PaymentMethod from "@/components/scanbill/PaymentMethod";
import PriceSummary from "@/components/scanbill/PriceSummary";
import { FontAwesome } from "@expo/vector-icons";
import { router } from "expo-router";

import {
  ScrollView,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function Notifications() {
  return (
    <ScrollView>
      <View className="p-5">
        {/* Card Container */}
        <View
          className="bg-white rounded-2xl p-5 gap-6"
          style={{
            shadowColor: "#000",
            shadowOffset: { width: 0, height: 4 },
            shadowOpacity: 0.15,
            shadowRadius: 8,
            elevation: 6,
          }}
        >
          {/* Scan Area */}
          <TouchableOpacity activeOpacity={0.85}>
            <View className="bg-[#8A63F2] p-4 rounded-xl items-center gap-2">
              <FontAwesome name="qrcode" size={34} color="white" />
              <Text className="text-white text-lg font-semibold">
                Tap to Scan Barcode
              </Text>
            </View>
          </TouchableOpacity>

          {/* Manual Entry */}
          <View className="flex-row items-center gap-3">
            <TextInput
              placeholder="Enter barcode manually"
              placeholderTextColor="#9ca3af"
              className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-base"
            />

            <TouchableOpacity activeOpacity={0.8}>
              <View className="bg-green-600 px-5 py-3 rounded-lg">
                <Text className="text-white font-semibold">Search</Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>

      <View className="p-4">
        {/* Cart */}
        <Cart />

        {/* Apply Discount */}
        <ApplyDiscount />

        {/* Price Summary */}
        <PriceSummary />

        {/* Payment Method */}
        <PaymentMethod />

        {/* Action Buttons */}
        <View className="flex-row gap-4 mt-6">
          <TouchableOpacity className="flex-1 border border-red-500 py-3 rounded-xl">
            <Text className="text-red-600 text-center font-semibold text-base">
              Clear
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => router.push("/(app)/(tabs)/home/GenerateBill")}
            className="flex-1 bg-[#8A63F2] py-3 rounded-xl"
          >
            <Text className="text-white text-center font-semibold text-base">
              Generate Bill
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </ScrollView>
  );
}
