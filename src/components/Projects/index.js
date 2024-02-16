import React from "react";
import "./Projects.css";

const projects = [
    {
        image: 'images/projects/portfolio-poster.png', // Add image property here
        title: 'Dev Portfolio',
        bodyText: '- Developer Portfolio Website made in React\n -  Fully customisable and dynamic, easily change data and images.\n - Dark Mode Support',
        links: [
            {
                text: 'GitHub',
                href: 'https://github.com/mayankagarwal09/dev-portfolio'
            },
            {
                text: 'Live',
                href: 'https://mayankagarwal.me'
            }
        ],
        tags: [
            'React',
            'Portfolio',
            'JavaScript'
        ]
    },
    {
        title: 'MVVM Sample App',
        bodyText: '- An Android App that loads data from mock API and show in both **LinearLayout** and **GridLayout RecyclerView**.\n - Offline support using **Room** DB and **NetworkBoundResource**.\n - Uses the **MVVM** architecture.',
        links: [
            {
                text: 'GitHub',
                href: 'https://github.com/mayankagarwal09/mvvm-sample-app'
            }
        ],
        tags: [
            'Kotlin',
            'Android',
            'MVVM',
            'Room',
            'Coroutines',
            'Flow',
            'Hilt-Dagger',
            'NetworkBoundResource'
        ]
    },
    {
        title: 'Task Tracker',
        bodyText: '- A simple Task Tracker web app made with **Angular 12**.\n - Uses **mock JSON server** to get, add, delete or update tasks.',
        links: [
            {
                text: 'GitHub',
                href: 'https://github.com/mayankagarwal09/task-tracker-app'
            }
        ],
        tags: [
            'TypeScript',
            'Angular 12',
            'JavaScript'
        ]
    }
];

const Projects = () => {
    return (
        <div className="projects-page">
            <h1 className="heading">Projects</h1>
            {/* Make sure to define corresponding styles in your CSS for the following divs */}
            <div className="component1"></div>
            <div className="layer-small"></div>
            <div className="Rectangle_6"></div>
            <div className="Rectangle_5"></div>
            <div className="Rectangle_4"></div>
            <div className="Rectangle_3"></div>
            <div className="Rectangle_2"></div>
            <div className="shape1"></div>
            <circle/>
            <div className="shape2"></div>
            <div className="shape3"></div>
            <div className="shape4"></div>
            <div className="shape5"></div>
            <div className="Rectangle1"></div>
            <div className="Rectangle8"></div>
            <div className="Rectangle9"></div>
            <div className="Rectangle4"></div>
            <circle/>
            <div className="Rectangle6"></div>
            <div className="shape15"></div>
            {/* Iterate over projects and render project details */}
            {projects.map((project, index) => (
                <div key={index}>
                    {project.image && <img src={project.image} alt={project.title} />} {/* Check if image exists */}
                    <h2>{project.title}</h2>
                    <p>{project.bodyText}</p>
                    <ul>
                        {project.links.map((link, linkIndex) => (
                            <li key={linkIndex}>
                                <a href={link.href}>{link.text}</a>
                            </li>
                        ))}
                    </ul>
                    <ul>
                        {project.tags.map((tag, tagIndex) => (
                            <li key={tagIndex}>{tag}</li>
                        ))}
                    </ul>
                </div>
            ))}
        </div>
    );
};

export default Projects;
