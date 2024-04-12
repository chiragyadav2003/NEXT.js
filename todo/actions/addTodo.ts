"use server"

import prisma from "@/db/prisma/db"

export async function addTodo(content:string){
    console.timeLog("addTodo action")
    try {
        await prisma.todo.create({
            data:{
                content
            }
        })
    } catch (error) {
        console.log("error in todo creation")
        return {
            error:error,
            success:false
        }
    }
    console.log("todo created")
    return {
        message:"todo created",
        success:true
    }

}