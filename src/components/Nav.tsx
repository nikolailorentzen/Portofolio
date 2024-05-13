
const Nav = () => {

return (
    <nav className="flex flex-col gap-2 mt-10 ">

        <div className="group flex flex-row items-center text-slate-200">
            <hr className="w-20 mr-5 bg-slate-200"></hr>
            <h1 className="text-sm text-slate-200">ABOUT</h1>
        </div>
    
        <div className="group flex flex-row items-center">
            <hr className="w-8 mr-5 border-slate-500 group-hover:border-slate-200 group-hover:w-20"></hr>
            <h1 className="text-sm text-slate-500 group-hover:text-slate-200">EXPERIENCE</h1>
        </div>

        <div className="group flex flex-row items-center text-slate-500">
            <hr className="w-8 mr-5 border-slate-500 group-hover:border-slate-200 group-hover:w-20 transition duration-75"></hr>
            <h1 className="text-sm text-slate-500 group-hover:text-slate-200">PROJECTS</h1>
        </div>
    
    </nav>
    
  );
};

export default Nav;
