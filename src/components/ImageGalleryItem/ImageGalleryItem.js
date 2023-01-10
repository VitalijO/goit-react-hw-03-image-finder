import css from "./ImageGalleryItem.module.css"
 
export const ImageGalleryItem = ({item, onClose, onOpen}) => {
    return (
      

      <div className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage}
         
          src={item.webformatURL}
          alt={item.tags}
          onClick={() => {
          onOpen(item);
        }}/>
    </div>
  );
};
 
