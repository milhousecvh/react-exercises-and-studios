import data from './../data.json';
import {useState} from 'react';

export default MyProjects() {
    const [index, setIndex] = useState(0);
    let list = data.json;
    let plantChoice = list[index];

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

        </div>
    );
}