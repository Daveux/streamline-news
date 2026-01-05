import React, { useCallback } from "react";
import {
  Text,
  TouchableOpacity,
  StyleSheet,
  Image,
  useWindowDimensions,
  Platform,
} from "react-native";
import { VideoItem } from "../types/video";

type Props = {
  item: VideoItem;
  onPress: (video: VideoItem) => void;
};

export const VideoCard = React.memo(({ item, onPress }: Props) => {
  const { width } = useWindowDimensions();
  const isWeb = Platform.OS === "web";

  const cardWidth = isWeb ? 360 : Math.min(320, Math.floor(width * 0.72));
  const thumbHeight = isWeb ? 200 : 160;

  const handlePress = useCallback(() => onPress(item), [item, onPress]);

  return (
    <TouchableOpacity onPress={handlePress} style={[styles.card, { width: cardWidth }]}>
      <Image source={{ uri: item.thumbnail }} style={[styles.thumbnail, { height: thumbHeight }]} />
      <Text numberOfLines={2} style={styles.title}>
        {item.title}
      </Text>
    </TouchableOpacity>
  );
});

const styles = StyleSheet.create({
  card: {
    marginRight: 16,
  },
  thumbnail: {
    width: "100%",
    borderRadius: 12,
    backgroundColor: "#222",
  },
  title: {
    color: "#EDEDED",
    fontSize: 14,
    marginTop: 10,
    lineHeight: 18,
  },
});
