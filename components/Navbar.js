import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
        <div className="nav-items-wraper">
            <div className="logo">
                <Image width="80" height="70" src="/logo.png" alt="logo" />
            </div>
            <nav className="nav-items">
                <Link href="/">Home</Link>
                <Link href="/about">About</Link>
                <Link href="/ninjas">List</Link>
                <Link href="/contact">Contact</Link>
            </nav>
        </div>
    );
}

export default Navbar;