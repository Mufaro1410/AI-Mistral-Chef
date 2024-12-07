import { useState } from "react";
import ClaudeRecipe from "./ClaudeRecipe";
import IngredientsList from "./IngredientsList";
import IngredientsForm from "./IngredientsForm";
import { getRecipeFromMistral } from "../ai";

export default function Main() {
    const [ingredients, setIngredients ] = useState([])
    const [recipe, setRecipe ] = useState("")
    
    function handleSubmit(event) {
        event.preventDefault()
        const formData = new FormData(event.currentTarget)
        const newIngredient = formData.get("ingredient")
        setIngredients(prevIngre => [...prevIngre, newIngredient])
    }
    
    async function getRecipe() {
        let token = import.meta.env.VITE_HF_ACCESS_TOKEN
        try {
            let recipeMarkdown = await getRecipeFromMistral(ingredients, token)
            setRecipe(recipeMarkdown)
        } catch (error) {
            console.error("Failed to get recipe:", error)
            // Optionally set an error state or show a user-friendly message
        }
    }
    
    return (
        <main>
            <IngredientsForm handleSubmit={handleSubmit} />
            {ingredients.length > 0 && <IngredientsList ingredients={ingredients} getRecipe={getRecipe}/>}
            {recipe && <ClaudeRecipe recipe={recipe} />}
        </main>
    )
}