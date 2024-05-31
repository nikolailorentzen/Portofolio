
import '../App.css';
import ImageScroller from './ImageScroller';

export const About = () => {
    
    return(
        <section>
            <p className="text-lg text-slate-200 tracking-tight">ABOUT</p>
            <hr className="border-slate-500"/>
            <div className="flex flex-col gap-5 pt-5">
                <ImageScroller/>
                <p className="text-slate-300 text-md font-thin"><span className="text-slate-200 font-semibold">Hello there!</span> I'm a 27-year-old aspiring <span className="text-slate-200 font-semibold">frontend and mobile developer</span> on the verge of completing my bachelor's degree in the field.</p>
                <p className="text-slate-300 text-md font-thin">My first meet with coding happened at a <span className="text-slate-200 font-semibold">young age</span>, fueled by my fascination with our <span className="text-slate-200 font-semibold">household computer</span>. It was around 2005-2006 when I had my first taste of HTML, crafting simple and creative websites on the social network of 'Piczo'.</p>
                <p className="text-slate-300 text-md font-thin">However, it wasn't until 2021 that I reignited my passion for coding, driven by curiosity on how to create a mobile app. This <span className="text-slate-200 font-semibold">pivotal</span> moment led me to my current educational path, and I don't regret it a moment. I find <span className="text-slate-200 font-semibold">joy and fulfillment</span> in the <span className="text-slate-200 font-semibold">creative aspects</span> of frontend development, where every line of code becomes a brushstroke on a digital canvas.</p>
                <p className="text-slate-300 text-md font-thin">Take a look around and <span className="text-slate-200 font-semibold">enjoy your stay.</span></p>
            </div>
      </section>
    )
}

export default About
