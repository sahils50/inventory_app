import { useEffect, useState } from "react";
import {
  View,
  Text,
  Modal,
  TextInput,
  TouchableOpacity,
} from "react-native";
import type { InventoryItem } from "./app/(app)/(tabs)/inventory/index";


const categories = [
  "Food Item",
  "Personal Care",
  "Household",
  "Beverages",
  "Snacks",
];

interface Props {
  visible: boolean;
  isEdit: boolean;
  item: InventoryItem | null;
  onClose: () => void;
  onSave: (item: InventoryItem) => void;
}

export default function ProductFormModal({
  visible,
  isEdit,
  item,
  onClose,
  onSave,
}: Props) {
  const [form, setForm] = useState<InventoryItem>({
    id: "",
    name: "",
    category: categories[0],
    stock: 0,
    price: "",
    total: "",
    status: "in",
  });

  useEffect(() => {
    if (item && isEdit) setForm(item);
  }, [item, isEdit]);

  return (
    <Modal visible={visible} animationType="slide">
      <View className="flex-1 bg-white p-5">
        <Text className="text-xl font-bold mb-4">
          {isEdit ? "Edit Product" : "Add New Product"}
        </Text>

        <TextInput
          placeholder="Product Name"
          value={form.name}
          onChangeText={(v) => setForm({ ...form, name: v })}
          className="border p-3 rounded-xl mb-3"
        />

        <Text className="mb-1">Category</Text>
        {categories.map((cat) => (
          <TouchableOpacity
            key={cat}
            onPress={() => setForm({ ...form, category: cat })}
            className={`p-3 rounded-xl mb-2 ${
              form.category === cat
                ? "bg-purple-600"
                : "border border-gray-300"
            }`}
          >
            <Text
              className={
                form.category === cat ? "text-white" : "text-gray-700"
              }
            >
              {cat}
            </Text>
          </TouchableOpacity>
        ))}

        <TouchableOpacity
          onPress={() => onSave(form)}
          className="bg-purple-600 py-3 rounded-xl mt-4"
        >
          <Text className="text-white text-center font-semibold">
            {isEdit ? "Update Product" : "Add Product"}
          </Text>
        </TouchableOpacity>

        <TouchableOpacity onPress={onClose} className="mt-4">
          <Text className="text-center text-gray-500">Cancel</Text>
        </TouchableOpacity>
      </View>
    </Modal>
  );
}
