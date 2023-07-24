import data from './../data.json';
import {useState} from 'react';

export default function MyProjects(){
    const [index, setIndex] = useState(0);
    let projects = data.projects;
    let project = projects[index];

    function handleClick() {
        if (index < data.projects.length-1)
        {
            setIndex(index + 1);
        }
        else 
        {
            setIndex(0);
        }
    }


    return(
        <div>
        <button onClick={handleClick}>Next</button>
        <h3>{project.commonName} aka {project.scientificName}
        <br />This is a {project.flowers} plant.</h3>
        <img src={project.photoUrl} alt={project.commonName} />
        </div>
    );
};