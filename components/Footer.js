import Link from 'next/link'

const footerStyle = {
    'textAlign': 'center'
}

const Footer = () => (
    <div>
        <p>
            <Link href='https://www.coindesk.com/price/'>
                <a>⚡ by CoinDesk</a>
            </Link>
        </p>
        <p>
            <Link href='http://www.adrienpeynichou.com'>
                <a>Built with ♥ by Adrien Peynichou</a>
            </Link>
        </p>
    </div>
)

export default Footer
