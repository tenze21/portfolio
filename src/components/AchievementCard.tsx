export default function AchievementCard({
  title,
  image,
  issuer,
  date,
}: {
  title: string;
  image: string;
  issuer: string;
  date: string;
}) {
  return (
    <article className="achievement-card">
      <div className="card-media">
        <img src={image} alt="" loading="lazy" />
      </div>
      <div className="card-body">
        <h3>{title}</h3>
        <p>{issuer}</p>
        <p>{date}</p>
      </div>
    </article>
  );
}
