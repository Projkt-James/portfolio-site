import { FC } from 'react';
import './Projects.scss';
import MovieHouseJpg from '../../assets/moviehouse.jpg';
import CloudstoreJpg from '../../assets/cloudstore.jpg';
import FacetanJpg from '../../assets/facetan.jpg';

interface ItemLink {
    text: string;
    url: string;
}

interface ProjectGridItem {
    title: string;
    imageSrc: string;
    links: ItemLink[];
}

const PROJECTS: ProjectGridItem[] = [
    {
        title: 'Movie House',
        imageSrc: MovieHouseJpg,
        links: [{
            text: 'Github',
            url: 'https://github.com/Projkt-James/ReviewSite'
        }]
    },
    {
        title: 'Uplink',
        imageSrc: CloudstoreJpg,
        links: [{
            text: 'Github',
            url: 'https://github.com/Projkt-James/Uplink-Project'
        }]
    },
    {
        title: 'FaceTan',
        imageSrc: FacetanJpg,
        links: [{
            text: 'Github',
            url: 'https://github.com/Projkt-James/FaceTAN'
        }]
    }
]

export const ProjectItem: FC<ProjectGridItem> = ({title, imageSrc, links}) => {
    return (
        <div className="project-item">
            <img src={imageSrc} alt={title} />
            <div>
                <h2>{title}</h2>
                {links.map(link => (<a href={link.url}>{link.text}</a>))}
            </div>
        </div>
    )
}

export const Projects: FC = () => (
    <section id="projects-section">
        <h1>Now I Build With Code</h1>
        <span className="underblock"></span>

        <div className="grid-wrapper">
            {PROJECTS.map((project) => (
                <ProjectItem key={project.title} {...project} />
            ))}
        </div>
    </section>
)
