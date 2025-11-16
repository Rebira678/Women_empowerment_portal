// api.js
const API_URL = process.env.REACT_APP_API_URL || "https://women-empowerment-portal.onrender.com";

// --- AUTH ---
export const registerUser = async ({ name, email, password }) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

export const getMe = async (token) => {
  try {
    const res = await fetch(`${API_URL}/api/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

// --- RESOURCES ---
export const getResources = async (category) => {
  try {
    const url = category
      ? `${API_URL}/api/resources?category=${category}`
      : `${API_URL}/api/resources`;
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

export const addResource = async (data, token) => {
  try {
    const res = await fetch(`${API_URL}/api/resources`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify(data),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

// --- USER ACTIONS (Book/Save/Apply) ---
export const takeAction = async (type, resourceId, token) => {
  try {
    const res = await fetch(`${API_URL}/api/resources/${type}/action`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ resourceId }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

export { API_URL };
