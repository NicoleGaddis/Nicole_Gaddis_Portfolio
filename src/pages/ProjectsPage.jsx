import { Link, useLoaderData } from 'react-router-dom';

function ProjectsPage() {

    const projects = useLoaderData();
     {/* 4. Dynamic Portfolio & Detail Views:
                Store portfolio project data externally using either Firebase or a Local JSON Server.
                Render a main portfolio gallery displaying a minimum of 3 projects fetched asynchronously from your chosen backend.
                Make each portfolio item clickable to navigate to a dedicated detail page displaying extended information for that specific project.
                */}
    return (
        <section>
            <h1>All Projects</h1>
            <section id='next-steps' >
                <div id='social' >
                <ul>
                    {
                        projects.map((project) => (
                            <li key={project.id}>
                                <Link to={project.id}>
                                    {/* <img src={project.image} alt={project.title} style={{ maxWidth: '200px' }} /> */}
                                    <h2>{project.name}</h2>
                                    {/* <p>{project.description}</p> */}
                                    {/* <p>${project.rent} / month</p> */}
                                    <ul>
                                        {project.languages.map((language, index)=>(
                                            <li key={index}>
                                                {language}
                                            </li>
                                        ))}
                                    </ul>
                                </Link>
                            </li>
                        ))

                    }
                </ul>
                </div>
            </section>
        </section>
    );
}

export default ProjectsPage;

export async function projectsLoader() {
    const response = await fetch('https://nicole-g-portfolio-default-rtdb.firebaseio.com/projects.json');

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Load Error', message: 'Unable to load project data.' }),
            { status: 500 }
        );
    } else {
        const data = await response.json();

        const projectsArray = [];

        if (data) {
            for (const key in data) {
                projectsArray.push({
                    id: key,
                    ...data[key]
                });
            }
        }

        return projectsArray;
    }
}