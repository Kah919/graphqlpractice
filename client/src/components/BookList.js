import React, {Component} from 'react';
import { graphql } from 'react-apollo'; // lets us bind apollo to react
import { getBooksQuery } from '../queries/queries';
import BookDetails from './BookDetails';
// graphql will attach to the props property


class BookList extends Component {
    state = {
        selected: null
    }

    displayBooks() {
        const data = this.props.data;
        if(data.loading) {
            return(<div> Loading Books... </div>)
        } else {
            return data.books.map(book => {
                return(
                <li key={ book.id } onClick={ e => { this.setState({ selected: book.id }) } }>{ book.name }</li>
                )
            })
        }
    }
    render() {
        return(
            
            <div>
                <ul id="book-list">
                    { this.displayBooks() }
                </ul>
                <BookDetails bookId={ this.state.selected }/>
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);