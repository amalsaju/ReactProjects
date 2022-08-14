
import { Outlet } from 'react-router-dom';

import Sidebar from '../sidebar/sidebar.components';

import './layout.styles.scss';

const Layout = () => {
  return (
    <div className='App'>
      <Sidebar />
      <div className='page'>
        <Outlet />
      </div>
    </div>

  )
}

export default Layout;
