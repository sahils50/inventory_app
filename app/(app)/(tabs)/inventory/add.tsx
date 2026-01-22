import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  Modal,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";
import { SafeAreaView } from "react-native-safe-area-context";

/* CATEGORY LIST (like D-Mart) */
const CATEGORIES = [
  "Food Items",
  "Personal Care",
  "Beverages",
  "Dairy Products",
  "Household Items",
  "Snacks",
  "Frozen Foods",
  "Baby Care",
  "Health & Wellness",
  "Cleaning Supplies",
];

export default function AddProductScreen() {
  const router = useRouter();
  const [category, setCategory] = useState("");
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  return (
    
    <ScrollView className="flex-1 bg-white px-5 p-6 ">

      {/* Header */}
      <Text className="text-lg font-bold text-purple-600 mb-6">
        Add New Product
      </Text>

      {/* Product Name */}
      <Label text="Product Name *" />
      <TextInput
        placeholder="Enter Product Name"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      {/* Supplier + Category */}
      <View className="flex-row gap-3 mb-4">
        <View className="flex-1">
          <Label text="Supplier (Optional)" />
          <TextInput
            placeholder="supplier Name"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>

        <View className="flex-1">
          <Label text="Category" />
          <TouchableOpacity
            onPress={() => setShowCategoryModal(true)}
            className="border border-gray-300 rounded-xl px-4 py-3 flex-row justify-between items-center"
          >
            <Text className={category ? "text-gray-900" : "text-gray-400"}>
              {category || "Select Category"}
            </Text>
            <Ionicons name="chevron-down" size={18} color="#6b7280" />
          </TouchableOpacity>
        </View>
      </View>

      {/* Prices */}
      <View className="flex-row gap-3 mb-4">
        <View className="flex-1">
          <Label text="Purchase Price (₹) *" />
          <TextInput
            keyboardType="numeric"
            placeholder="0.00"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>

        <View className="flex-1">
          <Label text="Selling Price (₹) *" />
          <TextInput
            keyboardType="numeric"
            placeholder="0.00"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>
      </View>

      {/* Stock */}
      <Label text="Current Stock *" />
      <TextInput
        keyboardType="numeric"
        placeholder="0"
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
      />

      {/* Notes */}
      <Label text="Notes (Optional)" />
      <TextInput
        multiline
        placeholder="Any Additional Note"
        className="border border-gray-300 rounded-xl px-4 py-3 h-24 mb-6"
      />

      {/* Actions */}
      <View className="flex-row gap-4 mb-10">
        <TouchableOpacity
          onPress={() => router.back()}
          className="flex-1 border border-purple-600 rounded-xl py-3 flex-row justify-center items-center gap-2"
        >
          <Ionicons name="close" size={18} color="#7c3aed" />
          <Text className="text-purple-600 font-semibold">Cancel</Text>
        </TouchableOpacity>

        <TouchableOpacity className="flex-1 bg-purple-600 rounded-xl py-3 flex-row justify-center items-center gap-2">
          <Ionicons name="add" size={18} color="white" />
          <Text className="text-white font-semibold">Add Product</Text>
        </TouchableOpacity>
      </View>

      {/* CATEGORY DROPDOWN MODAL */}
      <Modal transparent visible={showCategoryModal} animationType="fade">
        <View className="flex-1 bg-black/40 justify-center px-6">
          <View className="bg-white rounded-2xl p-4 max-h-[70%]">

            <Text className="font-bold text-lg mb-3">
              Select Category
            </Text>

            <FlatList
              data={CATEGORIES}
              keyExtractor={(item) => item}
              renderItem={({ item }) => (
                <TouchableOpacity
                  onPress={() => {
                    setCategory(item);
                    setShowCategoryModal(false);
                  }}
                  className="py-3 border-b border-gray-200"
                >
                  <Text className="text-gray-800">{item}</Text>
                </TouchableOpacity>
              )}
            />

            <TouchableOpacity
              onPress={() => setShowCategoryModal(false)}
              className="mt-3 py-3"
            >
              <Text className="text-center text-purple-600 font-semibold">
                Close
              </Text>
            </TouchableOpacity>

          </View>
        </View>
      </Modal>
    </ScrollView>
    
  );
}

const Label = ({ text }: { text: string }) => (
  <Text className="text-sm text-gray-600 mb-1">{text}</Text>
   
);
