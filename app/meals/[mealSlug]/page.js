import classes from './page.module.css';
import Image from 'next/image';
import { getMeal } from '@/lib/meals'; // Assuming you have a function to fetch meal data
import { notFound } from 'next/navigation';
export default function mealDetailPage({ params }) {
  const meal = getMeal(params.mealSlug);

if (!meal) {
  notFound(); // If meal not found, show 404 page
  // This is a Next.js function that triggers a 404 error page
}

  meal.instructions = meal.instructions.replace(/\n/g, '<br />'); // Format instructions for HTML display
  return (
<>
  <header className={classes.header}>
    <div className={classes.image}>
      <Image src={meal.image} fill/>
    </div>
    <div className={classes.headerText} alt = {meal.title}>
      <h1>{meal.title}</h1>
      <p className = {classes.creator}>
        by <a herf = {`mailto: ${meal.creator_email}`}>{meal.creator}</a> {/*This is a placeholder for the meal detail page  [usear can send mail to that persion]*/} 
      </p>
         <p className = {classes.summary}>{meal.summary}</p>   
    </div>
    </header>
  <main > 
    <p className={classes.instructions}
    dangerouslySetInnerHTML={{__html: meal.instructions,

    }}>

      
    </p>
    </main>

</>
  );
}   