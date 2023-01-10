import React from 'react';
import css from "./Searchbar.module.css"
import {toast} from 'react-toastify'
  import PropTypes from 'prop-types';


export class Searchbar extends React.Component {
 
    state = {
        querry: ""
    }
    handleQuerryChange = e => {
        this.setState({querry: e.currentTarget.value.toLowerCase()})
    }

    handleSubmit = e => {
        e.preventDefault()
        if (this.state.querry.trim() === "") {
            toast.error("Type your querry.")
            return;
        }
        this.props.onSubmit(this.state.querry)
        this.setState({ querry: ''})
    }
  
    render() {
           return (
  <header className={css.Searchbar}>
  <form className={css.SearchForm} onSubmit = {this.handleSubmit}  >
                       <button type="submit" className={css.SearchFormButton}>
  
  </button>
  <input className={css.SearchFormInput } onChange={this.handleQuerryChange}
      value={this.state.querry}
      type="text"
      autoComplete="off"
      autoFocus
      placeholder="Search images and photos"
    />
 </form>
</header>
)
}
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};