import Markdown from "react-markdown"

export default function ClaudeRecipe({ recipe }) {
    return (
        <section id="recipeSection">
            <Markdown>{recipe}</Markdown>
        </section>
    )
}