import { View, Text, TextInput, TouchableOpacity, ScrollView } from "react-native";
import { useLocalSearchParams, useRouter } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function EditProductScreen() {
  const router = useRouter();
  const params = useLocalSearchParams();

  return (
    
    <ScrollView className="flex-1 bg-white px-5 pt-6">
      
      {/* Header */}
      <Text className="text-lg font-bold text-purple-700 mb-6">
        Edit Product details
      </Text>

      {/* Product Name */}
      <Label text="Product Name *" />
      <TextInput
        defaultValue={params.name as string}
        className="border border-gray-300 rounded-xl px-4 py-3 mb-4"
        placeholder="Enter Product Name"
      />

      {/* Supplier + Category */}
      <View className="flex-row gap-3 mb-4">
        <View className="flex-1">
          <Label text="Supplier (Optional)" />
          <TextInput
            defaultValue={params.supplier as string}
            className="border border-gray-300 rounded-xl px-4 py-3"
            placeholder="Supplier Name"
          />
        </View>

        <View className="flex-1">
          <Label text="Category" />
          <TextInput
            defaultValue={params.category as string}
            className="border border-gray-300 rounded-xl px-4 py-3"
            placeholder="Category"
          />
        </View>
      </View>

      {/* Prices */}
      <View className="flex-row gap-3 mb-4">
        <View className="flex-1">
          <Label text="Purchase Price (₹) *" />
          <TextInput
            defaultValue={params.purchasePrice as string}
            keyboardType="numeric"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>

        <View className="flex-1">
          <Label text="Selling Price (₹) *" />
          <TextInput
            defaultValue={params.sellingPrice as string}
            keyboardType="numeric"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>
      </View>

      {/* Stock */}
      <View className="flex-row gap-3 mb-4">
        <View className="">
          <Label text="Current Stock *" />
          <TextInput
            defaultValue={params.stock as string}
            keyboardType="numeric"
            className="border border-gray-300 rounded-xl px-4 py-3"
          />
        </View>

        
      </View>

      {/* Notes */}
      <Label text="Notes (Optional)" />
      <TextInput
        defaultValue={params.notes as string}
        multiline
        className="border border-gray-300 rounded-xl px-4 py-3 h-24 mb-6"
        placeholder="Any Additional Note"
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

        <TouchableOpacity
          className="flex-1 bg-purple-600 rounded-xl py-3 flex-row justify-center items-center gap-2"
        >
          <Ionicons name="bookmark" size={18} color="white" />
          <Text className="text-white font-semibold">Save Product</Text>
        </TouchableOpacity>
      </View>
    </ScrollView>
  );
}

const Label = ({ text }: { text: string }) => (
  <Text className="text-sm text-gray-600 mb-1">{text}</Text>
);
