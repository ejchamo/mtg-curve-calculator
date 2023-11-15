const getStats = async (deck) => {
  try {
    const response = await fetch("/api/v1/stats", {
      method: "POST",
      headers: new Headers({
        "Content-Type": "application/json",
      }),
      body: JSON.stringify({ deck }),
    });
    const body = await response.json();
    return body;
  } catch (err) {
    console.error(`Error in fetch: ${err.message}`);
  }
};

export default getStats;
