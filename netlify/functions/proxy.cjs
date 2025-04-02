import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";
  const url = new URL(event.rawUrl);
  const queryParams = url.searchParams;
  const action = queryParams.get("action");
  const endpoint = `${BACKEND_URL}/index.php?action=${action}`;

  const fetchOptions = {
    method: event.httpMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: event.headers["authorization"] || "",
    },
    body: event.body ? event.body : undefined,
  };

  try {
    const response = await fetch(endpoint, fetchOptions);
    const data = await response.json();

    return {
      statusCode: response.status,
      body: JSON.stringify(data),
    };
  } catch (error) {
    console.error("Error proxying request:", error);
    return {
      statusCode: 500,
      body: JSON.stringify({ error: "Server Error" }),
    };
  }
};
