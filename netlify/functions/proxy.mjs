import fetch from "node-fetch";

exports.handler = async function (event, context) {
  const BACKEND_URL = process.env.BACKEND_URL || "http://localhost:8000";
  const url = new URL(event.rawUrl); // Get the raw URL from the request
  const queryParams = url.searchParams; // Extract query parameters from the URL

  // Extract the action parameter, which is always expected
  const action = queryParams.get("action");

  if (!action) {
    return {
      statusCode: 400,
      body: JSON.stringify({ error: "Missing required 'action' parameter" }),
    };
  }

  // Convert the query parameters into a key-value object, excluding 'action'
  const params = {};
  queryParams.forEach((value, key) => {
    if (key !== "action") {
      params[key] = value;
    }
  });

  // Log the parameters to ensure everything is being passed correctly
  console.log("Received action:", action);
  console.log("Received additional parameters:", params);

  // Construct the backend URL dynamically with the action and additional parameters
  const endpoint = `${BACKEND_URL}/index.php?action=${action}&${new URLSearchParams(
    params
  ).toString()}`;

  const fetchOptions = {
    method: event.httpMethod,
    headers: {
      "Content-Type": "application/json",
      Authorization: event.headers["authorization"] || "", // Optionally pass the Authorization header
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
