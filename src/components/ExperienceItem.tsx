import '../App.css';
import Chip from './Chip';

export const ExperienceItem = ({ year, title, subtitle, description, skills } : { year: string, title: string, subtitle: string, description: string, skills: string[] }) => (
    <div className="hover:bg-slate-300 hover:bg-opacity-10 rounded py-2 hover:px-2 all-transitions duration-200">
      <p className="text-md text-slate-400 tracking-tight">{year}</p>
      <p className="text-md text-slate-300 tracking-tight">
        <span className="text-slate-200 font-semibold">{title}</span> • {subtitle}
      </p>
      <p className="text-md text-slate-400 tracking-tight">{description}</p>
      <div className="flex flex-wrap my-2 gap-2 uppercase">
        {skills.map(skill => (
          <Chip key={skill} text={skill} />
        ))}
      </div>
    </div>
  );

  export default ExperienceItem