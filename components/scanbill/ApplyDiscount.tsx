
import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

const ApplyDiscount = () => {
  const [mode, setMode] = useState("percentage"); // percentage | coupon
  const [inputValue, setInputValue] = useState("");
  const [appliedDiscount, setAppliedDiscount] = useState(null);

  const TOTAL_AMOUNT = 1000; // Example bill amount

  const handleApplyDiscount = () => {
    let discountValue = 0;

    if (mode === "percentage") {
      discountValue = (TOTAL_AMOUNT * Number(inputValue)) / 100;
    } else {
      discountValue = 150; // example coupon value
    }

    setAppliedDiscount(discountValue);
  };

  return (
    <View>
      <View
        className="bg-white rounded-2xl p-5 gap-4 mt-4"
        style={{
          shadowColor: "#000",
          shadowOffset: { width: 0, height: 4 },
          shadowOpacity: 0.12,
          shadowRadius: 8,
          elevation: 6,
        }}
      >
        <Text className="text-lg font-bold text-gray-800">Apply Discount</Text>

        {/* Mode Buttons */}
        <View className="flex-row gap-3">
          <TouchableOpacity
            onPress={() => {
              setMode("percentage");
              setInputValue("");
            }}
            className={`flex-1 py-3 rounded-xl ${
              mode === "percentage" ? "bg-[#8A63F2]" : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                mode === "percentage" ? "text-white" : "text-gray-700"
              }`}
            >
              Percentage
            </Text>
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              setMode("coupon");
              setInputValue("");
            }}
            className={`flex-1 py-3 rounded-xl ${
              mode === "coupon" ? "bg-[#8A63F2]" : "bg-gray-200"
            }`}
          >
            <Text
              className={`text-center font-semibold ${
                mode === "coupon" ? "text-white" : "text-gray-700"
              }`}
            >
              Coupon Code
            </Text>
          </TouchableOpacity>
        </View>

        {/* Single Input */}
        <View className="flex-row items-center border border-gray-300 rounded-xl px-4 py-3">
          {mode === "percentage" ? (
            <Text className="text-gray-500 font-semibold mr-2">%</Text>
          ) : (
            <FontAwesome name="tag" size={18} color="#6b7280" />
          )}

          <TextInput
            placeholder={
              mode === "percentage"
                ? "Enter Discount Percentage"
                : "Enter Coupon Code"
            }
            placeholderTextColor="#9ca3af"
            keyboardType={mode === "percentage" ? "numeric" : "default"}
            value={inputValue}
            onChangeText={setInputValue}
            className="flex-1 ml-3 text-gray-800"
          />
        </View>

        {/* Apply Button */}
        <TouchableOpacity
          onPress={handleApplyDiscount}
          className="bg-[#8A63F2] py-3 rounded-xl mt-2"
        >
          <Text className="text-white text-center font-semibold text-base">
            Apply Discount
          </Text>
        </TouchableOpacity>

        {/* Result Box */}
        {appliedDiscount !== null && (
          <View className="bg-green-100 border border-green-400 rounded-xl p-4 mt-4 flex-row justify-between items-center">
            <Text className="text-green-800 font-semibold">
              {mode === "percentage"
                ? `${inputValue}% Discount`
                : "Coupon Applied"}
            </Text>

            <Text className="text-green-800 font-bold">
              - ₹{appliedDiscount}
            </Text>
          </View>
        )}
      </View>
    </View>
  );
};

export default ApplyDiscount;
