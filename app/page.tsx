import { twMerge } from "tailwind-merge";
import { containerStyle } from "./constants/styles";
import Link from "next/link";
import Button from "./components/Buttons/Button";

export default function Home() {
  return (
    <main className={twMerge(containerStyle, "flex flex-col justify-center items-center h-[calc(100svh-4rem)]")}>
      <h1 className="text-4xl">Task Manager Web</h1>
      <div className="mt-10 flex gap-6">
        <Link href="/login"><Button>Login</Button></Link>
        <Link href="/register"><Button>Register</Button></Link>
      </div>
    </main>
  )
}
