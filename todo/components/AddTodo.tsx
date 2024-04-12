"use client"
import { Button } from "@/components/ui/button"
import { Input } from "./ui/input"
import { useState } from "react"
import { addTodo } from "@/actions/addTodo"
import { useToast } from "@/components/ui/use-toast"
import { useRouter } from 'next/navigation'

export function AddTodo(){
    const[todo,setTodo] = useState("")
    const { toast } = useToast()
    const router = useRouter()

    async function handleClick(){
        console.log("before settodo cleat")
        setTodo("")
        console.log("after settodo cleat")
        toast({
            variant:"default",
            description: "Todo created successfully",
        })
        
        console.log("new todo", todo)
        const res = await addTodo(todo)
        console.log(res)
        router.replace("/");
    }

    return (
        <div className="flex flex-col items-center gap-x-2 gap-y-4 justify-center">
                <Input className="w-[300px] lg:w-[600px]" placeholder="enter todo" onChange={(e)=>{
                    setTodo(e.target.value)
                }}/>
                <Button onClick={handleClick} className="focus:scale-95 focus:duration-300">Add Todo</Button>
        </div>
    )
}
