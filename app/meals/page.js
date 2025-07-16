import classes from './page.module.css';
import MealsGrid from '@/component/meals/meals-grid';
import { getMeals} from '@/lib/meals';  
import Link from 'next/link';
import { Suspense } from 'react';
export default async function MealsPage() {
  async function Meals() {
  const meals = await getMeals();
  return   <MealsGrid meals={meals} />
  }
  // This function fetches meals from the database and passes them to the MealsGrid component
  return (
  <>
  <header className = {classes.header} >
    <h1>
      Delicious meats, created {' '}
       <span className={classes.highlight}> by you!</span>
    </h1>
    <p>choose your favourite recipe and cook it yourself. It is easy and fun.</p>
    <p className={classes.cta }>
      <Link href="/meals/share">
      Share your favourite recipe
      </Link>
    </p>
    <main classname = {classes.main} >
    <Suspense fallback={<p className={classes.loading}>Fetching meals...</p>}>
      <Meals />
      {/* Meals component is wrapped in Suspense to handle loading state */}
     
    </Suspense>
    </main>
  </header>
  
  </>
  );
}