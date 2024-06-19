import { Outlet } from 'react-router-dom';

function BasicLayout() {
  return (
    <div>
      <header>Header</header>
      <main>
        <Outlet />
      </main>
      <footer>footer</footer>
    </div>
  );
}

export default BasicLayout;
