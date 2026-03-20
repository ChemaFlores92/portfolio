import React from "react";

const projects = [
  {
    title: "TFC - ProyectoPadel",
    description:
      "Proyecto desarrollado como trabajo final de GS DAW. Incluye frontend y backend, con enfoque en buenas practicas y arquitectura web completa.",
    stack: ["HTML", "CSS", "JavaScript", "React", "Node.js"],
    link: "https://github.com/ChemaFlores92/ProyectoPadel"
  }
];

const skills = [
  "HTML5",
  "CSS3",
  "JavaScript",
  "TypeScript",
  "React",
  "Node.js",
  "Express",
  "MongoDB",
  "Git",
  "REST APIs"
];

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="inicio">
        <nav className="nav">
          <a className="brand" href="#inicio">
            Chema Flores Ruiz
          </a>
          <div className="navLinks">
            <a href="#proyectos">Proyectos</a>
            <a href="#sobre-mi">Sobre mi</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="heroGrid">
          <div className="heroText">
            <p className="badge">Frontent Developer</p>
            <h1>
              Desarrollo aplicaciones web modernas con enfoque en rendimiento y UX.
            </h1>
            <p>
              Soy Chema Flores Ruiz, desarrollador web recien graduado de GS DAW. Me
              gusta crear soluciones frontend y backend limpias, mantenibles y
              centradas en resolver problemas reales.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href="#proyectos">
                Ver proyectos
              </a>
              <a className="btn ghost" href="#contacto">
                Contactar
              </a>
            </div>
          </div>

          <aside className="heroCard">
            <img
              src="/chema.jpg"
              alt="Foto de Chema Flores Ruiz"
              onError={(event) => {
                event.currentTarget.src = "/avatar.svg";
              }}
            />
            <h2>Disponible para primer empleo como desarrollador web</h2>
            <p>
              Abierto a oportunidades frontend o fullstack para seguir creciendo en
              entornos profesionales.
            </p>
          </aside>
        </div>
      </header>

      <main>
        <section id="proyectos" className="section">
          <div className="sectionHead">
            <h2>Proyectos destacados</h2>
            <p>Trabajo real desarrollado durante mi formacion en GS DAW.</p>
          </div>

          <div className="projectGrid">
            {projects.map((project) => (
              <article className="card" key={project.title}>
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <div className="tags">
                  {project.stack.map((tech) => (
                    <span key={tech}>{tech}</span>
                  ))}
                </div>
                <a href={project.link} target="_blank" rel="noreferrer">
                  Ver repositorio
                </a>
              </article>
            ))}
          </div>
        </section>

        <section id="sobre-mi" className="section split">
          <div>
            <h2>Sobre mi</h2>
            <p>
              Como desarrollador web, disfruto crear interfaces claras y construir
              logica de negocio robusta en backend.
            </p>
            <p>
              Busco mi primera oportunidad profesional para aportar desde el primer
              dia y seguir mejorando en cada proyecto.
            </p>
          </div>

          <div>
            <h2>Stack</h2>
            <div className="tags">
              {skills.map((skill) => (
                <span key={skill}>{skill}</span>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contacto" className="footer">
        <h2>Hablemos</h2>
        <p>
          Si quieres, te paso mi CV y montamos una entrevista tecnica o una demo en
          directo.
        </p>
        <div className="socialLinks">
          <a
            className="socialIcon"
            href="mailto:chemaflores92@gmail.com"
            aria-label="Enviar email a Chema"
            title="Gmail"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5zm2.2.9v11.2h1.9V9.1L12 13l4.9-3.9v8.5h1.9V6.4L12 11.6z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="socialIcon"
            href="https://www.linkedin.com/in/chema-flores-ruiz-231b6422a/"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de LinkedIn de Chema"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.2 8.5a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4M4.8 9.8h2.8V19H4.8zm4.6 0h2.7v1.3h.1c.4-.7 1.3-1.6 2.8-1.6 3 0 3.5 1.9 3.5 4.5V19h-2.8v-4.4c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V19H9.4z"
                fill="currentColor"
              />
            </svg>
          </a>
          <a
            className="socialIcon"
            href="https://github.com/ChemaFlores92"
            target="_blank"
            rel="noreferrer"
            aria-label="Perfil de GitHub de Chema"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.3-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.8-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.8 1a9.8 9.8 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.6.7.8 1 1.7 1 2.8 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 2.1V21c0 .3.2.6.7.5A10 10 0 0 0 12 2"
                fill="currentColor"
              />
            </svg>
          </a>
        </div>
      </footer>
    </div>
  );
}

