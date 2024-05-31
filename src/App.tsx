import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  
  return (
    <div className="relative w-screen h-screen bg-transparent overflow-scroll-y overflow-x-hidden h-full">
        <div className="flex mx-auto min-h-screen max-w-screen-xl font-sans lg:px-24 lg:py-0">

          {/* Left Section */}
          <div className="sticky top-0 flex flex-col justify-between w-1/2 min-h-screen h-screen py-24">
            <header className="min-w-80">
              <h1 className="text-4xl text-slate-200 tracking-tight pb-2">Nikolai Lorentzen</h1>
              <h1 className="text-xl text-slate-400 tracking-tight">Frontend Developer</h1>
              <h1 className="text-lg text-slate-500 tracking-tight">With a mind for beautiful designs.</h1>
              <Navigation/>
            </header>
            <footer>
              <SocialMediaButtons/>
            </footer>
          </div>

           {/* Right Section */}
          <main id="about" className="flex flex-col min-w-96 w-1/2 lg:py-24">
            <About/>
            <Experience/>
            <Projects/>
          </main>
        </div>
    </div>
  );
}

export default App;
