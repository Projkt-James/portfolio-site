import React, { FC } from 'react';
import { Timeline, TimelineEvent } from '../ui/Timeline/Timeline';
import './RoadMap.scss';

const EVENTS_LIST: TimelineEvent[] = [
    {
        position: 'left',
        content: (
            <React.Fragment>
                <span>2006</span>
                <h2>First Computer</h2>
            </React.Fragment>
        )
    },
    {
        position: 'right',
        content: (
            <React.Fragment>
                <span>2008</span>
                <h2>Discovered Programming</h2>
            </React.Fragment>
        )
    },
    {
        position: 'left',
        content: (
            <React.Fragment>
                <div>
                    <span>2013</span>
                    <h2>Completed Business Cert IV</h2>
                </div>
            </React.Fragment>
        )
    },
    {
        position: 'right',
        content: (
            <React.Fragment>
                <span>2014</span>
                <h2>Completed Web Development Diploma</h2>
            </React.Fragment>
        )
    },
    {
        position: 'left',
        content: (
            <React.Fragment>
                <span>2017</span>
                <h2>First Programming Internship</h2>
            </React.Fragment>
        )
    },
    {
        position: 'right',
        content: (
            <React.Fragment>
                <span>2018</span>
                <h2>Graduated Computer Science Bachelor</h2>
            </React.Fragment>
        )
    },
    {
        position: 'left',
        content: (
            <React.Fragment>
                <span>2019</span>
                <h2>ASP.NET Core Developer</h2>
            </React.Fragment>
        )
    },
    {
        position: 'right',
        content: (
            <React.Fragment>
                <span>2020</span>
                <h2>Joined Clipchamp</h2>
            </React.Fragment>
        )
    },
];

export const RoadMap: FC = () => (
    <section id="roadmap-section">
        <h1>How It All Started</h1>
        <Timeline events={EVENTS_LIST}/>
    </section>
)
