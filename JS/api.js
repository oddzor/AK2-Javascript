export async function fetchData(url = "https://api.coinlore.net/api/tickers/") {
  try {
    const response = await fetch(url, {
      method: "GET",
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch API data:${response.status}`);
    }

    const data = await response.json();

    if (!Array.isArray(data.data)) {
      throw new Error("API response does not contain an array of data");
    }

    console.log(data);
    return data.data;
  } catch (error) {
    console.error("Error fetching data:", error);
    return [];
  }
}
