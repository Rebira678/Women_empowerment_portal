import { useState } from "react";
import { registerUser } from "../api.js";

export default function Register() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await registerUser(form);

      if (res.msg === "Email already exists") {
        alert("This email is already registered. Please login.");
        window.location.href = "/login";
      } else if (res.user && res.user._id) {
        alert("Registration successful! Redirecting to login...");
        window.location.href = "/login";
      } else {
        alert("Registration failed. Try again.");
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
        <h2 className="mb-4 text-center">Register</h2>
        <form onSubmit={handleSubmit}>
          <input
            className="form-control mb-3"
            placeholder="Name"
            value={form.name}
            onChange={(e) => setForm({ ...form, name: e.target.value })}
            required
          />
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
            Register
          </button>
        </form>
        <p className="text-center mt-3">
          Already have an account? <a href="/login">Login here</a>
        </p>
      </div>
    </div>
  );
}
