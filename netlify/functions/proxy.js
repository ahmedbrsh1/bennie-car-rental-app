exports.handler = async (event) => {
  // Dynamically import `node-fetch`
  const fetch = (await import("node-fetch")).default;

  const BACKEND_URL = process.env.BACKEND_URL;
  const queryString = event.rawQueryString ? `?${event.rawQueryString}` : "";
  const endpoint = `${BACKEND_URL}/index.php${queryString}`;

  console.log("Proxying request to:", endpoint); // Log the backend endpoint

  try {
    const response = await fetch(endpoint, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        Authorization: event.headers.authorization || "",
      },
      body: event.body ? event.body : undefined,
    });

    const data = await response.text();
    console.log("Response from backend:", data); // Log the backend response

    return {
      statusCode: response.status,
      body: data,
    };
  } catch (error) {
    console.error("Error in Netlify Function:", error); // Log the error
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
