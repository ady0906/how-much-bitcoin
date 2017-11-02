import Layout from '../components/MyLayout.js'
import Link from 'next/link'

const PostLink = (props) => (
    <li>
        <Link href={`/post?title=${props.title}`}>
            <a>{props.title}</a>
        </Link>
    </li>
)

export default () => (
    <Layout>
        <h1>Adrien's blog</h1>
        <ul>
            <PostLink title='Hello Next.js'/>
            <PostLink title='Learning Next.js + React is the bomb'/>
            <PostLink title='Deploy apps with Zeit'/>
        </ul>
    </Layout>
)
