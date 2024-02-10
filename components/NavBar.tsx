import Link from 'next/link';

export default function NavBar() {
    return (
    <nav className ="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16">
            <div></div>
            <div>
                <ul className = "hidden sm:flex">
                    <Link href = "/Home">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Home</li>
                    </Link>
                    <Link href = "/Motivation">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Motivation</li>
                    </Link>
                    <Link href = "/AtHomeWorkOut">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Home Work Outs</li>
                    </Link>
                    <Link href = "/Technique">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Technique</li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>        
    )
};