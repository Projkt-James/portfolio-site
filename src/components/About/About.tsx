import { FC } from 'react';
import './About.scss';
import profile from '../../assets/profile.jpg';

const ABOUT_TEXT = `
    My name is James Hanford, I'm a 27 year old Fullstack Developer living in Brisbane, Australia. 
    I currently work as a member of a team bringing video content creation to the world through an in-browser 
    editor called Clipchamp. From an early age I have had a passion for everything technical, since 
    discovering computer programming towards the end of primary school, I've been hooked. I'm also an 
    avid space enthusiast, mainly well read on the happenings of the current commerical reusable rockets 
    space race. I find great pride within the code and tangible experiences I build for people, there 
    is nothing more satisfying than watching an end user enjoy something that I have built.
`;

export const AboutSection: FC = () => (
    <section id="about-section">
        <img src={profile} alt="Black and white headshot" />
        <h2>Hi I'm James</h2>
        <span className="underblock"></span>
        <p>{ABOUT_TEXT}</p>
    </section>
);
