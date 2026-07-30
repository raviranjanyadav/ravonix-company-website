import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen">
      <header>
        Header
      </header>

      <main>
        <Outlet />
      </main>

      <footer>
        Footer
      </footer>
    </div>
  );
}

export default MainLayout;