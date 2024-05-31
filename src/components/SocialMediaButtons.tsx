import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons';

const SocialMediaButtons = () => {
  const socialMediaIcons = [
    { name: 'github', icon: faGithub, link: "https://github.com/NikolaiLorentzen" },
    { name: 'linkedin', icon: faLinkedin, link: "https://no.linkedin.com/in/nikolai-lorentzen-7613122b7?trk=people-guest_people_search-card" },
  ];

  return (
    <div className="flex space-x-4 pt-4">
      {socialMediaIcons.map(({ name, icon, link }) => (
        <a key={name} href={link} target="_blank" rel="noopener noreferrer" className="text-slate-500  hover:text-slate-200">
          <FontAwesomeIcon icon={icon} size="2x"/>
        </a>
      ))}
    </div>
  );
};

export default SocialMediaButtons;