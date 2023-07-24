import data from './../data.json';
import {useState} from 'react';

export default MyPlants() {
    const [index, setIndex] = useState(0);
    let plants = data.plants;
    let plant = plants[index];

    function handleClick() {
        if (index < data.plants.length-1)
        {
            setIndex(index + 1);
        }
        else 
        {
            setIndex(0);
        }
    }

function flowering() {
    if (plant.flowers === true) {
        return "a blooming plant";
    } else {
        return "does not bloom";
    }
}

    return(
        <div>
        <button onClick={handleClick}>Next</button>
        <h3>{project.commonName} aka {project.scientificName}</h3>
        <h3><flowering /></h3>
        <img src={project.photoUrl} alt={project.commonName} />
        </div>
    );
};