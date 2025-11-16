import React, { useEffect, useState } from "react";
import { API_URL, getResources, takeAction, getMe } from "../api.js";

export default function Dashboard() {
  const [user, setUser] = useState(null);
  const [mentors, setMentors] = useState([]);
  const [videos, setVideos] = useState([]);
  const [programs, setPrograms] = useState([]);
  const [stories, setStories] = useState([]);
  const token = localStorage.getItem("token");

  // --- Load all data on mount ---
  useEffect(() => {
    if (!token) return (window.location.href = "/login");
    loadUser();
    loadResources();
  }, []);

  const loadUser = async () => {
    const data = await getMe(token);
    if (data.error) {
      localStorage.removeItem("token");
      return (window.location.href = "/login");
    }
    setUser(data);
  };

  const loadResources = async () => {
    const mentors = await getResources("mentor");
    const videos = await getResources("video");
    const programs = await getResources("program");
    const stories = await getResources("story"); // optional
    setMentors(mentors || []);
    setVideos(videos || []);
    setPrograms(programs || []);
    setStories(stories || []);
  };

  const handleAction = async (type, id) => {
    const res = await takeAction(type, id, token);
    if (res.success) {
      alert(`${type} action successful!`);
      loadResources(); // reload to reflect changes
    } else {
      alert(res.error || "Action failed");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/"; // redirect to home
  };

  return (
    <div
      className="w-100 min-vh-100 d-flex flex-column"
      style={{ margin: 0, padding: 0 }}
    >
      {/* Header */}
      <header className="bg-danger text-white text-center py-5">
        <h1 className="display-4 fw-bold">Welcome, {user?.name || "User"}!</h1>
        <p className="lead">Explore mentors, videos, programs, and stories.</p>
        <button className="btn btn-outline-light mt-3" onClick={handleLogout}>
          Logout
        </button>
      </header>

      {/* Mentors */}
      <section className="py-5 bg-white">
        <h2 className="text-center text-danger mb-4">Mentors</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
          {mentors.map((m) => (
            <div
              key={m._id}
              className="card shadow-lg"
              style={{ width: "18rem", flex: "0 0 auto" }}
            >
              <img
                src={m.img}
                alt={m.title}
                className="card-img-top"
                style={{ height: "180px", objectFit: "cover" }}
              />
              <div className="card-body">
                <h5 className="card-title">{m.title}</h5>
                <p className="text-muted">{m.description}</p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleAction("mentor", m._id)}
                >
                  Book Mentor
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Videos */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <h2 className="text-center text-danger mb-4">Videos</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
          {videos.map((v) => (
            <div
              key={v._id}
              className="card shadow-lg"
              style={{ width: "20rem", flex: "0 0 auto" }}
            >
              <div className="ratio ratio-16x9">
                <iframe title={v.title} src={v.url} allowFullScreen></iframe>
              </div>
              <div className="card-body">
                <h5 className="card-title">{v.title}</h5>
                <p className="text-muted">{v.description}</p>
                <button
                  className="btn btn-danger w-100"
                  onClick={() => handleAction("video", v._id)}
                >
                  Save Video
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Programs */}
      <section className="py-5 bg-white">
        <h2 className="text-center text-danger mb-4">Programs</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
          {programs.map((p) => (
            <div
              key={p._id}
              className="card shadow-lg p-3"
              style={{ width: "18rem", flex: "0 0 auto" }}
            >
              <h5 className="fw-bold">{p.title}</h5>
              <p className="text-muted">{p.description}</p>
              <button
                className="btn btn-danger w-100"
                onClick={() => handleAction("program", p._id)}
              >
                Apply Program
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Stories */}
      <section className="py-5" style={{ backgroundColor: "#f8f9fa" }}>
        <h2 className="text-center text-danger mb-4">Success Stories</h2>
        <div className="d-flex flex-wrap justify-content-center gap-4 px-3">
          {stories.map((s) => (
            <div
              key={s._id}
              className="card shadow-lg p-3"
              style={{ width: "18rem", flex: "0 0 auto" }}
            >
              <h5 className="fw-bold">{s.title}</h5>
              <p>{s.description}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-4 mt-auto">
        © {new Date().getFullYear()} Women Empowerment Portal
      </footer>

      <style>{`
        .card:hover { transform: scale(1.05); transition: transform 0.3s ease; }
        body, html { margin:0; padding:0; width:100%; }
      `}</style>
    </div>
  );
}
