"use server"

import { getTodo } from "@/actions/getTodos";
import { TodoCard } from "./TodoCard";

export async function DisplayTodo(){
    const todos = await getTodo()

    return (
        <div>
            <TodoCard todos={todos}/>
        </div>
    )
}