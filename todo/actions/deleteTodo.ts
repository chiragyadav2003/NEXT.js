"use server"

import prisma from "@/db/prisma/db"

export async function DeleteTodo(id:number){
    try {
        const res = await prisma.todo.delete({
            where:{
                id:id
            }
        })
        console.log("res", res)
    } catch (error) {
        console.log(error)
        return {
            error:error,
            success:false,
            message:"todo deletion failed"
        }
    }
    console.log("todo deleted")
    return {
        message:"todo deleted",
        success:true
    }
}