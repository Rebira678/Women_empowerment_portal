import { useState } from "react";
import { loginUser } from "../api.js";

export default function Login() {
  const [form, setForm] = useState({ email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await loginUser(form);

      if (res.msg === "User not found") {
        alert("This email is not registered. Please sign up first.");
      } else if (res.msg === "Incorrect password") {
        alert("Incorrect password. Please try again.");
      } else if (res.token) {
        localStorage.setItem("token", res.token);
        alert("Login successful!");
        window.location.href = "/dashboard";
      } else {
        alert("Something went wrong. Please try again.");
      }
    } catch (err) {
      console.error(err);
      alert("Network error. Make sure your backend is running.");
    }
  };

  return (
    <div
      className="d-flex justify-content-center align-items-center"
      style={{ height: "100vh", width: "100vw", background: "#f8f9fa" }}
    >
      <div
        className="p-4 bg-white rounded shadow"
        style={{ width: "100%", maxWidth: "400px" }}
      >
        <h2 className="mb-4 text-center">Login</h2>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={form.email}
            onChange={(e) => setForm({ ...form, email: e.target.value })}
            required
          />
          <input
            type="password"
            className="form-control mb-3"
            placeholder="Password"
            value={form.password}
            onChange={(e) => setForm({ ...form, password: e.target.value })}
            required
          />
          <button className="btn btn-danger w-100" type="submit">
            Login
          </button>
        </form>
        <p className="text-center mt-3">
          Don't have an account? <a href="/register">Register here</a>
        </p>
      </div>
    </div>
  );
}
