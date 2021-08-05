import { FC, useEffect, useState } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import './Nav.scss';

export interface NavItem {
    refId: string;
    text: string;
}

const NAV_ITEMS: NavItem[] = [
    { refId: "about-section", text: 'About Me' },
    { refId: "roadmap-section", text: 'Personal Road Map' },
    { refId: "projects-section", text: 'Portfolio' },
    { refId: "footer", text: 'Contact Me' }
];

interface NavProps {
    state: boolean;
}

export const Nav: FC<NavProps> = ({ state }) => {
    const [ activeIndex, setActiveIndex ] = useState(-1);

    useEffect(() => {
        window.addEventListener("scroll", (event) => {
            const windowTop = window.pageYOffset;
            const topBarHeight = document.getElementById("topbar")?.offsetHeight ?? 0;

            const result = NAV_ITEMS.map((item, idx) => {
                let element = document.getElementById(item.refId);
                if (element) {
                    if (windowTop >= (element.offsetTop - topBarHeight) && windowTop <= (element.offsetTop + element.offsetHeight - topBarHeight)) {
                        // Update active index as within bounds
                        setActiveIndex(idx);
                        return true;
                    }
                }
                return false;
            });
            if (!result.includes(true)) {
                // Clear active index if no bounds coords met
                setActiveIndex(-1);
            }
        });
    }, []);

    return (
        <nav nav-state={state ? 'active' : ''}>
            <ul>
                {NAV_ITEMS.map((item, idx) => (
                    <li>
                        <AnchorLink href={`#${item.refId}`} link-state={idx === activeIndex ? 'active': ''}>{item.text}</AnchorLink>
                    </li>
                ))}
            </ul>
        </nav>
    );
}
