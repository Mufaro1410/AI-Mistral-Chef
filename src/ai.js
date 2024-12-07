import { HfInference } from "@huggingface/inference"

const SYSTEM_PROMPT = `
You are an assistant that receives a list of ingredients that a user has ans suggest a recipe the could make with some or all of the ingredients.
You do not need to use all the ingredients they mention in your recipe.
The recipe can include additional ingredients they didn't mention, but try not to include too many extra ingredients.
Format your response in markdown to make it easier to render to a web page.
`

export async function getRecipeFromMistral(ingredientArr, token) {
    const hf = new HfInference(token)
    const ingredientString = ingredientArr.join(", ")
    
    try {
        const response = await hf.chatCompletion({
            model: "mistralai/Mixtral-8x7B-Instruct-v0.1",
            messages: [
                {role: "system", content: SYSTEM_PROMPT},
                {role: "user", content: `I have ${ingredientString}. Please give me a recipe you'd recommend I make!`},
            ],
            max_tokens: 1024,
        })
        return response.choices[0].message.content
    } catch (error) {
        console.error(error.message);
        throw error;
    }
}