import portfolioImage from '../assets/headshot.jpg';


function HomePage() {
    return (
        <article>
            <section>
                <h1>Hello, I'm Nicole Gaddis.</h1>
                <h3>Computer Science Major</h3>
            </section>

            <section>
                <img style={{width: '350px'}} src={portfolioImage} alt="Head shot picture of Nicole." />
            </section>

            <section>
                <p> 
                    Works well both in a team and individually, has experience with
                    programming in several coding languages, a problem-solving aptitude, is dependable, and has the
                    ability to adapt to changing requirements. Always eager to learn new skills when the opportunity
                    presents itself. Current goal is to expand current knowledge and earn professional hands on 
                    experience in programming, web development, etc..
                </p>
            </section>

       
        </article>
    );
}

export default HomePage;