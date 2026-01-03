import { Outlet } from 'react-router-dom';
import NavBar from '../NavBar/NavBar';

const DefaultLayout = () => {
  return (
    <div>
      <NavBar />
      <Outlet />
      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
