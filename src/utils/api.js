const fetchLatestPosts = async () => {
  const res = await fetch("/data/latestData.json");
  if (!res.ok) throw new Error("Error fetching latestData.json");
  const data = await res.json();
  return data.latestPosts || [];
};

export { fetchLatestPosts };
