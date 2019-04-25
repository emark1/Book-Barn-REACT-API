import React,{Component} from 'react';
import logo from './logo.svg';
import './App.css';

// In this assignment you are going to create a custom API using NodeJS which will perform CRUD operations on a database. You can use any database you want. 

// - Allow the user to add new books 

// - Allow the user to view all books 

// - Allow the user to delete books 

// - Allow the user to update books 


class App extends Component {

  constructor() {

    super()

    this.state = {
      //books will be an array filled with objects sent from the server
      books: [],
      title: '',
      genre: '',
      publisher: '',
      year: 0,
      imageurl: ''
      }
  }

  componentDidMount() {
    let url = 'http://localhost:8080/api/books'
    fetch(url)
    .then(response => response.json())
    .then(json => {
      this.setState({
        //Sets value of the books array in the state to the json
        books: json
      })
    })

  }

  handleTextBoxChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleSaveBookClick = () => {
    let book = {title: this.state.title, genre: this.state.genre, publisher: this.state.publisher, year: this.state.year, imageurl: this.state.imageurl}
    fetch('http://localhost:8080/api/books', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(book)
    })
  }

  
  render() {
    let books = this.state.books
    let bookItems = books.map((book) => {
      return (
        <li>{book.title} - {book.genre} - {book.year}
        <p></p><img src={book.imageurl}/> - <button>Delete</button></li>
      )
    })


  return (
      <div>
        <h1>Add a book: </h1>
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter title" name="title" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter genre" name="genre" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter publisher" name="publisher" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter year" name="year" />
        <input type="text" onChange={this.handleTextBoxChange} placeholder="Enter imageurl" name="imageurl" />
        <button onClick={this.handleSaveBookClick}>Save</button>
        <h1>List Of All Books: </h1>
        <ul>{bookItems}</ul>
      </div>
    )
  }
}

export default App;
