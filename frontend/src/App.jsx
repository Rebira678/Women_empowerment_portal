// Women Empowerment Portal — Single-file React + Bootstrap App
// Save as App.jsx (or App.js) in a React project and run.
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import laughterImg from "./assets/women.jpg";
import AminaImg from "./assets/AminaImg.jpeg";
import ZanelleImg from "./assets/Zanelle_M.jpeg";
import MariamImg from "./assets/Mariam_Y.jpeg";
import SaraImg from "./assets/Sara_A.jpg";
import PriyaImg from "./assets/Priya_K.jpeg";
import LinaImg from "./assets/Lina_R..jpeg";

// Single-file approach: all styles are injected to avoid external CSS file.
const injectStyles = () => {
  const id = "wep-single-styles";
  if (document.getElementById(id)) return;
  const css = `
    :root { --navbar-h: 70px; --accent: #d6333f; }
    html,body,#root { height: 100%; }
    body { font-family: Inter, system-ui, -apple-system, 'Segoe UI', Roboto, 'Helvetica Neue', Arial; }
    .wep-navbar { backdrop-filter: blur(6px); }
    .wep-hero {
    min-height: calc(100vh - var(--navbar-h));
    width: 100vw;
    display: flex;
    align-items: center;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    padding-top: var(--navbar-h);
    }
    .wep-section { min-height: calc(100vh - var(--navbar-h)); padding-top: 3rem; padding-bottom: 3rem; }
    .container-max { max-width: 1200px; margin: 0 auto; padding-left: 1rem; padding-right: 1rem; }
    .video-card iframe { width:100%; height:220px; }
    .mentor-card img { height:160px; object-fit:cover; }
    .full-width { width:100%; }
    .cta-pill { background: linear-gradient(90deg, var(--accent), #ff6b6b); color:white; }
    .shadow-soft { box-shadow: 0 6px 18px rgba(0,0,0,0.08); }
    footer { background:#0b1220; color:#cfd8e3; }
    @media (max-width:576px){ .video-card iframe { height:160px; } }
  `;
  const s = document.createElement("style");
  s.id = id;
  s.appendChild(document.createTextNode(css));
  document.head.appendChild(s);
};

// Helper: open Google search — FIXED & VERIFIED
const searchGoogle = (query) => {
  const q = encodeURIComponent(query.trim());
  window.open(`https://www.google.com/search?q=${q}`, "_blank");
};

function Nav({ onNav }) {
  return (
    <nav
      className="navbar navbar-expand-lg navbar-light bg-white wep-navbar fixed-top shadow-sm"
      style={{ height: "var(--navbar-h)" }}
    >
      <div className="container-max d-flex align-items-center">
        <a
          className="navbar-brand fw-bold text-danger me-3"
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            onNav("home");
          }}
        >
          Women Empower
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navMenu"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navMenu">
          <ul className="navbar-nav ms-auto align-items-center">
            <li className="nav-item">
              <a
                className="nav-link"
                href="#home"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("home");
                }}
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#mentors"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("mentors");
                }}
              >
                Mentors
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#videos"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("videos");
                }}
              >
                Videos
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#stories"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("stories");
                }}
              >
                Success
              </a>
            </li>
            <li className="nav-item">
              <a
                className="nav-link"
                href="#programs"
                onClick={(e) => {
                  e.preventDefault();
                  onNav("programs");
                }}
              >
                Programs
              </a>
            </li>
            <li className="nav-item ms-3">
              <button
                className="btn cta-pill px-3 py-1"
                onClick={() => (window.location.href = "/register")}
              >
                Get Started
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

function Hero({ onExplore }) {
  const bg = laughterImg;
  return (
    <header
      id="home"
      className="wep-hero"
      style={{
        backgroundImage: `linear-gradient(rgba(11,17,29,0.45), rgba(11,17,29,0.25)), url(${bg})`,
      }}
    >
      <div className="container-max text-light text-center">
        <h1 className="display-5 fw-bold">
          Empowering Women. Building Futures.
        </h1>
        <p className="lead mt-3 mb-4">
          Mentors, videos, opportunities and inspiring stories — built to uplift
          and accelerate women across Africa and beyond.
        </p>
        <div className="d-flex justify-content-center gap-3">
          <button
            className="btn btn-lg btn-danger"
            onClick={() => onExplore("mentors")}
          >
            Meet Mentors
          </button>
          <button
            className="btn btn-lg btn-outline-light"
            onClick={() => onExplore("videos")}
          >
            Watch Inspiration
          </button>
        </div>
      </div>
    </header>
  );
}

