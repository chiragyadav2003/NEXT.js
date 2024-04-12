"use server"

import prisma from "@/db/prisma/db";

export async function DisplayTodo(){
    const todos = await prisma.todo.findMany()

    return (
        <div>
            <ul>
                {todos.map((todo)=>{
                    return <li key={todo.id} className="list-disc">{todo.content}</li>
                })}
            </ul>
        </div>
    )
}