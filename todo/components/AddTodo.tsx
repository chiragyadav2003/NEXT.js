"use client"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { addTodo } from "@/actions/addTodo"

export function AddTodo(){
    const[todo,setTodo] = useState("")
    return (
        <div>
            <form className="flex flex-col items-center gap-2 justify-center">
                <Input placeholder="write todo" onChange={(e)=>{
                    setTodo(e.target.value)
                }}/>
                <Button onClick={async()=>{
                    await addTodo(todo)
                }}>Add Todo</Button>
            </form>
        </div>
    )
}