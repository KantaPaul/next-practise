import Head from 'next/head'

export const getStaticPaths = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();

    const paths = data.map((user) => {
        return {
            params: {id: user.id.toString()}
        }
    })

    return {
        paths,
        fallback: false
    }
}

export const getStaticProps = async ({params}) => {
    const response = await fetch(`https://jsonplaceholder.typicode.com/users/${params.id}`);
    const data = await response.json();

    return {
        props: {
            data
        }
    }
}

const Details = ({data}) => {
    return (
        <>
            <Head>
                <title>{data.name}</title>
            </Head>
            <div className="details-page">
                <h1>Details Page</h1>
                <ul className="details-list">
                    <li>{data.name}</li>
                    <li>{data.address.city}</li>
                    <li><a href={`mailto:${data.email}`}>{data.email}</a></li>
                    <li><a href={`tel:${data.phone}`}>{data.phone}</a></li>
                </ul>
            </div>
        </>
    );
}

export default Details;