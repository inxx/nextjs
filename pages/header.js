import Link from "next/link"

const Header = () => (
  <div>
        <h1 style={{fontSize:'20px'}}>
            안녕, Next.js
        </h1>
        <h2>
            <Link href="/">
                <span style={{background: 'black', color: 'white', margin: '0 15px 0 0', fontSize: '16px'}}>홈</span>
            </Link>
            <Link href="/about">
                <span style={{background: 'black', color: 'white', fontSize: '16px'}}>소개</span>
            </Link>
        </h2>
    </div>
);

export default Header;