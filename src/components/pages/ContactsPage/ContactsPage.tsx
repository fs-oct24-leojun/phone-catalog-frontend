import './ContactsPage.scss'

import React from "react";

type TeamMember = {
  name: string;
  role: string;
  github: string;
  avatar: string;
};

const teamMembers: TeamMember[] = [
  {
    name: 'Anna Androschuk',
    role: 'Team Leader',
    github: 'https://github.com/AnderZerfall',
    avatar: 'https://avatars.githubusercontent.com/u/170249531?v=4',
  },
  {
    name: 'Maksym Sabov',
    role: 'Developer',
    github: 'https://github.com/maxsabo',
    avatar: 'https://avatars.githubusercontent.com/u/63497596?s=400&u=5a502fb3f0f104add98c697161860581cdd47633&v=4',
  },
  {
    name: 'Kostiantyn Bondar',
    role: 'Developer',
    github: 'https://github.com/YoNiga7',
    avatar: 'https://avatars.githubusercontent.com/u/91181748?v=4',
  },
  {
    name: 'Liliia Borodina',
    role: 'Developer',
    github: 'https://github.com/LiliiaVol',
    avatar: 'https://avatars.githubusercontent.com/u/110099141?v=4',
  },
  {
    name: 'Ruslan Mudryi',
    role: 'Developer',
    github: 'https://github.com/RuslanMudryi',
    avatar: 'https://avatars.githubusercontent.com/u/32366107?v=4',
  },
];

export const ContactsPage: React.FC = () => {

  return (
    <div className="team-page">
      <h1 className="team-page__title">Our Team</h1>
      <div className="team-page__list">
        {teamMembers.map((member) => (
          <div key={member.github} className="team-page__member">
            <img
              src={member.avatar}
              alt={`${member.name}'s avatar`}
              className="team-page__avatar"
            />
            <h2 className="team-page__name">{member.name}</h2>
            <p className="team-page__role">{member.role}</p>
            <a
              href={member.github}
              target="_blank"
              rel="noopener noreferrer"
              className="team-page__github"
            >
              GitHub Profile
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};
