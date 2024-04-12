import { AddTodo } from "@/components/AddTodo";
import { DisplayTodo } from "@/components/DisplayTodo"
export default function Home() {
  return (
    <div className="flex relative flex-col gap-8 h-screen justify-center items-center ">
        <div className="flex fixed top-[100px] flex-col justify-center items-center">
          <div className="text-3xl mb-6">
            Todo App
          </div> 
          <AddTodo/>
        </div>
        <div className="fixed top-[300px]">
          <DisplayTodo/>
        </div>
        
    </div>
  );
}
