import styles from './Description.module.css';
import React from 'react';

function RecipeAuthor() {
    let authorLink = "https://www.saltandlavender.com/";
    let authorPhoto = "https://www.saltandlavender.com/wp-content/uploads/2020/03/natasha-blog-profile-photo-768x715.jpg";
    let authorName = "Natasha Bull";

    return (
        <div className = {styles.recipeAuthorBlock}>
            <img src={authorPhoto} alt = "{authorName}" className={styles.imageUpdates} />
            <div>
                <h3>{authorName}</h3>
                <a href={authorLink}>Salt & Lavendar</a> 
            </div>
        </div>
        );
}

class RecipeDescription extends React.Component {
    render(){
    return (
    <div> 
        <div>
            <h1>Recipe Title</h1>
            <p>Short recipe description</p>
        </div>
        <RecipeAuthor />
    </div>
    )
    }
}

export default RecipeDescription;