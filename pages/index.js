import Layout from '../components/MyLayout.js'
import Link from 'next/link'
import fetch from 'isomorphic-unfetch'

function getPosts() {
    return [
        { id: 'hello-nextjs', title: 'Hello Next.js' },
        { id: 'learn-nextjs', title: 'Learn Next.js is dope' },
        { id: 'deploy-nextjs', title: 'Deploy apps with ZEIT' }
    ]
}

const Index = (props) => (
    <Layout>
        <h1>How much in Bitcoin</h1>
        <ul>
            {props.shows.map(({show}) => (
                <li key={show.id}>
                    <Link as={`/p/${show.id}`} href={`/post?id=${show.id}`}>
                        <a>{show.name}</a>
                    </Link>
                </li>
            ))}
        </ul>
    </Layout>
)

// set initial values based on API data
Index.getInitialProps = async function() {
    const res = await fetch('https://api.tvmaze.com/search/shows?q=batman')
    const data = await res.json()

    console.log(`Show data fetched. Count: ${data.length}`)

    // set up data object
    return {
        shows: data
    }
}

export default Index
