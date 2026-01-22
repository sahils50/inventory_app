import React, { useState } from "react";
import {
  View,
  Text,
  Switch,
  TouchableOpacity,
  Modal,
  Pressable,

} from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { FontAwesome } from "@expo/vector-icons";
import TwoFactoron from "@/components/setting/Security/TwoFactoron";
import TwoFactoroff from "@/components/setting/Security/TwoFactoroff";
import LoginHistory from "@/components/setting/Security/LoginHistory";
import ActiveLogin from "@/components/setting/Security/ActiveLogin";

/* ---------- TYPES ---------- */
type ItemType = "switch" | "arrow";

interface SecurityItem {
  id: number;
  title: string;
  description: string;
  icon: keyof typeof FontAwesome.glyphMap;
  type: ItemType;
}

/* ---------- DATA ---------- */
const securityItems: SecurityItem[] = [
  {
    id: 1,
    title: "Two-Factor Authentication",
    description: "Add an extra layer of security",
    icon: "mobile",
    type: "switch",
  },
  {
    id: 2,
    title: "Login History",
    description: "View recent login activity",
    icon: "history",
    type: "arrow",
  },
  {
    id: 3,
    title: "Active Login Sessions",
    description: "Manage logged-in devices",
    icon: "desktop",
    type: "arrow",
  },
  {
    id: 4,
    title: "Security Alerts",
    description: "Get notified about security events",
    icon: "bell",
    type: "switch",
  },
];

/* ---------- COMPONENT ---------- */
export default function SecurityCenter(){
  const [is2FAEnabled, setIs2FAEnabled] = useState<boolean>(false);
  const [activeModal, setActiveModal] = useState<string | null>(null);

  const openModal = (name: string) => setActiveModal(name);
  const closeModal = () => setActiveModal(null);

  return (
    <SafeAreaView className="flex-1 bg-white">
      {/* Header */}
      <View className="p-5 flex-row items-center gap-3">
        <FontAwesome
          name="shield"
          size={22}
          color="#7e22ce"
          className="bg-purple-200 w-10 h-10 text-center rounded-md pt-2"
        />
        <Text className="text-2xl font-bold text-blue-600">
          Security Center
        </Text>
      </View>

      {/* Cards */}
      {securityItems.map((item) => (
        <View
          key={item.id}
          className="flex-row items-center justify-between px-5 py-4 border-b border-gray-200"
        >
          {/* Left */}
          <View className="flex-row items-center gap-4">
            <FontAwesome
              name={item.icon}
              size={22}
              color="gray"
              className="bg-gray-200 w-10 h-10 text-center rounded-md pt-2"
            />
            <View>
              <Text className="font-bold text-lg">{item.title}</Text>
              <Text className="text-gray-500">{item.description}</Text>
            </View>
          </View>

          {/* Right */}
          {item.type === "switch" ? (
            <Switch
              value={is2FAEnabled}
              onValueChange={(value) => {
                setIs2FAEnabled(value);
                openModal(value ? "2fa-on" : "2fa-off");
              }}
              trackColor={{ false: "#d1d5db", true: "#a855f7" }}
              thumbColor={is2FAEnabled ? "#7e22ce" : "#f4f4f5"}
              style={{ transform: [{ scaleX: 1.4 }, { scaleY: 1.4 }] }}
            />
          ) : (
            <TouchableOpacity onPress={() => openModal(item.title)}>
              <FontAwesome name="chevron-right" size={20} color="#9ca3af" />
            </TouchableOpacity>
          )}
        </View>
      ))}

      {/* ---------- MODALS ---------- */}
      <Modal transparent visible={!!activeModal} animationType="fade">
        <View className="flex-1 bg-black/40 items-center justify-center">
          <View className="bg-white w-80 p-5 rounded-xl">
            {/* Modal Content */}
            {activeModal === "2fa-on" && (
              <>
                <TwoFactoron />
              </>
            )}

            {activeModal === "2fa-off" && (
              <>
                <TwoFactoroff />
              </>
            )}

            {activeModal === "Login History" && (
              <>
                <LoginHistory />
              </>
            )}

            {activeModal === "Active Login Sessions" && (
              <>
                <ActiveLogin />
              </>
            )}

            {/* Close Button */}
            <Pressable
              onPress={closeModal}
              className="bg-purple-600 py-2 rounded-lg"
            >
              <Text className="text-white text-center font-semibold">
                Close
              </Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}