// MENTORS
function MentorsSection() {
  const mentors = [
    {
      name: "Amina Hassan",
      title: "Software Engineering Mentor",
      img: AminaImg,
    },
    { name: "Zanelle M.", title: "Microfinance Expert", img: ZanelleImg },
    { name: "Mariam Y.", title: "Healthcare Researcher", img: MariamImg },
    { name: "Sara A.", title: "Founder & CEO", img: SaraImg },
    { name: "Priya K.", title: "Social Activist", img: PriyaImg },
    { name: "Lina R.", title: "Education Advocate", img: LinaImg },
  ];

  return (
    <section id="mentors" className="wep-section bg-light">
      <div className="container-max">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Mentorship Directory</h2>
            <p className="text-muted mb-0">
              Connect with experienced mentors across industries — filter, book
              sessions, and grow.
            </p>
          </div>
          <div>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() => searchGoogle("women mentor filter")}
            >
              Filter
            </button>
            <button
              className="btn btn-danger"
              onClick={() => (window.location.href = "/register")} // fixed redirect
            >
              Request Mentor
            </button>
          </div>
        </div>
        <div className="row g-4">
          {mentors.map((m, i) => (
            <div key={i} className="col-sm-6 col-md-4">
              <div className="card mentor-card shadow-soft h-100">
                <img src={m.img} className="card-img-top" alt={m.name} />
                <div className="card-body">
                  <h5 className="card-title">{m.name}</h5>
                  <p className="text-muted mb-2">{m.title}</p>
                  <div className="d-flex justify-content-between align-items-center">
                    <button
                      className="btn btn-outline-primary btn-sm"
                      onClick={() => searchGoogle(m.name)}
                    >
                      View Profile
                    </button>
                    <button
                      className="btn btn-danger btn-sm"
                      onClick={() => (window.location.href = "/register")} // fixed redirect
                    >
                      Book
                    </button>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// VIDEOS
function VideosSection() {
  const videos = [
    {
      id: "X1",
      title: "Inspiring Women in Technology – Meet Hila",
      url: "https://www.youtube.com/embed/reBahL57Lqc",
    },
    {
      id: "X2",
      title: "5 Career Lessons Every Woman in Tech Needs to Hear",
      url: "https://www.youtube.com/embed/EDY5uCSWpxA",
    },
    {
      id: "X3",
      title: "Closing the Funding Gap for Female Founders | Lucy Chow",
      url: "https://www.youtube.com/embed/727zolp-478",
    },
  ];

  return (
    <section id="videos" className="wep-section">
      <div className="container-max">
        <h2 className="fw-bold mb-3">Inspiration Videos</h2>
        <p className="text-muted mb-4">
          Curated talks, interviews and short lessons to inspire and teach.
        </p>
        <div className="row g-4">
          {videos.map((v, i) => (
            <div key={i} className="col-md-4">
              <div className="card video-card shadow-soft">
                <div className="ratio ratio-16x9">
                  <iframe
                    title={v.title}
                    src={v.url}
                    allowFullScreen
                    frameBorder="0"
                  ></iframe>
                </div>
                <div className="card-body">
                  <h5 className="card-title">{v.title}</h5>
                  <p className="text-muted">
                    Short description or takeaway for the video.
                  </p>
                  <button
                    className="btn btn-outline-secondary btn-sm"
                    onClick={() => (window.location.href = "/register")} // fixed redirect
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// STORIES
function StoriesSection() {
  const stories = [
    {
      name: "Amina",
      text: "From a small town to building a tech training center that taught 500+ girls.",
    },
    {
      name: "Zanelle",
      text: "Started micro-loans program that empowered 200 women entrepreneurs.",
    },
    {
      name: "Mariam",
      text: "Led research that improved maternal health outcomes in her region.",
    },
  ];
  return (
    <section id="stories" className="wep-section bg-light">
      <div className="container-max">
        <h2 className="fw-bold mb-3">Success Stories</h2>
        <p className="text-muted mb-4">Real women, real impact.</p>
        <div className="row g-4">
          {stories.map((s, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 bg-white rounded shadow-soft h-100">
                <h5 className="fw-bold">{s.name}</h5>
                <p className="text-muted">{s.text}</p>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => searchGoogle(s.name + " success story")}
                >
                  Read More
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// PROGRAMS
function ProgramsSection() {
  const programs = [
    {
      title: "Skills Bootcamp",
      desc: "8-week intensive training in web dev and digital skills.",
    },
    {
      title: "Seed Grants",
      desc: "Micro-grants up to $2,000 for early-stage women founders.",
    },
    {
      title: "Scholarships",
      desc: "Scholarships for technical diplomas and online courses.",
    },
  ];

  return (
    <section id="programs" className="wep-section">
      <div className="container-max">
        <div className="d-flex justify-content-between align-items-center mb-4">
          <div>
            <h2 className="fw-bold">Programs & Opportunities</h2>
            <p className="text-muted mb-0">
              Find programs that match your goals — training, funding and
              mentorship.
            </p>
          </div>
          <div>
            <button
              className="btn btn-outline-secondary me-2"
              onClick={() =>
                searchGoogle("women empowerment programs opportunities 2025")
              }
            >
              Explore All
            </button>
            <button
              className="btn btn-danger"
              onClick={() => searchGoogle("join women empowerment program now")}
            >
              Join Program
            </button>
          </div>
        </div>
        <div className="row g-4">
          {programs.map((p, i) => (
            <div key={i} className="col-md-4">
              <div className="p-4 bg-white rounded shadow-soft h-100">
                <h5 className="fw-bold">{p.title}</h5>
                <p className="text-muted">{p.desc}</p>
                <button
                  className="btn btn-outline-primary btn-sm"
                  onClick={() => searchGoogle(p.title + " women apply 2025")}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="py-5 mt-4">
      <div className="container-max text-center">
        <h5 className="fw-bold text-light">Women Empower</h5>
        <p className="text-muted">
          © {new Date().getFullYear()} — Built with purpose.
        </p>
      </div>
    </footer>
  );
}

export default function App() {
  const [active, setActive] = useState("home");

  useEffect(() => {
    injectStyles();
  }, []);

  const scrollTo = (id) => {
    setActive(id);
    const el = document.getElementById(id);
    if (!el) return;
    const navH =
      parseInt(
        getComputedStyle(document.documentElement).getPropertyValue(
          "--navbar-h"
        )
      ) || 70;
    const top = el.getBoundingClientRect().top + window.pageYOffset - navH + 8;
    window.scrollTo({ top, behavior: "smooth" });
  };

  return (
    <div className="bg-white">
      <Nav onNav={scrollTo} />
      <Hero onExplore={(id) => scrollTo(id)} />
      <main>
        <MentorsSection />
        <VideosSection />
        <StoriesSection />
        <ProgramsSection />
        <Footer />
      </main>
    </div>
  );
}
