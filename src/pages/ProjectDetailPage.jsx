import { Link, useRouteLoaderData, useNavigate, useSubmit } from 'react-router-dom';

function ProjectsDetailPage() {
    const navigate = useNavigate();

    const project = useRouteLoaderData('project-detail');
    function cancelHandler() {
        navigate('..');
    }

    return (

        <article>
         
                <h1>Project Details</h1>
        
            <div id='next-steps'>
                <button type="button" onClick={cancelHandler}>
                    Return
                </button>
            </div>
            <header>
                <h1>{project.name}</h1>
                <h3>Year: {project.year} </h3>
                <p>{project.description} </p>
            </header>
            <main>
                <div>
                    <ul>
                        {project.languages.map((language, index) => (
                            <li key={index}>
                                {language}
                            </li>
                        ))}
                    </ul>
                </div>
                <div>
                    <a href={project.link.replace(/["']/g, "")} target="_blank">
                        Open GitHub
                    </a>
                </div>
            </main>
        </article>

    );
}

export default ProjectsDetailPage;

export async function projectDetailLoader({ request, params }) {
    const id = params.projectId;

    const response = await fetch('https://nicole-g-portfolio-default-rtdb.firebaseio.com/projects/' + id + '.json');

    if (!response.ok) {
        throw new Response(
            JSON.stringify({ title: 'Load Error', message: 'Unable to load selected project data.' }),
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

        console.log(projectsArray)
        return data;
    }
};
