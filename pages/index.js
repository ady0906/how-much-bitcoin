import Link from 'next/link'

const Index = () => (
    <div>
        <Link href='/about'>
            <button style={{ fontSize: 20 }}>About page</button>
        </Link>
        <p>Working with another component</p>
    </div>
)

export default Index
