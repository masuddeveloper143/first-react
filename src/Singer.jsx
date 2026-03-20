import './App.css'


export default function ({singer}) {
    console.log(singer)
    return (
        <div className='person'>
            <h3>Name: {singer.name} </h3>
            <p >age: {singer.age}</p>
        </div>
    )
}