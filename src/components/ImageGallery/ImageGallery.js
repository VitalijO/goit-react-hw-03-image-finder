import { ImageGalleryItem } from "../ImageGalleryItem/ImageGalleryItem"
import css from "./ImageGallery.module.css"
//import PropTypes from 'prop-types';
import React from "react";



export const ImageGallery = ({materials, onOpen, onClose}) => {
    return (
      <div className={css.ImageGallery}> 
            {materials.map(item => (     
    <ImageGalleryItem
    key={item.id}           
    item={item }
                    onOpen={onOpen}
                    onClose={onClose}
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

