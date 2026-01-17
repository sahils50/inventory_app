import { View, Text, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import { FontAwesome } from "@expo/vector-icons";

type PaymentMethod = "cash" | "upi" | "card";

const PaymentMethod = () => {
  const [selected, setSelected] = useState<PaymentMethod>("cash");
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
        <Text className="text-lg font-bold text-gray-800">Payment Method</Text>

        {(["cash", "upi", "card"] as PaymentMethod[]).map((method) => (
          <TouchableOpacity
            key={method}
            onPress={() => setSelected(method)}
            className={`flex-row items-center justify-between p-4 rounded-xl border ${
              selected === method
                ? "border-purple-700 bg-purple-50"
                : "border-gray-300"
            }`}
          >
            <View className="flex-row items-center gap-3">
              <FontAwesome
                name={
                  method === "cash"
                    ? "money"
                    : method === "upi"
                    ? "mobile"
                    : "credit-card"
                }
                size={20}
              />
              <Text className="font-medium capitalize">
                {method === "card"
                  ? "Credit / Debit Card"
                  : method.toUpperCase()}
              </Text>
            </View>

            {selected === method && (
              <FontAwesome name="check-circle" size={20} color="#7c3aed" />
            )}
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default PaymentMethod;
