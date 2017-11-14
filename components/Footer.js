import Link from 'next/link'

const footerStyle = {
    'textAlign': 'center'
}

const Footer = () => (
    <div>
        <Link href='https://www.coindesk.com/price/'>
            <a>⚡ by CoinDesk</a>
        </Link>
        <Link>
            <a>Built with ♥ by Adrien Peynichou</a>
        </Link>
    </div>
)

export default Footer
