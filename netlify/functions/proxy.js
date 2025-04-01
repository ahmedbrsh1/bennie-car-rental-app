const fetch = require("node-fetch");

exports.handler = async (event) => {
  const BACKEND_URL = process.env.BACKEND_URL; // Set this in Netlify env variables
  const queryString = event.rawQueryString ? `?${event.rawQueryString}` : "";
  const endpoint = `${BACKEND_URL}/index.php${queryString}`;

  try {
    const response = await fetch(endpoint, {
      method: event.httpMethod,
      headers: {
        "Content-Type": "application/json",
        Authorization: event.headers.authorization || "", // Forward auth header
      },
      body: event.body ? event.body : undefined,
    });

    const data = await response.text();
    return {
      statusCode: response.status,
      body: data,
    };
  } catch (error) {
    return { statusCode: 500, body: JSON.stringify({ error: error.message }) };
  }
};
