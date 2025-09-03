import React, { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import "./About.css";

export default function About() {
  const [markdown, setMarkdown] = useState("");

  useEffect(() => {
    fetch(process.env.PUBLIC_URL + "/about.md")
      .then((res) => res.text())
      .then(setMarkdown)
      .catch(() => setMarkdown("# Sobre mí\nNo se pudo cargar el contenido."));
  }, []);

  return (
    <section className="about container">
      <div className="about-card">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </section>
  );
}
