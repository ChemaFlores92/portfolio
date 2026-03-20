import React from "react";

const featuredProject = {
  title: "ProyectoPadel · TFC",
  summary:
    "Aplicacion web enfocada en la gestion de reservas y organizacion de partidos de padel, desarrollada como proyecto final de GS DAW.",
  challenge:
    "Crear una experiencia clara para usuarios no tecnicos y, al mismo tiempo, construir una base fullstack mantenible.",
  solution:
    "Diseñe una interfaz simple con flujos directos de reserva y una arquitectura de componentes reutilizables conectada a servicios backend.",
  stack: ["React", "JavaScript", "Node.js", "Express", "MongoDB", "REST API"],
  repo: "https://github.com/ChemaFlores92/ProyectoPadel"
};

const skills = [
  "Desarrollo Frontend con React",
  "APIs REST y arquitectura backend",
  "Diseño responsive mobile-first",
  "Control de versiones con Git y GitHub",
  "Documentacion tecnica y enfoque de producto",
  "Trabajo en equipo con metodologias agiles"
];

const process = [
  {
    title: "Estrategia",
    text: "Defino objetivos claros y priorizo funcionalidades con impacto real para el usuario."
  },
  {
    title: "Construccion",
    text: "Desarrollo interfaces limpias y backend robusto con atencion al rendimiento y mantenibilidad."
  },
  {
    title: "Entrega",
    text: "Valido experiencia en distintos dispositivos y preparo despliegue continuo para iterar rapido."
  }
];

function SocialIcon({ href, label, title, children }) {
  return (
    <a className="socialIcon" href={href} aria-label={label} title={title} target={href.startsWith("http") ? "_blank" : undefined} rel={href.startsWith("http") ? "noreferrer" : undefined}>
      {children}
    </a>
  );
}

export default function App() {
  return (
    <div className="page">
      <header className="hero" id="inicio">
        <nav className="nav">
          <a className="brand" href="#inicio">
            Chema Flores Ruiz
          </a>
          <div className="navLinks">
            <a href="#proyecto">Proyecto</a>
            <a href="#stack">Stack</a>
            <a href="#contacto">Contacto</a>
          </div>
        </nav>

        <div className="heroGrid revealUp">
          <div className="heroText">
            <p className="eyebrow">Frontend Developer · GS DAW</p>
            <h1>Construyo productos web serios, limpios y listos para crecer.</h1>
            <p className="lead">
              Soy desarrollador web junior con enfoque fullstack. Me gusta unir diseno, codigo y logica de negocio para transformar ideas en experiencias digitales fiables.
            </p>
            <div className="ctaRow">
              <a className="btn primary" href="#proyecto">
                Ver caso real
              </a>
              <a className="btn ghost" href="mailto:chemaflores92@gmail.com">
                Contactar
              </a>
            </div>
          </div>

          <aside className="portraitCard">
            <img
              src="/chema.jpg"
              alt="Foto de Chema Flores Ruiz"
              onError={(event) => {
                event.currentTarget.src = "/avatar.svg";
              }}
            />
            <div className="portraitMeta">
              <h2>Disponible para primer empleo</h2>
              <p>Frontend o Fullstack · Remoto / Hibrido</p>
            </div>
          </aside>
        </div>
      </header>

      <main>
        <section id="proyecto" className="section case revealUp">
          <div className="sectionHead">
            <p className="sectionKicker">Caso de estudio</p>
            <h2>{featuredProject.title}</h2>
          </div>

          <div className="caseGrid">
            <article className="caseNarrative">
              <p>{featuredProject.summary}</p>
              <h3>Reto</h3>
              <p>{featuredProject.challenge}</p>
              <h3>Solucion</h3>
              <p>{featuredProject.solution}</p>
              <a className="textLink" href={featuredProject.repo} target="_blank" rel="noreferrer">
                Ver repositorio en GitHub
              </a>
            </article>

            <aside className="caseMeta">
              <h3>Stack aplicado</h3>
              <div className="tags">
                {featuredProject.stack.map((tech) => (
                  <span key={tech}>{tech}</span>
                ))}
              </div>
              <div className="metricList">
                <div>
                  <strong>1</strong>
                  <span>Proyecto end-to-end</span>
                </div>
                <div>
                  <strong>100%</strong>
                  <span>Desarrollo propio</span>
                </div>
                <div>
                  <strong>GS DAW</strong>
                  <span>Entrega final academica</span>
                </div>
              </div>
            </aside>
          </div>
        </section>

        <section id="stack" className="section gridTwo revealUp">
          <article className="panel">
            <p className="sectionKicker">Capacidades</p>
            <h2>Stack y fortalezas</h2>
            <ul className="cleanList">
              {skills.map((skill) => (
                <li key={skill}>{skill}</li>
              ))}
            </ul>
          </article>

          <article className="panel">
            <p className="sectionKicker">Metodo</p>
            <h2>Como trabajo</h2>
            <div className="processList">
              {process.map((item) => (
                <div key={item.title}>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </article>
        </section>
      </main>

      <footer id="contacto" className="footer revealUp">
        <p className="sectionKicker">Contacto</p>
        <h2>Construyamos algo potente</h2>
        <p>
          Si te encaja mi perfil, escribeme y agendamos una llamada.
        </p>

        <div className="socialLinks">
          <SocialIcon href="mailto:chemaflores92@gmail.com" label="Enviar email a Chema" title="Gmail">
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M3 5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-13A2.5 2.5 0 0 1 3 18.5zm2.2.9v11.2h1.9V9.1L12 13l4.9-3.9v8.5h1.9V6.4L12 11.6z"
                fill="currentColor"
              />
            </svg>
          </SocialIcon>

          <SocialIcon
            href="https://www.linkedin.com/in/chema-flores-ruiz-231b6422a/"
            label="Perfil de LinkedIn de Chema"
            title="LinkedIn"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M6.2 8.5a1.7 1.7 0 1 1 0-3.4 1.7 1.7 0 0 1 0 3.4M4.8 9.8h2.8V19H4.8zm4.6 0h2.7v1.3h.1c.4-.7 1.3-1.6 2.8-1.6 3 0 3.5 1.9 3.5 4.5V19h-2.8v-4.4c0-1 0-2.4-1.5-2.4s-1.8 1.1-1.8 2.3V19H9.4z"
                fill="currentColor"
              />
            </svg>
          </SocialIcon>

          <SocialIcon
            href="https://github.com/ChemaFlores92"
            label="Perfil de GitHub de Chema"
            title="GitHub"
          >
            <svg viewBox="0 0 24 24" aria-hidden="true">
              <path
                d="M12 2a10 10 0 0 0-3.2 19.5c.5.1.7-.2.7-.5v-1.9c-2.8.6-3.4-1.2-3.4-1.2-.4-1-1-1.3-1-1.3-.8-.5.1-.5.1-.5.9.1 1.4.9 1.4.9.8 1.4 2.2 1 2.8.8.1-.6.3-1 .6-1.3-2.2-.2-4.6-1.1-4.6-4.9 0-1.1.4-2 1-2.8-.1-.2-.4-1.2.1-2.6 0 0 .8-.3 2.8 1a9.8 9.8 0 0 1 5 0c2-1.3 2.8-1 2.8-1 .6 1.4.2 2.4.1 2.6.7.8 1 1.7 1 2.8 0 3.8-2.3 4.6-4.6 4.9.4.3.7 1 .7 2.1V21c0 .3.2.6.7.5A10 10 0 0 0 12 2"
                fill="currentColor"
              />
            </svg>
          </SocialIcon>
        </div>
      </footer>
    </div>
  );
}
