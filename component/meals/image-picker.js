'use client';
import {  useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

export default function ImagePicker({label, name}) {
 const [pickedImage, setPickedImage] = useState()
   const imageInput = useRef();
   function handlePickClick() {
    imageInput.current.click(); // Trigger the file input click
   }
   function handleImageChange(event) {
    const file = event.target.files[0];
    if (!file) {
     // setPickedImage(null); // Reset picked image if no file is selected
      return;
    } 

    const fileReader = new FileReader();
    fileReader.onload = () => {
      setPickedImage(fileReader.result); // Set the picked image
    };
    fileReader.readAsDataURL(file); // Read the file as a data URL
  }
  return (
    <div className={classes.picker}>
        <label htmlFor={name} >
            {label}
            </label>
        <div className={classes.controls}>
          <div className = {classes.preview}>
            { !pickedImage && <p>No image picked yet.</p>}
            { pickedImage && (
              <Image src={pickedImage} 
              alt="Picked"
              fill
               />) }
          </div>
           <input
           className={classes.input}
           type="file"
           id={name}
           accept="image/png , image/jpeg"
           name={name}
            ref={imageInput}
            onChange={handleImageChange}
           // required
           />
          
           <button
            className={classes.button} 
            type="button" 
            onClick={handlePickClick}>
            Pick an Image
              </button>
         </div>
    </div>
  );
}
