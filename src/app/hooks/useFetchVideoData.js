import { useState, useEffect } from "react";
import fetchWithRetry from "../network/NetworkUtils";

// in-memory cache to avoid duplicated requests
const videoDataCache = {};

export const useFetchVideoData = (videoId, videoData) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      if (videoDataCache[videoId]) {
        setData(videoDataCache[videoId]);
        return;
      }

      try {
        const data = await fetchWithRetry(`/data/title/${videoId}`);
        setData(data);
        videoDataCache[videoId] = data;
      } catch (err) {
        setError(err.message);
      }
    };

    if (videoId) {
      fetchVideoData();
    }
  }, [videoId]);

  return { data, error };
};
