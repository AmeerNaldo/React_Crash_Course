import { Link } from 'react-router-dom';

function Nav() {
    return (
        <nav>
        <Link to="/">Home</Link>
        <Link to="/users/ronaldo">asdsa</Link>
        <Link to="/users/messi">Messi</Link>
        <Link to="/users/myself">Ameer</Link>
      </nav>
    );
}

export default Nav;