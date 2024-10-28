export async function fetchTokens(username, password) {
  try {
    const res = await fetch("https://dummyjson.com/auth/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ username, password }),
    });
    const data = await res.json();

    if (!res.ok || !data.accessToken) {
      throw new Error("Error in fetching the tokens:", data.error);
    }

    return data.accessToken;
  } catch (err) {
    console.error(err);
    throw err;
  }
}
