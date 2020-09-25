import React, { Component } from 'react';
import { graphql } from 'react-apollo';
import * as compose from 'lodash.flowright'; // used to be compose from react apollo but they removed it since lodash does the same thing
import { getAuthorsQuery, addBookMutation } from '../queries/queries';

class AddBook extends Component {
    state = {
        name: '',
        genre: '',
        authorId: ''
    }

    displayAuthors() {
        const data = this.props.getAuthorsQuery
        if(data.loading) {
            return(<option> Loading Authors... </option>)
        } else {
            return data.authors.map(author => {
                return <option key={ author.id } value={ author.id }> { author.name } </option>
            })
        }
    }

    submitForm(e) {
        e.preventDefault()
        const { name, genre, authorId } = this.state
        
        this.props.addBookMutation({
            variables: {
                name: name,
                genre: genre,
                authorId: authorId
            }
        })
    }

    render() {
        return(
            <form id="add-book" onSubmit={ (e) => this.submitForm(e) }>
                <div className="field">
                    <label> Book Name: </label>
                    <input type="text" onChange={ e => this.setState({ name: e.target.value }) }></input>
                </div>

                <div className="field">
                    <label> Genre: </label>
                    <input type="text" onChange={ e => this.setState({ genre: e.target.value }) }></input>
                </div>

                <div className="field">
                    <label> Author: </label>
                    <select onChange={ e => this.setState({ authorId: e.target.value }) }>
                        <option> Select Author </option>
                        { this.displayAuthors() }
                    </select>
                </div>

                <button> + </button>
            </form>
        )
    }
}

export default compose(
    graphql(getAuthorsQuery, { name: "getAuthorsQuery" }),
    graphql(addBookMutation, { name: "addBookMutation" })
)(AddBook);