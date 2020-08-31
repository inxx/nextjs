import Link from "next/link"
import Layout from "../components/Layout"

const Index = () => (
  <Layout>
      ㅇㅅㅇ
      <div className="search" >
        <form action="/search" method="GET">
          <input type="text" id="keyword" name="keyword" /><button>검색</button>
        </form>
      </div>
  </Layout>
);

export default Index;