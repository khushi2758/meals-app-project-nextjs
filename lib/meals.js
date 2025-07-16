import sql from 'better-sqlite3';
const db = sql('meals.db');
export async function getMeals() {
    await new Promise((resolve) => 
        setTimeout(resolve, 5000)// Simulate a delay for fetching meals
    );
    // Fetch all meals from the database
    // This function is used to retrieve meals for the MealsGrid component
     // Simulate an error
         // throw new Error('Database connection failed');
 return db.prepare('SELECT * FROM meals').all();

}

export  function getMeal(slug) {

    // Fetch a single meal by its slug from the database
    // This function is used to retrieve meal details for the MealDetailPage component

    // Simulate an error
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}