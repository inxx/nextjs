import Link from "next/link"
import Layout from "../components/Layout"

const Search = ({url}) => {
    return (
        <Layout>
            당신이 검색한 키워드는 <strong>"{url.query.keyword}"</strong> 입니다.
        </Layout>
    );
};


export default Search;