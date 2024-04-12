"use server"

import prisma from "@/db/prisma/db"

export async function addTodo(content:string){

    try {
        await prisma.todo.create({
            data:{
                content
            }
        })

        return {
            message:"todo created",
            success:true
        }
    } catch (error) {
        console.log("error in todo creation")
        return{
            error:error,
            success:false
        }
    }

}