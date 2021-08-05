import { FC, useState } from 'react';
import "./Timeline.scss";

export type EventPosition = 'left' | 'right';

export interface TimelineEvent {
    position: EventPosition;
    content: JSX.Element;
}

const LineEvent: FC<TimelineEvent> = ({ position, content }) => {
    const [hovered, setHover] = useState(false);

    return (
        <div className="event-wrapper" event-state={hovered ? 'active' : undefined } >
            <span className="point" onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}></span>
            <div className="content-wrapper" event-position={position} onMouseOver={() => setHover(true)} onMouseOut={() => setHover(false)}>
                {content}
            </div>
        </div>
    )
}

interface TimelineProps {
    events: TimelineEvent[]
}

export const Timeline: FC<TimelineProps> = ({events}) => {
    return (
        <div className="timeline-wrapper">
            <span id="start-point"></span>
            {events.map(event => (<LineEvent {...event} />))}
        </div>
    )
}
