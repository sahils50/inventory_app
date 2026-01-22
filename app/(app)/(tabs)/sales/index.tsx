import { Ionicons } from "@expo/vector-icons";
import type { FC } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

// ────────────────────────────────────────────────
// Types
// ────────────────────────────────────────────────

interface StatCardProps {
  icon: keyof typeof Ionicons.glyphMap;
  bgColor: string;
  iconColor: string;
  title: string;
  value: string;
  change: string;
  trend?: "up" | "down";
}

interface SaleItemProps {
  name: string;
  time: string;
  amount: number;
  isLast?: boolean;
}

interface TopProductProps {
  rank: number;
  name: string;
  sold: number;
  amount: number;
  isLast?: boolean;
}

// ────────────────────────────────────────────────
// Components
// ────────────────────────────────────────────────

const StatCard: FC<StatCardProps> = ({
  icon,
  bgColor,
  iconColor,
  title,
  value,
  change,
  trend = "up",
}) => {
  const isPositive = trend === "up";

  return (
    <View
      className={`
        w-[48%] bg-white 
        rounded-2xl p-5 
        shadow-md shadow-gray-200/60 
        border border-gray-100/70
        active:opacity-92 transition-all
      `}
    >
      <View
        className={`
          w-14 h-14 ${bgColor} 
          rounded-2xl items-center justify-center 
          mb-4 shadow-sm
        `}
      >
        <Ionicons name={icon} size={30} color={iconColor} />
      </View>

      <Text className="text-gray-600 font-medium text-[15px] tracking-wide mb-1">
        {title}
      </Text>

      <Text className="text-2xl font-bold text-gray-900 mb-3">{value}</Text>

      <View className="flex-row items-center">
        <View
          className={`
            flex-row items-center gap-1.5
            px-2.5 py-1 rounded-full
            ${isPositive ? "bg-green-50" : "bg-red-50"}
          `}
        >
          <Ionicons
            name={isPositive ? "trending-up" : "trending-down"}
            size={16}
            color={isPositive ? "#16a34a" : "#dc2626"}
          />
          <Text
            className={`
              text-sm font-semibold
              ${isPositive ? "text-green-700" : "text-red-700"}
            `}
          >
            {change}
          </Text>
        </View>
        <Text className="text-gray-500 text-xs ml-2.5">last month</Text>
      </View>
    </View>
  );
};

const SectionHeader: FC<{ title: string; action?: string }> = ({
  title,
  action,
}) => (
  <View className="flex-row justify-between items-center mb-4 mt-2">
    <Text className="text-xl font-bold text-gray-800">{title}</Text>
    {action && (
      <TouchableOpacity className="flex-row items-center">
        {/* TODO: Add a Header as per the figma */}
        <Text className="text-amethyst font-medium mr-1">{action}</Text>
        {action.includes("All") && (
          <Ionicons name="chevron-forward" size={18} color="#7c3aed" />
        )}
      </TouchableOpacity>
    )}
  </View>
);

const CardContainer: FC<{ children: React.ReactNode }> = ({ children }) => (
  <View
    className="
      bg-white rounded-2xl 
      shadow-sm shadow-gray-200/50 
      border border-gray-100 
      overflow-hidden
    "
  >
    {children}
  </View>
);

const SaleItem: FC<SaleItemProps> = ({
  name,
  time,
  amount,
  isLast = false,
}) => (
  <View
    className={`
      flex-row justify-between items-center 
      px-5 py-4
      ${isLast ? "" : "border-b border-gray-100"}
    `}
  >
    <View>
      <Text className="text-gray-900 font-medium text-base">{name}</Text>
      <Text className="text-gray-500 text-sm mt-0.5">{time}</Text>
    </View>
    <Text className="text-green-600 font-semibold text-base">
      ₹{amount.toLocaleString("en-IN")}
    </Text>
  </View>
);

const TopProductItem: FC<TopProductProps> = ({
  rank,
  name,
  sold,
  amount,
  isLast = false,
}) => {
  const rankColors = ["#7c3aed", "#6b7280", "#9ca3af", "#9ca3af"];

  return (
    <View
      className={`
        flex-row items-center 
        px-5 py-4
        ${isLast ? "" : "border-b border-gray-100"}
      `}
    >
      <View
        className="w-9 h-9 rounded-full items-center justify-center mr-4"
        style={{ backgroundColor: `${rankColors[rank - 1]}22` }}
      >
        <Text
          className="font-bold text-base"
          style={{ color: rankColors[rank - 1] }}
        >
          {rank}
        </Text>
      </View>

      <View className="flex-1">
        <Text className="text-gray-900 font-medium">{name}</Text>
        <Text className="text-gray-500 text-sm mt-0.5">{sold} sold</Text>
      </View>

      <Text className="text-gray-900 font-semibold">
        ₹{amount.toLocaleString("en-IN")}
      </Text>
    </View>
  );
};

