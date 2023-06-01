import '../../styles/about.css';

const AboutComp = () => {
    return (
        <div className="about-container">
            <h2 className="cast-h2">Stáblista</h2>
            <div className="about-us">
                <div class="director">
                    <h2 className='mentor'>Rendező</h2>
                    <h3>Hári Zsófi</h3>
                    <p>mentor</p>
                </div>
                <h2 className='members'>Főszereplők</h2>
                <div className="cast">
                    <div className="member"><h4>Varga Lívia</h4></div>
                    <span>Front-End</span>
                </div>
                <div className="cast">
                    <div className="member"><h4>Kemény Kinga</h4></div>
                    <span>Front-End</span>
                </div>
                <div className="cast">
                    <div className="member"><h4>Dudás-Tóth Melinda</h4></div>
                    <span>Full-Stack</span>
                </div>
                <div className="cast">
                    <div className="member"><h4>Szabó Flóra</h4></div>
                    <span>Full-Stack</span>
                </div>
            </div>
        </div>
    )
}

export default AboutComp;