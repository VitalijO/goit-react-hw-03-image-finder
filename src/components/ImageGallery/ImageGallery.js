import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"
//import PropTypes from 'prop-types';
import React from "react";



export const ImageGallery = ({materials, onOpen }) => {
    return (
      <div className={css.ImageGallery}> 
            {materials.map(item => (     
    <ImageGalleryItem
    key={item.id}           
    item={item }
    onOpen={onOpen}
    
    />
     ))}
           
</div>      
    )
}

 

// ImageGallery.propTypes = {
//   items: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.string.isRequired,
//       name: PropTypes.string.isRequired,
//       number: PropTypes.string.isRequired,
//     })
//   ),
// };

