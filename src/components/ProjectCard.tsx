export default function ProjectCard({
  title,
  image,
  summary,
  stack,
  period,
}: {
  title: string;
  image: string;
  summary: string;
  stack: string[];
  period: string;
}) {
  return (
    <article className="project-card">
        <div className="card-media">
            <img src={image} alt="" loading="lazy" />
        </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{summary}</p>
        <ul className="tags">
          {stack.map((tech: string) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>
        <p className="meta">{period}</p>
      </div>
    </article>
  );
}
