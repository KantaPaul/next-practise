import Link from 'next/link'
import { useEffect } from 'react'
import { useRouter } from 'next/router'

const NotFound = () => {
    let router = useRouter()

    useEffect(() => {
        setTimeout(() => {
            router.push('/')
        }, 3000);
    }, [])

    return (
        <div className="notfound-page">
            <h1>404 Not Found</h1>
            <Link href="/">Back To Home</Link>
        </div>
    );
}

export default NotFound;