import React from 'react';
import { ToastContainer, toast } from 'react-toastify'
import css from "./App.module.css"
import 'react-toastify/dist/ReactToastify.css';
import {getMaterials}  from "./Api"


import { Searchbar } from './Searchbar/Searchbar';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Button } from './Button/Button'
import { Loader } from './Loader/Loader';
import {Modal} from './Modal/Modal'


export class App extends React.Component{

  state = {
    name: '',
    materials: [],
    isLoading: false,
    total : "",
    page: 1,
    modal: false,
    bigImage:null,
  }

  
  querryRequest= async querry => {
     this.setState({name:querry, page:1})
   }
  
   componentDidUpdate(_, prevState) {
    if (
      prevState.name !== this.state.name||
      prevState.page !== this.state.page
    ) {
      this.getFetch()
    }
   }
  


  getFetch = async()  => {
    this.setState({ isLoading: true })
    try {
      const materials = await getMaterials(this.state.name, this.state.page);
       if (materials.total === 0) {
        toast.info(`Not found`)
      
         
       }
       if (materials.total > 0 && this.state.page === 1) {
         toast.success(`Find ${materials.total} items`)
       }
     
      
      this.setState({total:materials.total})
      if (this.state.page > 1) {
          this.setState(prevState => ({
          materials: [...prevState.materials,
             ...materials.hits], total: materials.total 
         })
          )
      }
      else {
        this.setState({materials:materials.hits})
      }
    }
    catch (error) {
      console.log(error);
    }finally {
      this.setState({ isLoading: false });
    }
  }


  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };


  toggleModal = () =>
  {
    this.setState(({ modal }) => ({ modal: !modal }))
  }

  openModal = item => {
  this.toggleModal()
  this.setState({ bigImage: item });
  };


  render() {
    const{total, materials,isLoading, modal, bigImage}=this.state
    return (
      <div className={css.App}>
        

        {modal && <Modal
          onClose={this.toggleModal}
          image={bigImage}
        > </Modal>}

        <Searchbar onSubmit={this.querryRequest} />
        {isLoading && <Loader />}
        
        <ImageGallery materials={materials}
          onOpen={this.openModal}
        
        />
       
        {(total / 12) > 1 && (
         
          <Button onClick={this.loadMore} />
        )}
        <ToastContainer autoClose = {1500} Transition="zoom" />
    </div>
    )
  }
}