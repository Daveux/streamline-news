import React from "react";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { Video } from "expo-av";
import { VideoItem } from "../types/video";

type Props = {
  video: VideoItem;
  onExit: () => void;
};

export function PlayerScreen({ video, onExit }: Props) {
  return (
    <View style={styles.container}>
      <Video
        source={{ uri: video.source }}
        style={styles.video}
        resizeMode="contain"
        useNativeControls
        shouldPlay
      />

      <View style={styles.meta}>
        <Text style={styles.title}>{video.title}</Text>

        <TouchableOpacity onPress={onExit}>
          <Text style={styles.exit}>← Back to Home</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#000",
  },
  video: {
    width: "100%",
    height: 300,
  },
  meta: {
    padding: 16,
  },
  title: {
    color: "#FFF",
    fontSize: 20,
    fontWeight: "600",
    marginBottom: 12,
  },
  exit: {
    color: "#4DA6FF",
    fontSize: 16,
  },
});
