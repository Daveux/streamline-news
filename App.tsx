import React, { useState } from "react";
import { SafeAreaProvider } from "react-native-safe-area-context";
import { VideoItem } from "./types/video";
import { HomeScreen } from "./screens/HomeScreen";
import { PlayerScreen } from "./screens/PlayerScreen";

export default function App() {
  const [selectedVideo, setSelectedVideo] = useState<VideoItem | null>(null);

  return (
    <SafeAreaProvider style={{ flex: 1 }}>
      {selectedVideo ? (
        <PlayerScreen
          video={selectedVideo}
          onExit={() => setSelectedVideo(null)}
        />
      ) : (
        <HomeScreen onSelectVideo={setSelectedVideo} />
      )}
    </SafeAreaProvider>
  );
}
