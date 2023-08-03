import { useState, useEffect } from "react";

// in-memory cache to avoid duplicated requests
const videoDataCache = {};

export const useFetchVideoData = (videoId) => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchVideoData = async () => {
      if (videoDataCache[videoId]) {
        setData(videoDataCache[videoId]);
        return;
      }

      try {
        const response = await fetch(`/data/title/${videoId}`);
        if (!response.ok) {
          throw new Error(`Error: ${response.status}`);
        }
        const data = await response.json();
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
