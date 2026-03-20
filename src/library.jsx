export default function Library({books}){
    return(
        <div>
            <h2>My national Center Library:  {books.length}</h2>
            <p>book collection</p>
            <p>address:</p>

            <ul>
                {
                 books.map(book => )   
                }
            </ul>
        </div>
    )
}