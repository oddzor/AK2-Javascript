export async function fetchData(
  url = "https://api.coinlore.net/api/tickers/?start=0&limit=50"
) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Failed to fetch API data:${response.status}`);
    }
    return await response.json();
  } catch (error) {
    console.error("Error fetching data:", error);
    return null;
  }
}
