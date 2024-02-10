// import Link from 'next/link';
import {Link} from 'react-scroll';


export default function NavBar() {

    return (
        <div className='nav-conainter-background'>
    <nav className ="fixed w-full h-24 shadow-xl bg-white">
        <div className="flex justify-between items-center h-full w-full px-4 2x1:px-16">
            {/* <div></div> */}
            <div>
                <ul className = "hidden sm:flex">
                    <li className = "ml-10 uppercase hover:border-b text-xl"><Link to="Home" duration={500} offset={-50} smooth={true} style={{ cursor: 'pointer', userSelect: 'none' }}>Home</Link></li>
                    <li className = "ml-10 uppercase hover:border-b text-xl"><Link to="Motivation" duration={500} offset={-50} smooth={true} style={{ cursor: 'pointer', userSelect: 'none' }}>Motivation</Link></li>
                    <li className = "ml-10 uppercase hover:border-b text-xl"><Link to="AtHomeWorkOuts" duration={500} offset={-50} smooth={true} style={{ cursor: 'pointer', userSelect: 'none' }}>Home Workouts</Link></li>
                    <li className = "ml-10 uppercase hover:border-b text-xl"><Link to="Technique" duration={500} offset={-50} smooth={true} style={{ cursor: 'pointer', userSelect: 'none' }}>Technique</Link></li>
                    {/* <Link href="/Home">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Home</li>
                    </Link>
                    <Link href = "/Motivation">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Motivation</li>
                    </Link>
                    <Link href = "/AtHomeWorkOut">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Home WorkOuts</li>
                    </Link>
                    <Link href = "/Technique">
                        <li className = "ml-10 uppercase hover:border-b text-xl">Technique</li>
                    </Link> */}
                </ul>
            </div>
        </div>
    </nav>
    </div>
    )
};