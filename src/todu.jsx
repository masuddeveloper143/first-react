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

export default function Tudo({ task, isDone, time = 0 }) {
  if (isDone) {
    return null; // কিছুই দেখাবে না
  }

  return <li>Not Done Task: {task} time: {time}</li>;
}



