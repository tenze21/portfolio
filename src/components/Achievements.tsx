import { achievements } from "../data/achievements";
import AchievementCard from "./AchievementCard";

export default function Achievements(){
    return(
        <section className="achievements" aria-labelledby="achievement_header" id="achievements">
            <h2 id="achievement_header">Achievements</h2>
            <div className="certs">
                {achievements.map((cert)=>(
                    <AchievementCard key={cert.title} title={cert.title} image={cert.image} issuer={cert.issuer} date={cert.date}/>
                ))}
            </div>
        </section>
    )
}
