
function AboutPage() {
    return (
        <section>
            <h1>About me</h1>
            <p>
                Starting with an intro to programming class in high school,
                I have continued to grow my skill sets in various languages
                through courses taken at Weber State University. Which has
                helped me become a detail oriented developer that enjoys solving
                problems, is comfortable working both on a team and individualy,
                and is hoping to apply my existing knowledge to help build and
                maintain projects in a professional setting while gaining
                experience working in software development.

            </p>

            <section id="next-steps">
                <div id="social">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>skill-tree</title>
                        <g fill="none" stroke="#429e97" stroke-linecap="round" stroke-linejoin="round"
                            stroke-width="2"><circle cx="12" cy="19" r="2.25" /><circle cx="6" cy="12" r="2.25" /><circle cx="18" cy="12" r="2.25" /><circle cx="6" cy="5" r="2.25" /><circle cx="18" cy="5" r="2.25" />
                            <path d="m10.54 17.29l-3.08-3.58m6 3.58l3.08-3.58M6 9.75v-2.5m12 2.5v-2.5" /></g></svg>
                    <h2>Technical Skills</h2>
                    <ul>
                        <li>
                            <section>
                                <h3>Programming</h3>
                                <ul>
                                    <li>C++</li>
                                    <li>C#</li>
                                    <li>Python</li>
                                    <li>JavaScript</li>
                                    <li>Java</li>
                                    <li>HTML</li>
                                    <li>CSS</li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Database</h3>
                                <ul>
                                    <li>SQL</li>
                                    <li>MSSQL</li>
                                    <li>Oracle</li>
                                    <li>MongoDB</li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Tools</h3>
                                <ul>
                                    <li>VS Code</li>
                                    <li>Visual Studio 2026</li>
                                    <li>Docker</li>
                                    <li>IntelliJ IDEA</li>
                                    <li>Apache Netbeans</li>
                                    <li>Ubuntu</li>
                                    <li>Git</li>
                                </ul>
                            </section>
                        </li>
                        <li>
                            <section>
                                <h3>Frontend/Backend</h3>
                                <ul>
                                    <li>WPF</li>
                                    <li>XAML</li>
                                    <li>React</li>
                                    <li>Node.js</li>
                                    <li>ASP.NET Core</li>
                                </ul>
                            </section>
                        </li>
                    </ul>
                    <br />

                </div>

            </section>
            <section id="docs">
                <div id="social">
                    <svg className="icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <title>education</title>
                        <path fill="#429e97" d="m21.45 8.61l-9-4.5a1 1 0 0 0-.89 0l-6 3l-3 1.5l-1 .5a1 1 0 0 0-.55.89v6h2v-5.38l2 1v3.83c0 2.06 3.12 4.56 7 4.56s7-2.49 7-4.56v-3.83l2.45-1.22c.34-.17.55-.52.55-.89s-.21-.72-.55-.89Zm-15 .29L12 6.12l6.76 3.38L12 12.88L5.24 9.5l1.21-.61ZM17 15.45c0 .76-2.11 2.56-5 2.56s-5-1.79-5-2.56v-2.83l4.55 2.28c.14.07.29.11.45.11s.31-.04.45-.11L17 12.62z" class="b" /></svg>
                    <h2>Academic Background</h2>
                    <ul>
                        <li>
                            <h3>Bachelor of Science in Computer Science</h3>
                            <p>Weber State University 󠁯•󠁏󠁏 Expected Dec 2026</p>
                        </li>
                        <li>
                            <h3>Associate of Applied Science in Computer Science</h3>
                            <p>Weber State University 󠁯•󠁏󠁏  Dec 2025</p>
                        </li>
                    </ul>
                </div>
            </section>
        </section>
    );
}

export default AboutPage;