// ────────────────────────────────────────────────
// Main Screen
// ────────────────────────────────────────────────

export default function HomeScreen() {
  return (
    <ScrollView className="flex-1 pb-10">
      <SalesHeader />
      <View className="px-4">
        {/* Header - Week */}
        <View className="mb-7">
          <View className="flex-row items-center justify-between">
            <Text className="text-2xl font-bold text-gray-900">This Week</Text>
            <TouchableOpacity className="p-2 -mr-2">
              <Ionicons name="calendar-outline" size={26} color="#6b7280" />
            </TouchableOpacity>
          </View>
          <Text className="text-gray-600 mt-1 text-base">
            7 Dec 2025 - 8 Dec 2025
          </Text>
        </View>

        {/* Statistics Grid */}
        <View className="flex flex-row flex-wrap justify-between mb-10 px-4">
          <StatCard
            icon="cash-outline"
            bgColor="bg-purple-50"
            iconColor="#7c3aed"
            title="Total Revenue"
            value="₹85,620"
            change="+12.5%"
          />
          <StatCard
            icon="cart-outline"
            bgColor="bg-cyan-50"
            iconColor="#0891b2"
            title="Total Orders"
            value="128"
            change="+8.2%"
          />
          <StatCard
            icon="people-outline"
            bgColor="bg-pink-50"
            iconColor="#db2777"
            title="Customers"
            value="58"
            change="+5.3%"
          />
          <StatCard
            icon="trending-up-outline"
            bgColor="bg-emerald-50"
            iconColor="#059669"
            title="Net Profit"
            value="₹17,500"
            change="+16.1%"
          />
        </View>

        {/* Sales Trend Placeholder */}
        <View className="mb-10">
          <SectionHeader title="Sales Trend" action="Daily ▼" />
          <View className="h-48 bg-white rounded-2xl border border-gray-100 items-center justify-center shadow-sm">
            <Text className="text-gray-400">Sales trend chart coming soon</Text>
          </View>
        </View>

        {/* Recent Sales */}
        <SectionHeader title="Recent Sales" action="See All" />
        <CardContainer>
          <SaleItem name="Ramesh Kumar" time="10:45 AM" amount={1250} />
          <SaleItem name="Sunita Grocery" time="09:30 AM" amount={3450} />
          <SaleItem
            name="Amit Sharma"
            time="Yesterday • 3 items"
            amount={850}
          />
          <SaleItem
            name="Priya Patel"
            time="Yesterday • 8 items"
            amount={2100}
            isLast
          />
        </CardContainer>

        {/* Top Products */}
        <SectionHeader title="Top Products" action="This Month ▼" />
        <CardContainer>
          <TopProductItem
            rank={1}
            name="Maggi Noodles"
            sold={142}
            amount={17040}
          />
          <TopProductItem
            rank={2}
            name="Dairy Milk Chocolate"
            sold={89}
            amount={4450}
          />
          <TopProductItem
            rank={3}
            name="Colgate Toothpaste"
            sold={67}
            amount={5025}
          />
          <TopProductItem
            rank={4}
            name="Nescafe Coffee"
            sold={45}
            amount={11250}
            isLast
          />
        </CardContainer>
      </View>
    </ScrollView>
  );
}
const SalesHeader = () => {
  return (
    <View className="mb-8">
      <View
        className="rounded-b-3xl overflow-hidden"
        style={{ backgroundColor: "#6b21a8" }} // fallback
      >
        <View className="px-5 pt-8 pb-10 bg-amethyst">
          {/* Title + Avatar - smaller */}
          <View className="flex-row justify-between items-center mb-5">
            <Text className="text-white text-2xl font-bold">
              Sales Analytics
            </Text>
            <View className="w-9 h-9 bg-white/25 rounded-full items-center justify-center border border-white/30">
              <Ionicons name="person-outline" size={20} color="white" />
            </View>
          </View>

          {/* 3 compact cards in one row */}
          <View className="flex-row justify-between gap-2.5">
            {/* Today */}
            <View className="flex-1 bg-white/18 backdrop-blur-lg rounded-xl p-3.5 border border-white/15">
              <Text className="text-purple-100 text-xs font-medium mb-0.5">
                Today
              </Text>
              <Text className="text-white text-xl font-extrabold">₹12,450</Text>
            </View>

            {/* This Week */}
            <View className="flex-1 bg-white/18 backdrop-blur-lg rounded-xl p-3.5 border border-white/15">
              <Text className="text-purple-100 text-xs font-medium mb-0.5">
                This Week
              </Text>
              <Text className="text-white text-xl font-extrabold">₹85,620</Text>
            </View>

            {/* This Month */}
            <View className="flex-1 bg-white/18 backdrop-blur-lg rounded-xl p-3.5 border border-white/15">
              <Text className="text-purple-100 text-xs font-medium mb-0.5">
                This Month
              </Text>
              <Text className="text-white text-xl font-extrabold">
                ₹3,45,820
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};
