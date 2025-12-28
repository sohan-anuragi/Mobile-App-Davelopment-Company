import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { TechnologyRouts } from './Pages/Technology/TechnologyRouts.jsx';
import Footer from './components/footer-component/footer.jsx';
import AppLayout from './AppLayout.jsx';
import RootLayout from './RootLayout.jsx';
import { ServicesRouts } from './Pages/ServicesRouts/ServicesRouts.jsx';
import { solutionRouts } from './Pages/solutionRouts/SolutionRouts.jsx';
import { GamesRouts } from './Pages/GamesRouts/GamesRouts.jsx';

const  router = createBrowserRouter(
   [
    {
      element: <RootLayout />,
      children: [
        {path:'/', element:<App></App>},
        ...TechnologyRouts,
        ...ServicesRouts,
        ...solutionRouts,
        ...GamesRouts
      ]
    }
   ]
)

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}></RouterProvider>
  </StrictMode>,
)
