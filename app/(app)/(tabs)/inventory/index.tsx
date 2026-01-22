import { useState } from "react";
import {
  View,
  Text,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import { Ionicons, MaterialIcons } from "@expo/vector-icons";
import { SafeAreaView } from "react-native-safe-area-context";

import ProductDetails from "@/components/inventory/ProductDetails";

import UpdateStock from "@/components/inventory/UpdateStock";

import { useRouter } from "expo-router";



/* ---------------- TYPES ---------------- */

type StockStatus = "low" | "in" | "out";
type FilterType = "ALL" | "LOW" | "OUT";

interface InventoryItem {
  id: string;
  name: string;
  category: string;
  stock: number;
  price: string;
  total: string;
  status: StockStatus;
}

/* ---------------- DATA ---------------- */



const filters: { label: string; value: FilterType }[] = [
  { label: "All item", value: "ALL" },
  { label: "Low Stock", value: "LOW" },
  { label: "Out Of Stock", value: "OUT" },
];

const inventoryData: InventoryItem[] = [
  {
    id: "1",
    name: "Colgate Toothpaste",
    category: "Personal Care",
    stock: 2,
    price: "₹75",
    total: "₹130",
    status: "low",
  },
  {
    id: "2",
    name: "Colgate Toothpaste",
    category: "Personal Care",
    stock: 22,
    price: "₹75",
    total: "₹130",
    status: "in",
  },
  {
    id: "3",
    name: "Lays Potato Chips",
    category: "Food Items",
    stock: 0,
    price: "₹75",
    total: "₹0",
    status: "out",
  },
];

/* ---------------- SCREEN ---------------- */

export default function InventoryScreen() {
  const [selectedFilter, setSelectedFilter] =
    useState<FilterType>("ALL");

  /* FILTER LOGIC */
  const filteredInventoryData = inventoryData.filter((item) => {
    if (selectedFilter === "ALL") return true;
    if (selectedFilter === "LOW") return item.status === "low";
    if (selectedFilter === "OUT") return item.status === "out";
    return true;
  });
  const [showPopup, setShowPopup] = useState(false);
const [selectedProduct, setSelectedProduct] = useState<any>(null);
const [showUpdatePopup, setShowUpdatePopup] = useState(false);
const [updateItem, setUpdateItem] = useState<any>(null);
const router = useRouter();


  return (
    <>
    
      <FlatList
        data={filteredInventoryData}
        keyExtractor={(item) => item.id}
        contentContainerStyle={{ paddingBottom: 100 }}
        ListHeaderComponent={() => (
          
          <>
           

            {/* Search */}
            <View className="px-5 mt-4 flex-row items-center gap-3">
              <TextInput
                placeholder="Search Product..."
                className="flex-1 bg-white px-4 py-3 rounded-xl border border-gray-200"
              />
              <TouchableOpacity className="bg-amethyst p-3 rounded-xl">
                <Ionicons name="search" size={20} color="white" />
              </TouchableOpacity>
            </View>

            {/* Filters */}
            <View className="flex-row px-5 mt-4 gap-2">
              {filters.map((filter) => (
                <TouchableOpacity
                  key={filter.value}
                  onPress={() => setSelectedFilter(filter.value)}
                  className={`px-4 py-2 rounded-full ${
                    selectedFilter === filter.value
                      ? "bg-amethyst"
                      : "border border-gray-300"
                  }`}
                >
                  <Text
                    className={`text-sm ${
                      selectedFilter === filter.value
                        ? "text-white"
                        : "text-gray-600"
                    }`}
                  >
                    {filter.label}
                  </Text>
                </TouchableOpacity>
              ))}
            </View>

          
          </>
        )}
        renderItem={({ item }) => {
  const isFirstItem = item.id === "1"; // ✅ CORRECT PLACE

  return (
    <View className="mx-5 mt-4 bg-white rounded-2xl p-4 shadow-sm">
      
      {/* Title */}
      <View className="flex-row justify-between mb-2">
        <View>
          <Text className="font-bold text-gray-800">{item.name}</Text>
          <Text className="text-xs text-gray-400">{item.category}</Text>
        </View>

        <View className="flex-row items-center gap-1">
          {item.status === "low" && (
            <>
              <Ionicons name="warning" size={16} color="#f59e0b" />
              <Text className="text-yellow-500 text-xs">Low Stock</Text>
            </>
          )}

          {item.status === "in" && (
            <>
              <Ionicons
                name="checkmark-circle"
                size={16}
                color="#22c55e"
              />
              <Text className="text-green-600 text-xs">In Stock</Text>
            </>
          )}

          {item.status === "out" && (
            <>
              <Ionicons
                name="close-circle"
                size={16}
                color="#ef4444"
              />
              <Text className="text-red-500 text-xs">Out of Stock</Text>
            </>
          )}
        </View>
      </View>

      {/* Info */}
      <View className="flex-row justify-between mt-2">
        <Text className="text-xs text-gray-500">
          Current Stock{"\n"}
          <Text className="font-bold text-gray-800">{item.stock}</Text>
        </Text>

        <Text className="text-xs text-gray-500">
          Selling Price{"\n"}
          <Text className="font-bold text-gray-800">{item.price}</Text>
        </Text>

        <Text className="text-xs text-gray-500">
          Total Value{"\n"}
          <Text className="font-bold text-gray-800">{item.total}</Text>
        </Text>
      </View>

      {/* Actions */}
      <View className="flex-row gap-3 mt-4">
        <TouchableOpacity
          disabled={!isFirstItem}
          className={`flex-1 rounded-xl py-2 flex-row justify-center items-center gap-2 border border-amethyst
             
          `}
          onPress={() => {
            setSelectedProduct({
              name: item.name,
              sku: "CLG001",
              category: item.category,
              stock: item.stock,
              lowStockAlert: 5,
              purchasePrice: 65,
              sellingPrice: Number(item.price.replace("₹", "")),
              supplier: "Colgate-Palmolive",
              notes: "Almost out of stock",
            });
            setShowPopup(true);
          }}
        >
          <Ionicons name="eye-outline" size={18} color="#7c3aed" />
          <Text className="text-amethyst font-semibold">View</Text>
        </TouchableOpacity>

        <TouchableOpacity 
         disabled={!isFirstItem}
        className="flex-1 bg-amethyst rounded-xl py-2 flex-row justify-center items-center gap-2"
         onPress={() => {
    setUpdateItem(item);
    setShowUpdatePopup(true);
  }}
  >
          <MaterialIcons name="update" size={18} color="white" />
          <Text className="text-white font-semibold">Update Stock</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}}

      />

      {/* Floating Action Button */}
      <TouchableOpacity 
      onPress={() => router.push("/inventory/add")}
      className="absolute bottom-6 right-6 bg-amethyst p-4 rounded-full shadow-lg">
        <Ionicons name="add" size={26} color="white" />
      </TouchableOpacity>

      <ProductDetails
  visible={showPopup}
  onClose={() => setShowPopup(false)}
  product={selectedProduct}
/>
<UpdateStock
  visible={showUpdatePopup}
  onClose={() => setShowUpdatePopup(false)}
  productName={updateItem?.name ?? ""}
  currentStock={updateItem?.stock ?? 0}
/>

</>
    
  );
}
