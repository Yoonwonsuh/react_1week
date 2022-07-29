import Table from 'react-bootstrap/Table';
import { useSelector } from "react-redux"

function TodoTable() {
    let todos = useSelector((state) => { return state.todotables })
    console.log(todos);

    return (
        <Table striped bordered hover>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Title</th>
                    <th>Body</th>
                    <th>IsDone</th>
                </tr>
            </thead>
            <tbody>
                {todos.map((a, i) => {
                    return (
                        <tr key={i}>
                            <td>{todos[i].id}</td>
                            <td>{todos[i].title}</td>
                            <td>{todos[i].body}</td>
                            <td>{todos[i].isDone ? 'true' : 'false'}</td>
                        </tr>


                    )
                })}
            </tbody>
        </Table>
    )

}

export default TodoTable