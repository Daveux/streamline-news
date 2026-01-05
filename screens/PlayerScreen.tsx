import React from "react";
import { View, Text, TouchableOpacity, StyleSheet, Platform, useWindowDimensions } from "react-native";
import { Video } from "expo-av";
import { VideoItem } from "../types/video";

type Props = {
  video: VideoItem;
  onExit: () => void;
};

export function PlayerScreen({ video, onExit }: Props) {
  const { width, height } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  const maxPlayerWidth = 1200;
  const playerWidth = isWeb ? Math.min(maxPlayerWidth, width) : width;

  // 16:9 player, sized for desktop
  const videoWidth = isWeb ? Math.min(playerWidth, 1100) : width;
  const videoHeight = Math.floor((videoWidth * 9) / 16);

  return (
    <View style={styles.page}>
      <View style={[styles.container, isWeb && { width: playerWidth }]}>
        <View style={styles.topRow}>
          <TouchableOpacity onPress={onExit}>
            <Text style={styles.exit}>← Back</Text>
          </TouchableOpacity>
          <Text style={styles.badge}>DEMO</Text>
        </View>

        <View style={styles.playerWrap}>
          <Video
            source={{ uri: video.source }}
            style={{ width: videoWidth, height: videoHeight, borderRadius: 12 }}
            resizeMode="contain"
            useNativeControls
            shouldPlay
          />
        </View>

        <Text style={styles.title}>{video.title}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: "#000",
    alignItems: "center",
  },
  container: {
    flex: 1,
    padding: 16,
  },
  topRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    marginBottom: 14,
  },
  exit: {
    color: "#4DA6FF",
    fontSize: 16,
  },
  badge: {
    color: "#111",
    backgroundColor: "#FFF",
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 999,
    fontSize: 12,
    fontWeight: "700",
  },
  playerWrap: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "700",
    marginTop: 6,
  },
});
