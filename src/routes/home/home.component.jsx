import Directory from "../../components/directory/directory.component";
import {Outlet, Link} from 'react-router-dom';

const Home = () => {

    return <div>
        <Directory />
        <Outlet />
    </div>
    ;
};

export default Home;
