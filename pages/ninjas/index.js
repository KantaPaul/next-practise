import Link from 'next/link'
import Head from 'next/head'

export const getStaticProps = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}

const NinjaList = ({data}) => {
    // console.log(data)
    return (
        <div className="ninja-lists">
            <Head>
                <title>Ninja Lists</title>
            </Head>
            {data.map((value) => {
                return (
                    <div className="ninja-list" key={value.id}>
                        <Link href={`/ninjas/${value.id}`}>
                            {value.name}
                        </Link>
                    </div>
                )
            })}
        </div>
    );
}

export default NinjaList;