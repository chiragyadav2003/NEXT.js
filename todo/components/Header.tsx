import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export function Header(){
    return (
        <div className="relative">
            <div className="fixed top-0">
                <div className="flex relative justify-center items-center bg-black border-b-2 border-slate-400 h-[70px] w-screen">
                    <div className=" fixed left-4">
                        TodoApp
                    </div>
                    <div className="fixed right-4">
                    <Avatar className=" animate-spin-slow ">
                        <AvatarImage src="https://github.com/shadcn.png" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    </div>
                </div>
            </div>

        </div>
    )
}