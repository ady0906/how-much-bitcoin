import Link from 'next/link'

const Index = () => (
    <div>
        <Link href='/about'>
            <a style={{ fontSize: 20 }}>About page</a>
        </Link>
        <p>Working with another component</p>
    </div>
)

export default Index
