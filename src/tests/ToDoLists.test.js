import { render, screen } from "@testing-library/react"
import ToDoList from "../components/TodoList"

describe("Testando componente Todolist.js", () => {
    test("deve renderizar com o título", () => {
        // 1. renderizar o componente
        render(<ToDoList/>)
        //2. selecionar os elementos que queremos analisar
        screen.debug()
        // 3. const titulo = screen.getByText(ToDo)
        const titulo = screen.getByText(/todo list/i)
        // 4. Criar asserções baseadas no comportamento esperado
        expect(titulo).toBeInTheDocument()
    })
})