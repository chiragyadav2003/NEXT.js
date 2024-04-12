"use client"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { useState } from "react"

export function AddTodo(){
    const[todo,setTodo] = useState("")
    return (
        <div className="flex flex-col items-center gap-2 justify-center">
            <form>
                <Input placeholder="write todo" onChange={(e)=>{
                    setTodo(e.target.value)
                }}/>
                <Button>Add Todo</Button>
            </form>
        </div>
    )
}