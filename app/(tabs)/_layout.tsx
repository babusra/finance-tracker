import React from "react";
import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Link, Tabs } from "expo-router";
import { Pressable, View } from "react-native";

import Colors from "@/constants/Colors";
import { useColorScheme } from "@/components/useColorScheme";
import { useClientOnlyValue } from "@/components/useClientOnlyValue";

// Tab ikonu bileşeni
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>["name"];
  color: string;
}) {
  return (
      <FontAwesome size={28} style={{ padding: -3 }} {...props} />
  );
}

export default function TabLayout() {
  const colorScheme = useColorScheme();

  return (
    <Tabs
      screenOptions={{
        tabBarActiveTintColor: Colors[colorScheme ?? "light"].tint,
        // Web'de header'ın statik render'ını devre dışı bırakıyoruz
        headerShown: useClientOnlyValue(false, true),
      }}
    >
      {/* Ana Ekran (Home) */}
      <Tabs.Screen
        name="index"
        options={{
          title: "Ana Sayfa",
          tabBarLabelStyle: { padding: 5 },
          tabBarIcon: ({ color }) => <TabBarIcon name="home" color={color} />,
          // headerRight: () => (
          //   <Link href="/modal" asChild>
          //     <Pressable>
          //       {({ pressed }) => (
          //         <FontAwesome
          //           name="info-circle"
          //           size={25}
          //           color={Colors[colorScheme ?? "light"].text}
          //           style={{ marginRight: 15, opacity: pressed ? 0.5 : 1 }}
          //         />
          //       )}
          //     </Pressable>
          //   </Link>
          // ),
        }}
      />
      {/* Gelirler Ekranı */}
      <Tabs.Screen
        name="income"
        options={{
          title: "Gelirler",
          tabBarLabelStyle: { padding: 5 },
          tabBarIcon: ({ color }) => <TabBarIcon name="dollar" color={color} />,
        }}
      />
      {/* Giderler Ekranı */}
      <Tabs.Screen
        name="expense"
        options={{
          title: "Giderler",
          tabBarLabelStyle: { padding: 5 },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="credit-card" color={color} />
          ),
        }}
      />
      {/* Bütçe Ekranı */}
      <Tabs.Screen
        name="budget"
        options={{
          title: "Bütçe",
          tabBarLabelStyle: { padding: 5 },
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="pie-chart" color={color} />
          ),
        }}
      />
    </Tabs>
  );
}
