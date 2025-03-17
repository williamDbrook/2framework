import React, { useEffect, useState } from 'react';
import './Projects.css';

const Projects = () => {
    const [repos, setRepos] = useState([]);

    useEffect(() => {
        const fetchRepositories = async () => {
            const response = await fetch(`https://api.github.com/users/williamDbrook/repos`);
            const data = await response.json();
            setRepos(data);
        };

        fetchRepositories();
    }, []);

    return (
        <div>
            <h1>My Projects</h1>
            <div className="project-cards">
                {repos.map((repo) => (
                    <div key={repo.id} className="project-card">
                        <h2>{repo.name}</h2>
                        <p>{repo.description ? repo.description : "No description available."}</p>
                        <a href={repo.html_url} target="_blank" rel="noopener noreferrer">
                            View Repository
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Projects;