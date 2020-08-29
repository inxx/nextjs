import Link from "next/link"

const linkStyle = {
    marginRight: '1rem',
    cursor: 'pointer'
}
const headerStyle = {
    paddnig: '20px',
    borderBottom: '1px solid #ddd'
}

const Header = () => {
    return  (
    <div style={headerStyle}>
        <h1>
            투더월 여긴 엥씨리
        </h1>
        <h2>
            <Link href="/"><a style={linkStyle}>홈</a></Link>
            <Link href="/about"><a style={linkStyle}>소개</a></Link>
            <Link href="/ssr-test"><a style={linkStyle}>SSR 테스트</a></Link>
        </h2>
    </div>    
  );
};

export default Header;