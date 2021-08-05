import { FC, useState } from 'react';
import { Nav } from '../Nav/Nav';
import { Hamburger } from '../ui/Hamburger/Hamburger';
import { SvgGithub, SvgLetterHead, SvgLinkedIn } from '../ui/icons';
import './TopBar.scss';

interface SocialLinkItem {
    name: string;
    color: string;
    link: string;
    iconElement: JSX.Element;
}

const SOCIAL_LINKS: SocialLinkItem[] = [
    {
        name: 'LinkedIn',
        color: '#0077b5',
        link: 'https://au.linkedin.com/in/james-hanford-038786b9',
        iconElement: <SvgLinkedIn width="100%" height="100%" />
    },
    {
        name: 'Github',
        color: '#999',
        link: 'https://github.com/Projkt-James',
        iconElement: <SvgGithub width="60%" height="100%" />
    }
];

const SocialLink: FC<SocialLinkItem> = ({name, color, link, iconElement}) => {
    const [hovered, setHover] = useState(false);

    const handleMouseOver = () => setHover(true);
    const handleMouseOut = () => setHover(false);

    return (
        <a href={link} style={{
            background: hovered ? color : 'none',
            fill: hovered ? 'white' : 'black'
        }} onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
            {iconElement}
        </a>
    )
}

export const TopBar: FC = () => {
    const [navActive, setNavActive ] = useState(false);

    return (
        <section id="topbar">
            <div className="left-container">
                <Hamburger onStateUpdate={(state) => setNavActive(state)}></Hamburger>
            </div>
            <div className="center-container">
                <h1>Han</h1>
                    <SvgLetterHead id="StylisedJ" />
                <h1>ford</h1>
            </div>
            <div className="right-container">
                <div className="icon-container">
                    {SOCIAL_LINKS.map((link) => (
                        <SocialLink key={link.name} {...link} />
                    ))}
                </div>
            </div>
            <Nav state={navActive} />
        </section>
    )
}
