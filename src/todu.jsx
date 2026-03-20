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




// export default function Tudo({ task, isDane, time = 0 }) {

//     if (isDane === true) {
//         return <li> Done: {task} dorition: {time} </li>
//     }
//     return <li> to be done: {task} {time} </li>
// }







// export default function Tudo({ task, isDane, time = 0 }) {

//     return isDane || <li> Not Done Task:  {task} time: {time}</li>

// }









// export default function Tudo({ task, isDone }) {

//     let listItem;

//     if (isDone === true) {
//         listItem = <li> Done task: {task}</li>;
//     }

//     else {
//         listItem = <li>padding: {task}</li>;
//     }

//     return listItem;
// }






export default function Tudo({ task, isDone }) {

    let listItem;

    if (isDone === true) {
        listItem = <li> Done task: {task}</li>;
    }

    else {
        listItem = <li>padding: {task}</li>;
    }

    return listItem;
}







// export default function Tudo({ task, isDone }) {
//     if (isDone === true) {
//         return <li>Done Task: {task} </li>
//     }

//     else {
//         return <li>padding: {task}</li>;
//     }
// }



