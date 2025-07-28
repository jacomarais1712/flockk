import { useState, useEffect } from 'react'
import {
  createBrowserRouter,
  RouterProvider,
  Outlet
} from "react-router-dom";
import NavBarDesktop from '/src/components/reuse/navbarDesktop/NavBarDesktop'
import Footer from '/src/components/reuse/footer/Footer'
import Home from '/src/Containers/Home';
import About from '/src/Containers/About'
import Services from '/src/Containers/Services'
import Pricing from '/src/Containers/Pricing'
import Contact from './Containers/Contact';
import CaseStudy1 from './Containers/case studies/CaseStudy1';
import CaseStudy2 from './Containers/case studies/CaseStudy2';
import CaseStudy3 from './Containers/case studies/CaseStudy3';
import CaseStudy4 from './Containers/case studies/CaseStudy4';

import './App.css'

function Layout() {
  const [navItem, setNavItem] = useState('home')

  const handleNavClick = (menuItem) => {
    setNavItem(menuItem);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  useEffect(() => {
    console.log(navItem);
  }, [navItem])

  return (
    <>
      <NavBarDesktop navItem={navItem} handleNavClick={handleNavClick}/>
        <Outlet/>
      <Footer navItem={navItem} handleNavClick={handleNavClick}/>
    </>
  )
}

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/about",
        element: <About />,
      },
      {
        path: "/services",
        element: <Services />,
      },
      {
        path: "/pricing",
        element: <Pricing />
      },
      {
        path: "/casestudy/1",
        element: <CaseStudy1 />
      },
      {
        path: "/casestudy/2",
        element: <CaseStudy2 />
      },
      {
        path: "/casestudy/3",
        element: <CaseStudy3 />        
      },
      {
        path: "/casestudy/4",
        element: <CaseStudy4 />
      },
      {
        path: "/contact",
        element: <Contact />
      }
    ]
  },
]);

function App() {
  return <RouterProvider router={router}/>
}

export default App
