import axios from 'axios'
// run ts-node index.ts

const url = 'https://jsonplaceholder.typicode.com/todos/1'

// set up the Types for the response
interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

axios.get(url)
  .then(response => {
    // response.data has properties of type
    // id
    // title
    // completed
    const todo = response.data as Todo
 
    const id = todo.id
    const title = todo.title
    const completed = todo.completed


    console.log(`
      THE TODO WITH ID: ${id}
      Has a title of: ${title}
      Is it finished? ${completed}
    `)
  })