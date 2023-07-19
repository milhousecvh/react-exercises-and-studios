
import styles from './Ingredients.module.css';

function RecipeIngredients() {
    const ingredients = ["Italian Sausage", "Garlic", "Sun-Dried Tomatoes", "Heavy Whipping Cream", "Potato Gnocchi"];

    return (
        <div>
            <h3>Recipe Ingredients</h3>
            <ul clasName = {styles.ingredientsList}>
                <li>{ingredients[0]}</li>
                <li>{ingredients[1]}</li>
                <li>{ingredients[2]}</li>
                <li>{ingredients[3]}</li>
                <li>{ingredients[4]}</li>
            </ul>
        </div>
    )
}

export default RecipeIngredients;