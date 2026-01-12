import { useState } from "react";
import { ScrollView, Text, TouchableOpacity, View } from "react-native";

type ThemeMode = "light" | "dark";
type ColorTheme = "purple" | "blue" | "green";

export default function AppearanceScreen() {
  const [selectedMode, setSelectedMode] = useState<ThemeMode>("light");
  const [selectedColor, setSelectedColor] = useState<ColorTheme>("purple");

  const handleApply = () => {
    console.log(`Applying → Mode: ${selectedMode} | Color: ${selectedColor}`);
    //This is just for demonstration purposes
    // TODO: apply theme globally
  };

  return (
    <View className="flex-1 bg-gray-50 ">
      <ScrollView className="flex-1 px-6 pt-8">
        {/* Theme Mode Section */}
        <Text className="text-xl font-bold text-gray-800 mb-5">Theme Mode</Text>

        <View className="flex-row justify-between mb-10">
          {/* Light Mode Card */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedMode("light")}
            className={`flex-1 mr-3 rounded-2xl overflow-hidden border-2 ${
              selectedMode === "light"
                ? "border-amethyst"
                : "border-transparent"
            }`}
          >
            <View className="bg-white p-5 items-center">
              <View className="w-20 h-32 bg-gray-100 rounded-lg mb-3 border border-gray-200" />
              <Text className="text-base font-medium text-gray-800">Light</Text>
              <Text className="text-xs text-gray-500 mt-1">
                Clean and bright interface
              </Text>
            </View>
          </TouchableOpacity>

          {/* Dark Mode Card */}
          <TouchableOpacity
            activeOpacity={0.8}
            onPress={() => setSelectedMode("dark")}
            className={`flex-1 ml-3 rounded-2xl overflow-hidden border-2 ${
              selectedMode === "dark" ? "border-amethyst" : "border-transparent"
            }`}
          >
            <View className="bg-gray-900 p-5 items-center">
              <View className="w-20 h-32 bg-gray-800 rounded-lg mb-3 border border-gray-700" />
              <Text className="text-base font-medium text-white">Dark</Text>
              <Text className="text-xs text-gray-400 mt-1">
                Easy on eyes in low light
              </Text>
            </View>
          </TouchableOpacity>
        </View>
        {/* Color Theme Section */}
        <Text className="text-xl font-bold text-gray-800 mb-5">
          Color Theme
        </Text>
        <View className="flex-row justify-around items-center bg-white py-8 px-6 rounded-2xl shadow-sm border border-gray-200">
          {(["purple", "blue", "green"] as ColorTheme[]).map((color) => (
            <TouchableOpacity
              key={color}
              onPress={() => setSelectedColor(color)}
              className="items-center"
            >
              <View
                className={`
          w-20 h-20 rounded-full 
          border-4 transition-all duration-200
          ${
            selectedColor === color
              ? "border-amethyst scale-110 shadow-md"
              : "border-transparent"
          }
        `}
                style={{
                  backgroundColor:
                    color === "purple"
                      ? "#A855F7"
                      : color === "blue"
                      ? "#3B82F6"
                      : "#10B981",
                }}
              />

              <Text className="mt-3 text-sm font-medium capitalize text-gray-700">
                {color}
              </Text>
            </TouchableOpacity>
          ))}
        </View>

        {/* Apply Button */}
        <TouchableOpacity
          onPress={handleApply}
          activeOpacity={0.85}
          className="mt-12 mb-10 bg-amethyst py-5 rounded-2xl items-center shadow-lg"
        >
          <Text className="text-white text-lg font-semibold">
            Apply Changes
          </Text>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
}
