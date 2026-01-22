import { Modal, View, Text, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { useRouter } from "expo-router";


type Props = {
  visible: boolean;
  onClose: () => void;
  product: {
    name: string;
    sku: string;
    category: string;
    stock: number;
    lowStockAlert: number;
    purchasePrice: number;
    sellingPrice: number;
    supplier: string;
    notes?: string;
  };
};

export default function ProductDetails({
  visible,
  onClose,
  product,
}: Props) {
  if (!product) return null;
  const router = useRouter();

  return (

    <Modal transparent visible={visible} animationType="fade">
      {/* Overlay */}
      <View className="flex-1 bg-black/40 justify-center px-4">
        
        {/* Card */}
        <View className="bg-[#fffaf7] rounded-2xl p-5">
          
          {/* Header */}
          <View className="flex-row justify-between items-center mb-4">
            <Text className="text-lg font-bold text-gray-900">
              {product.name}
            </Text>
            <TouchableOpacity onPress={onClose}>
              <Ionicons name="close" size={22} color="#6b7280" />
            </TouchableOpacity>
          </View>

          {/* Details */}
          <Detail label="SKU" value={product.sku} />
          <Detail label="Category" value={product.category} />
          <Detail label="Current Stock" value={product.stock.toString()} />
          <Detail
            label="Low Stock Alert"
            value={product.lowStockAlert.toString()}
          />
          <Detail
            label="Purchase Price"
            value={`₹${product.purchasePrice}`}
          />
          <Detail
            label="Selling Price"
            value={`₹${product.sellingPrice}`}
          />
          <Detail label="Supplier" value={product.supplier} />

          {/* Notes */}
          {product.notes && (
            <View className="mt-4">
              <Text className="text-purple-600 font-semibold mb-1">
                Notes:
              </Text>
              <Text className="text-gray-600 text-sm">
                {product.notes}
              </Text>
            </View>
          )}

          {/* Actions */}
          <View className="flex-row gap-4 mt-6">
            <TouchableOpacity
  className="flex-1 border border-purple-600 rounded-xl py-3 flex-row justify-center items-center gap-2"
  onPress={() => {
    onClose(); // close modal
    router.push({
      pathname: "/inventory/edit",
      params: {
        name: product.name,
        category: product.category,
        supplier: product.supplier,
        stock: product.stock.toString(),
        lowStockAlert: product.lowStockAlert.toString(),
        purchasePrice: product.purchasePrice.toString(),
        sellingPrice: product.sellingPrice.toString(),
        notes: product.notes ?? "",
      },
    });
  }}
>

              <Text className="text-purple-600 font-semibold">
                Edit
              </Text>
            </TouchableOpacity>

            <TouchableOpacity className="flex-1 border border-red-600 rounded-xl py-3 flex-row justify-center items-center gap-2">
              <Ionicons
                name="trash-outline"
                size={18}
                color="#E80505"
              />
              <Text className="text-red-600 font-semibold">
                Delete
              </Text>
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </Modal>
  );
}

/* Small reusable row */
const Detail = ({
  label,
  value,
}: {
  label: string;
  value: string;
}) => (
  <View className="items-center my-2">
    <Text className="text-xs text-gray-400">{label}</Text>
    <Text className="text-base font-semibold text-gray-900">
      {value}
    </Text>
  </View>
);
