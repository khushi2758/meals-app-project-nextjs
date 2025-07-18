'use client'; // This line indicates that this file is a client component in Next.js
import { useFormState } from 'react-dom';
export default function MealFormSubmit() {
 const { panding }  = useFormState(); // This hook is used to manage form state in React
  
 return <button disabled={panding} >
 { panding ? 'submitting.....' : 'Share Meal' } {/* Conditional rendering based on the form state */}
 </button>
}
