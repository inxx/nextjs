import Layout from '../components/Layout';
import axios from 'axios';

class SSRTest extends React.Component {
    static async getInitialProps ({req}) {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        
        return req 
            ? { from: 'server' , users: response.data } // 서버에서 실행 할 시
            : { from: 'client ', users: response.data } // 클라이언트에서 실행 할 시
            
    }

    render() {

        const { users } = this.props;

        const userList = users.map(
            user => <li key={user.id}>{user.username}</li>
        )

        return (
            <Layout>
                {this.props.from} 에서 실행이 되었어요.

                <ul>
                    {userList}
                </ul>
                
            </Layout>
        );
    }
}

export default SSRTest;