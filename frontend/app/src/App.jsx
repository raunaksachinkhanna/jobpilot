import React, { useState } from "react";
import { api } from "./api";

export default function App() {
  const [name, setName] = useState("");
  const [role, setRole] = useState("");
  const [jobDescription, setJD] = useState("");
  const [experience, setExp] = useState("");
  const [resume, setResume] = useState("");
  const [cover, setCover] = useState("");

  const onGenerateResume = async () => {
    const payload = { name, role, job_description: jobDescription, experience: experience.split("\n").filter(Boolean) };
    const res = await api.post("/generate/resume", payload);
    setResume(res.resume);
  };

  const onGenerateCover = async () => {
    const payload = { name, role, job_description: jobDescription, experience: experience.split("\n").filter(Boolean) };
    const res = await api.post("/generate/cover-letter", payload);
    setCover(res.cover_letter);
  };

  return (
    <div style={{ maxWidth: 940, margin: "2rem auto", padding: "0 1rem", fontFamily: "Inter, system-ui, sans-serif" }}>
      <h1>JobPilot</h1>
      <p>AI-powered resumes, cover letters, and streamlined job applications.</p>
      <div>
        <label>Name</label>
        <input value={name} onChange={(e) => setName(e.target.value)} placeholder="FirstName LastName" />
        <label>Target Role</label>
        <input value={role} onChange={(e) => setRole(e.target.value)} placeholder="Software Engineer" />
        <label>Job Description</label>
        <textarea rows={4} value={jobDescription} onChange={(e) => setJD(e.target.value)} />
        <label>Experience</label>
        <textarea rows={4} value={experience} onChange={(e) => setExp(e.target.value)} />
      </div>
      <button onClick={onGenerateResume}>Generate Resume</button>
      <button onClick={onGenerateCover}>Generate Cover Letter</button>
      <pre>{resume}</pre>
      <pre>{cover}</pre>
    </div>
  );
}
