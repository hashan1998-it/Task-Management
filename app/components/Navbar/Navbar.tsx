import Link from "next/link";

function Navbar() {
    return (
        <div className="w-full fixed top-0 left-0 h-16 shadow-lg z-20 bg-white">
            <header className="max-w-7xl mx-auto flex justify-between p-4">
                <Link href="/">
                    <h1 className="text-2xl">Task Manager</h1>
                </Link>
                <div className="flex gap-4">
                    <Link href="/login" className="hover:text-gray-400">Login</Link>
                    <Link href="/register" className="hover:text-gray-400">Register</Link>
                </div>
            </header>
        </div>
    );
}

export default Navbar;
