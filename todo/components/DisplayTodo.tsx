"use server"

import prisma from "@/db/prisma/db";
import { TodoCard } from "./TodoCard";

export async function DisplayTodo(){
    const todos = await prisma.todo.findMany()

    return (
        <div>
            <TodoCard todos={todos}/>
        </div>
    )
}