import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';

const DefaultLayout = () => {
  return (
    <div>
      <Header />
      <Outlet />

      <footer>
        <p>© 2024 My Portfolio. All rights reserved.</p>
      </footer>
    </div>
  );
};

export default DefaultLayout;
