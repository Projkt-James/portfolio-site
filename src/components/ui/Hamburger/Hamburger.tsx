import { FC, useEffect, useState } from 'react';
import "./Hamburger.scss"

interface HamburgerProps {
    onStateUpdate?: (active: boolean) => void;
}

export const Hamburger: FC<HamburgerProps> = ({ onStateUpdate }) => {
    const [active, setActive] = useState(false);

    useEffect(() => {
        if (typeof onStateUpdate !== 'undefined') {
            onStateUpdate(active);
        }
    }, [active, onStateUpdate])

    return (
        <div id="ui-hamburger">
            <div toolkit-hamburger={active ? 'active' : undefined} onClick={() => setActive(!active)}>
                <span></span>
            </div>
        </div> 
    )
}
