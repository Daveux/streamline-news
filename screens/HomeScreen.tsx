import React from "react";
import { View, Text, FlatList, StyleSheet } from "react-native";
import { VideoItem } from "../types/video";
import { VIDEOS } from "../data/videos";
import { VideoCard } from "../components/VideoCard";

type Props = {
  onSelectVideo: (video: VideoItem) => void;
};

export function HomeScreen({ onSelectVideo }: Props) {
  const rails = ["Top Stories", "Live Now", "Trending"];

  return (
    <View style={styles.container}>
      <Text style={styles.brand}>Streamline News</Text>

      {rails.map((rail) => (
        <View key={rail} style={styles.rail}>
          <Text style={styles.railTitle}>{rail}</Text>

          <FlatList
            horizontal
            data={VIDEOS}
            keyExtractor={(item) => item.id}
            renderItem={({ item }) => (
              <VideoCard item={item} onPress={onSelectVideo} />
            )}
            showsHorizontalScrollIndicator={false}
          />
        </View>
      ))}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#0B0B0B",
    paddingVertical: 16,
  },
  brand: {
    color: "#FFFFFF",
    fontSize: 28,
    fontWeight: "700",
    marginLeft: 16,
    marginBottom: 12,
  },
  rail: {
    marginBottom: 24,
  },
  railTitle: {
    color: "#FFFFFF",
    fontSize: 18,
    fontWeight: "600",
    marginLeft: 16,
    marginBottom: 8,
  },
});
