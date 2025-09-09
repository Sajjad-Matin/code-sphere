import { createBrowserRouter } from "react-router-dom";
import Layout from "./Pages/Layout";
import HomePage from "./Pages/HomePage";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Team from "./Pages/Team";
import Projects from "./Pages/Projects";
import Contact from "./Pages/Contact";
import ErrorPage from "./Pages/ErrorPage";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Layout />,
        errorElement: <ErrorPage />,
        children: [
            {
                path: '',
                element: <HomePage />
            },
            {
                path: 'services',
                element: <Services />
            },
            {
                path: 'about',
                element: <About />
            },
            {
                path: 'team',
                element: <Team />
            },
            {
                path: 'projects',
                element: <Projects />
            },
            {
                path: 'contact',
                element: <Contact />
            }
        ]
    }
])

export default router;