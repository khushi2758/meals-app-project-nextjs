import classes from './page.module.css';
import Image from 'next/image';
export default function mealDetailPage() {
  return (
<>
  <header classsName={classes.header}>
    <div className={classes.image}>
      <Image fill/>
    </div>
    <div className={classes.headeText}>
      <h1>TITLE</h1>
      <p className = {classes.creator}>
        by <a herf = {`mailto: ${'EMAIL'}`}>NAME</a> {/*// This is a placeholder for the meal detail page  [usear can send mail to that persion]*/} 
      </p>
         <p className = {classes.summary}>SUMMARY</p>   
    </div>
    </header>
  <main > 
    <p className={classes.intructions}
    dangerouslySetInnerHTML={{__html: '...'}}
// This is a placeholder for the meal detail page [usear can
    >
      
    </p>
    </main>

</>
  );
}   