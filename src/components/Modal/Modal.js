 
import { Component } from "react"
import css from "./Modal.module.css"
import { createPortal } from "react-dom";

const modalRoot = document.querySelector('#modal-root')

export class Modal extends Component {

  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown)
}

  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }
  
  handleKeyDown = e => {
      if (e.code === 'Escape') {
      this.props.onClose()
         
    }
    }
 handleClick = e  => {
    if (e.target.tagName !== 'IMG') this.props.onClose();
  };
  handleDoubleClick = e  => {
    if (e.target.tagName === 'IMG') this.props.onClose();
  };
    
    render() {
      const {image: { largeImageURL, tags}} = this.props;
      return createPortal(
        <div className={css.Modal} 
                 > 
                <div className={css.Overlay} onClick={this.handleClick} onDoubleClick={this.handleDoubleClick} >
                  <img src={largeImageURL } alt={tags}
            />
          </div>
        </div>, modalRoot
      )
}
    }




// render() {
//     const {
//       image: { largeImageURL, tags },
//     } = this.props;

//     return (
//       <Overlay onClick={this.handleClick}>
//         <ImgModalWrap>
//           <img src={largeImageURL} alt={tags} />
//         </ImgModalWrap>
//       </Overlay>
//     );