import fs from 'node:fs';   // Importing the fs module to handle file system operations
import sql from 'better-sqlite3';
import slugify from 'slugify';
import xss from 'xss';


// Importing the better-sqlite3 library for database operations
// Importing the slugify library to create slugs for meal titles
const db = sql('meals.db');
export async function getMeals() {
    await new Promise((resolve) => 
        setTimeout(resolve, 1000)// Simulate a delay for fetching meals
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


export async function saveMeal (meal) {
    // Save a new meal to the database  
    // This function is used to save meals shared by users
    meal.slug = slugify(meal.title, {
        lower: true} ); // Create a slug from the meal title
    meal.instruction = xss(meal.instruction); // Sanitize the instruction to prevent XSS


    const extension = meal.image.name.split('.').pop(); // Get the file extension from the image name
    const fileName = `${meal.slug}.${extension}`; // Create a file name using the slug and extension
 const stream = fs.createWriteStream(`public/images/${fileName}`) // Create a write stream to save the image
 const bufferedImage = await meal.image.arrayBuffer() ; 
// Convert the image to an ArrayBuffer
   
  stream.write(Buffer.from(bufferedImage),(error) => {
   if(error) {
       throw new Error ('Saveing image failed !'); // Log any errors that occur while writing the image
   }

  } ); // Write the image to the file

  meal.image = `/images/${fileName}`; // Update the meal object with the image path
    db.prepare(`
            INSERT INTO meals 
            (slug, title, summary, instructions, image, creator, creator_email)
             VALUES (
             
        @slug,
         @title,
         @summary,
         @instructions,
         @image,
         @creator,
         @creator_email
            )
        `).run(meal); // Insert the meal into the database
}