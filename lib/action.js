'use server'

import { redirect } from "next/navigation";
import { saveMeal } from "./meals"

 export async function ShareMeal(formData){
    
    // This function will handle the form submission
    // You can add your logic to process the form data here
    const meal = {
      title: formData.get('title'), 
       image : formData.get('image'),
       summary : formData.get('summary'),
       instructions : formData.get('instructions'),
       creator : formData.get('name'),
       creator_email : formData.get('email')
       // Assuming the image is handled by the ImagePicker component


    } ;   // You can save the meal data to a database or perform any other actions
    // For now, we'll just log it to the console
    
   await saveMeal(meal)
       
  redirect('/meals'); // Redirect to the meals page after saving the meal
    // You can also return a response or perform any other actions as needed
  } 