import '../App.css';
import Marquee from 'react-fast-marquee';

export const ImageScroller = () => (
    <Marquee pauseOnHover gradient gradientColor='#1e293b' className='gap-2'>
        <div className="flex gap-2">
            <div className="relative">
            <div className="bg-pfp1 h-40 w-40 relative bg-cover bg-no-repeat rounded-2xl shadow-inner"/>
            <div className="absolute inset-0 bg-slate-600 opacity-35 rounded-2xl"></div>
            </div>
            <div className="relative">
            <div className="bg-pfp2 h-40 w-40 relative bg-cover bg-no-repeat rounded-2xl shadow-inner"/>
            <div className="absolute inset-0 bg-slate-600 opacity-35 rounded-2xl"></div>
            </div>
            <div className="relative">
            <div className="bg-pfp3 h-40 w-40 relative bg-cover bg-no-repeat rounded-2xl shadow-inner"/>
            <div className="absolute inset-0 bg-slate-600 opacity-35 rounded-2xl"></div>
            </div>
            <div className="relative">
            <div className="bg-pfp1 h-40 w-40 relative bg-cover bg-no-repeat rounded-2xl shadow-inner"/>
            <div className="absolute inset-0 bg-slate-600 opacity-35 rounded-2xl"></div>
            </div>
            <div className="relative">
            <div className="bg-pfp2 h-40 w-40 relative bg-cover bg-no-repeat rounded-2xl shadow-inner"/>
            <div className="absolute inset-0 bg-slate-600 opacity-35 rounded-2xl"></div>
            </div>
            <div className="relative">
            <div className="bg-pfp3 h-40 w-40 relative bg-cover bg-no-repeat rounded-2xl shadow-inner"/>
            <div className="absolute inset-0 bg-slate-600 opacity-35 rounded-2xl"></div>
            </div>
        </div>
    </Marquee>
)
  export default ImageScroller