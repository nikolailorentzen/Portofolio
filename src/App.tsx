import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  
  return (
    <div className="relative w-screen h-screen bg-transparent overflow-scroll-y overflow-x-hidden h-full">
        <div className="flex flex-col lg:flex-row lg:mx-auto min-h-screen max-w-screen-xl font-sans px-7 sm:px-14 lg:px-24 lg:py-0 items-center">

          {/* Left Section */}
          <div className="lg:sticky lg:top-0 flex flex-col justify-start lg:justify-between w-1/2 lg:min-h-screen lg:h-screen lg:py-24 self-start sm:py-16 py-7 pb-14 ">
            <header className="min-w-80">
              <h1 className="text-4xl text-slate-200 tracking-tight pb-2">Nikolai Lorentzen</h1>
              <h1 className="text-xl text-slate-400 tracking-tight">Frontend Developer</h1>
              <h1 className="text-lg text-slate-500 tracking-tight">With a mind for beautiful designs.</h1>
              <Navigation/>
            </header>
            <footer className="pt-10 lg:pt-0 ">
              <SocialMediaButtons/>
            </footer>
          </div>

           {/* Right Section */}
          <main id="about" className="flex flex-col gap-10 lg:w-1/2 lg:py-24 lg:mb-0 lg:mx-10 mb-10 w-96 sm:w-auto">
            <About/>
            <Experience/>
            <Projects/>
          </main>
        </div>
    </div>
  );
}

export default App;
