// export default function Tudo({ task, isDane }) {
//     return (
//         <li>Task: {task}  </li>
//     )
// }


// export default function Tudo({ task, isDane }) {

//     if (isDane === true) {
//         return <li> Done: {task}  </li>
//     }
//     else {
//         return <li> pending: {task} </li>
//     }



// }




export default function Tudo({ task, isDane, time = 0 }) {

    if (isDane === true) {
        return <li> Done: {task} dorition: {time} </li>
    }
    return <li> to be done: {task} {time} </li>




}