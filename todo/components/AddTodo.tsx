"use client"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { addTodo } from "@/actions/addTodo"

export function AddTodo(){
    const[todo,setTodo] = useState("")

    async function handleClick(){
        console.log("todo new", todo)
        console.log("button clicked")
        await addTodo(todo)
    }

    return (
        <div>
            <form className="flex flex-col items-center gap-2 justify-center">
                <Input placeholder="write todo" onChange={(e)=>{
                    setTodo(e.target.value)
                }}/>
                <Button onClick={handleClick}>Add Todo</Button>
            </form>
        </div>
    )
}