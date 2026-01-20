import { Modal, View, Text, TouchableOpacity, TextInput } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useState } from "react";

type Props = {
  visible: boolean;
  onClose: () => void;
  productName: string;
  currentStock: number;
};

export default function UpdateStock({
  visible,
  onClose,
  productName,
  currentStock,
}: Props) {
  const [mode, setMode] = useState<"add" | "remove">("add");
  const [quantity, setQuantity] = useState("");

  return (
    <Modal transparent visible={visible} animationType="fade">
      <View className="flex-1 bg-black/40 justify-center px-4">
        <View className="bg-white rounded-2xl p-5">

          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-purple-600 font-bold text-lg">
              Update Stock
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Stock Count */}
          <Text className="text-center text-3xl font-bold text-gray-900">
            {currentStock}
          </Text>
          <Text className="text-center text-gray-600 mb-5">
            {productName}
          </Text>

          {/* Actions */}
          <View className="flex-row gap-4 mb-5">
            <TouchableOpacity
              onPress={() => setMode("add")}
              className={`flex-1 border rounded-xl py-4 items-center ${
                mode === "add"
                  ? "border-purple-600"
                  : "border-gray-300"
              }`}
            >
              <Ionicons name="add" size={20} color="#111827" />
              <Text className="mt-1 font-medium">Add Stock</Text>
            </TouchableOpacity>

            <TouchableOpacity
              onPress={() => setMode("remove")}
              className={`flex-1 border rounded-xl py-4 items-center ${
                mode === "remove"
                  ? "border-purple-600"
                  : "border-gray-300"
              }`}
            >
              <Ionicons name="remove" size={20} color="#111827" />
              <Text className="mt-1 font-medium">Remove Stock</Text>
            </TouchableOpacity>
          </View>

          {/* Quantity */}
          <Text className="text-gray-600 mb-1">Quantity</Text>
          <TextInput
            value={quantity}
            onChangeText={setQuantity}
            placeholder="Enter Quantity"
            keyboardType="numeric"
            className="border border-gray-300 rounded-xl px-4 py-3 mb-6"
          />

          {/* Update Button */}
          <TouchableOpacity className="bg-purple-600 py-4 rounded-xl">
            <Text className="text-white text-center font-semibold">
              ✔ Update Stock
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </Modal>
  );
}
