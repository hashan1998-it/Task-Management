'use client';
import { twMerge } from "tailwind-merge"
function Button({ children, onClick, className }: { children: string, onClick?:()=>void, className?: string }) {
    return (
        <button className={twMerge("py-2 px-4 bg-green-400 rounded-lg text-white font-bold", className)} type="button" onClick={onClick}>{children}</button>
    )
}

export default Button