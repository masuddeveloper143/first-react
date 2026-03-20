import Book from './book';

export default function Library({books}){
    return(
        <div>
            <h2>My national Center Library:  {books.length}</h2>
            <p>book collection</p>
            <p>address:</p>

            <ul>
                {
                 books.map(book =>  <Book key={book.id} book={book}></Book>)   
                }
            </ul>
        </div>
    )
}