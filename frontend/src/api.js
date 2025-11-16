const API_URL = "http://localhost:5000/api"; // change if deployed

// --- AUTH ---
export const registerUser = async ({ name, email, password }) => {
  try {
    const res = await fetch(`${API_URL}/auth/register`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const loginUser = async ({ email, password }) => {
  try {
    const res = await fetch(`${API_URL}/auth/login`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ email, password }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const getMe = async (token) => {
  try {
    const res = await fetch(`${API_URL}/auth/me`, {
      headers: { Authorization: `Bearer ${token}` },
    });
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

// --- RESOURCES ---
export const getResources = async (category) => {
  try {
    const url = category
      ? `${API_URL}/resources?category=${category}`
      : `${API_URL}/resources`;
    const res = await fetch(url);
    return await res.json();
  } catch (err) {
    console.error(err);
  }
};

export const addResource = async (data, token) => {
  try {
    const res = await fetch(`${API_URL}/resources`, {
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
  }
};

// --- USER ACTIONS (Book/Save/Apply) ---
export const takeAction = async (type, resourceId, token) => {
  try {
    const res = await fetch(`${API_URL}/action/take-action`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },
      body: JSON.stringify({ type, resourceId }),
    });
    return await res.json();
  } catch (err) {
    console.error(err);
    return { error: "Network error" };
  }
};

export { API_URL };
