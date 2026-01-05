import React, { useCallback } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import { VideoItem } from "../types/video";

const { width } = Dimensions.get("window");

type Props = {
  item: VideoItem;
  onPress: (video: VideoItem) => void;
};

export const VideoCard = React.memo(({ item, onPress }: Props) => {
  const handlePress = useCallback(() => {
    onPress(item);
  }, [item, onPress]);

  return (
    <TouchableOpacity onPress={handlePress} style={styles.card}>
      <Image source={{ uri: item.thumbnail }} style={styles.thumbnail} />
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    width: width * 0.6,
    marginLeft: 16,
  },
  thumbnail: {
    width: "100%",
    height: 140,
    borderRadius: 8,
    backgroundColor: "#222",
  },
  title: {
    color: "#EDEDED",
    fontSize: 14,
    marginTop: 8,
  },
});
