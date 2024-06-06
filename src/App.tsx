import './App.css';
import SocialMediaButtons from './components/SocialMediaButtons';
import Navigation from './components/Navigation';
import About from './components/About';
import Experience from './components/Experience';
import Projects from './components/Projects';

const App = () => {
  
  return (
    <div className="relative w-screen h-screen bg-transparent overflow-scroll-y overflow-x-hidden h-full">
        <div className="flex flex-col lg:flex-row lg:mx-auto min-h-screen max-w-screen-xl font-sans px-7 lg:px-16 items-center">
          <div className="flex flex-col self-start w-full lg:w-1/2 lg:sticky lg:top-0 lg:justify-between  lg:min-h-screen lg:h-screen lg:py-24 py-7 pb-14">
            <header className="min-w-80">
              <div className="flex gap-3 sm:gap-7 items-center">
                <div>
                <a href="pfp1.png" target="_blank">
                    <div className="bg-pfp1 bg-cover bg-center cursor-pointer h-20 w-20 sm:h-28 sm:w-28 rounded-full border-2 border-transparent hover:border-teal-300 hover:scale-110 all-transitions duration-300"></div>
                </a>
                </div>
                <div>
                  <h1 className="text-3xl sm:text-4xl text-slate-200 tracking-tight sm:pb-2 whitespace-nowrap">Nikolai Lorentzen</h1>
                  <h1 className="text-lg sm:text-xl text-slate-400 tracking-tight">Frontend Developer</h1>
                  <h1 className="text-md sm:text-lg text-slate-500 tracking-tight">With a mind for beautiful designs.</h1>
                </div>
              </div>
              
              <Navigation/>
            </header>
            <footer className="pt-10 lg:pt-0 ">
              <SocialMediaButtons/>
            </footer>
          </div>

          <main id="about" className="flex flex-col w-full gap-10 sm:gap-0 lg:w-1/2 lg:py-24 lg:mb-0 lg:mx-10 mb-10">
            <About/>
            <Experience/>
            <Projects/>
          </main>

        </div>
    </div>
  );
}

export default App;
