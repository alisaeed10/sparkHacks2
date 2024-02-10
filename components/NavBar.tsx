import Link from 'next/link';

export default function NavBar() {
    return (
    <nav className ="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16">
            <div></div>
            <div>
                <ul className = "flex">
                    <Link href = "/Home">
                        <li className = "ml-10 uppercase hover:border-b text-xl text-gray-500">Home</li>
                    </Link>
                    <Link href = "/Motivation">
                        <li className = "ml-10 uppercase hover:border-b text-xl text-gray-500">Motivation</li>
                    </Link>
                    <Link href = "/AtHomeWorkOut">
                        <li className = "ml-10 uppercase hover:border-b text-xl text-gray-500">Home Work Outs</li>
                    </Link>
                    <Link href = "/Technique">
                        <li className = "ml-10 uppercase hover:border-b text-xl text-gray-500">Technique</li>
                    </Link>
                </ul>
            </div>
        </div>
    </nav>        
    )
};