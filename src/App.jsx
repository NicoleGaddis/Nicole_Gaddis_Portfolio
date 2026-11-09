import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './App.css'
import RootLayout from './pages/RootLayout'
import ErrorPage from './pages/ErrorPage'
import HomePage from './pages/HomePage'
import AboutPage from './pages/AboutPage'
import ContactPage, { saveMessageAction } from './pages/ContactPage'
import ProjectsPage, { projectsLoader } from './pages/ProjectsPage';
import ProjectsDetailPage, { projectDetailLoader } from './pages/ProjectDetailPage';


const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    errorElement: <ErrorPage />,
    children: [
      {
        index: true,
        element: <HomePage />
      },
      {
        path: 'about',
        element: <AboutPage />
      },
      {
        path: 'contact',
        element: <ContactPage />,
        action: saveMessageAction
      },
      {
        path: 'projects',
        children: [
          {
            index: true,
            element: <ProjectsPage />,
            loader: projectsLoader
          },
          {
            path: ':projectId',
            id: 'project-detail',
            loader: projectDetailLoader,
            index: true,
            element: <ProjectsDetailPage />
          }
        ]
      }

    ]
  }
])

function App() {
  // const [count, setCount] = useState(0)

  return (
    <>
      <RouterProvider router={router} />
      {/* <section id="center">
        <div className="hero">
          <img src={heroImg} className="base" width="170" height="179" alt="" />
          <img src={reactLogo} className="framework" alt="React logo" />
          <img src={viteLogo} className="vite" alt="Vite logo" />
        </div>
        <div>
          <h1>Get started</h1>
          <p>
            Edit <code>src/App.jsx</code> and save to test <code>HMR</code>
          </p>
        </div>
        <button
          type="button"
          className="counter"
          onClick={() => setCount((count) => count + 1)}
        >
          Count is {count}
        </button>
      </section> */}

      {/* <div className="ticks"></div>

      

      <div className="ticks"></div>
      <section id="spacer"></section> */}
    </>
  )
}

export default App
