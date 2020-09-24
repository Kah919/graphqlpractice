import React, {Component} from 'react';
import { gql } from 'apollo-boost';
import { graphql } from 'react-apollo'; // lets us bind apollo to react
// graphql will attach to the props property
const getBooksQuery = gql`
    {
        books {
            name
            id
        }
    }
`

class BookList extends Component {
    displayBooks() {
        const data = this.props.data;
        if(data.loading) {
            return(<div> Loading Books... </div>)
        } else {
            return data.books.map(book => {
                return(
                <li key={ book.id }>{ book.name }</li>
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
            </div>
        )
    }
}

export default graphql(getBooksQuery)(BookList);