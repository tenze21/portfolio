import bannerImg from "../assets/banner-profile.jpg";

export default function Banner(){
    return(
        <section aria-label="Banner" className="banner" id="top">
            <div className="banner-word">
                <h2 className="name">Tenzin Choda</h2>
                <div className="banner-text-main">
                    <h2>Fullstack Web3 Developer</h2>
                    <h2>Building secure, scalable web applications</h2>
                </div>
                <p>Specializing in fullstack DApp development, smart contract development and security.</p>
                <div className="banner-actions">
                    <a href="#projects" className="primary-action">View Projects</a>
                    <a href="/tenzin_choda_cv.pdf" download="tenzin_choda_cv.pdf" className="cv-button">Download CV</a>
                </div>
            </div>
            <div className="banner-img">
                <img src={bannerImg} alt="A descent picture of myself"/>
            </div>
        </section>
    )
}
