"use server"

import prisma from "@/db/prisma/db";

export async function getTodo(){
    const todos = await prisma.todo.findMany()
    return todos
}