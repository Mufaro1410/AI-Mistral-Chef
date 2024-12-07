export default function IngredientsForm({handleSubmit}) {
    return (
        <form onSubmit={handleSubmit} className="add-ingredient-form">
            <input type="text" placeholder="e.g. sadza" aria-label="Add ingredient" name="ingredient" />
            <button>Add ingredient</button>
        </form>
    )
}