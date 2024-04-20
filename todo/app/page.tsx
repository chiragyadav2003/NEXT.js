import { AddTodo } from "@/components/AddTodo";
import { DisplayTodo } from "@/components/DisplayTodo"
export default function Home() {
  return (
    <div className="flex relative flex-col gap-8 h-screen justify-center items-center ">
        <div className="flex fixed top-[100px] flex-col justify-center items-center">
          <AddTodo/>
        </div>
        <div className="fixed top-[250px]">
          <DisplayTodo/>
        </div>
        
    </div>
  );
}
