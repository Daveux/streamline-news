import React from "react";
import { View, Text, FlatList, StyleSheet, Platform, useWindowDimensions } from "react-native";
import { VideoItem } from "../types/video";
import { VIDEOS } from "../data/video";
import { VideoCard } from "../components/VideoCard";

type Props = {
  onSelectVideo: (video: VideoItem) => void;
};

export function HomeScreen({ onSelectVideo }: Props) {
  const rails = ["Top Stories", "Live Now", "Trending"];
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  const maxContentWidth = 1200;
  const contentWidth = isWeb ? Math.min(maxContentWidth, width) : width;

  return (
    <View style={styles.page}>
      <View style={[styles.container, isWeb && { width: contentWidth }]}>
        <Text style={styles.brand}>Streamline News</Text>

        {rails.map((rail) => (
          <View key={rail} style={styles.rail}>
            <Text style={styles.railTitle}>{rail}</Text>

            <FlatList
              horizontal
              data={VIDEOS}
              keyExtractor={(item) => item.id}
              renderItem={({ item }) => <VideoCard item={item} onPress={onSelectVideo} />}
              showsHorizontalScrollIndicator={false}
              contentContainerStyle={styles.railContent}
              style={styles.railList}
            />
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    alignItems: "center", 
  },
  container: {
    flex: 1,
    paddingVertical: 16,
    paddingHorizontal: 16,
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginBottom: 12,
  },
  rail: {
    marginBottom: 28,
  },
  railTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginBottom: 10,
  },
  railContent: {
    paddingRight: 16,
  },
  railList: {
    flexGrow: 0,
  },
});
