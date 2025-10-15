import './App.css'
import Header from './components/Header'
import Hero from './components/Hero'
import Marquee from './components/Marquee'
import About from './components/About'
import Contact from './components/Contact'
import Projects from './components/Project'
import Footer from './components/Footer'
import Bottom from './components/Bottom'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';

const route = createBrowserRouter([
  {
    path: '/',
    element:
      <div>
        <Header />
        <Hero />
        <Marquee />
        <Bottom />
        
      </div>
  },
  {
    path: '/about',
    element:
      <div>
        <Header />
        <About />
      </div>
  },
  {
    path: '/projects',
    element:
      <div>
        <Header />
        <Projects />

      </div>
  },
  {
    path: '/contact',
    element:
      <div>
        <Header />
        <Contact />
      </div>
  },
])
function App() {

  return (
    <>
      <div>
        <RouterProvider router={route} />
        <Footer />
      </div>
    </>
  )
}

export default App
