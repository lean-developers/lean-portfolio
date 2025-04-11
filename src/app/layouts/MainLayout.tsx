import { Outlet } from "react-router-dom";

const MainLayout = () => {
  return (
    <>
      <main className="relative h-screen w-full bg-primary-bold overflow-hidden">
        <Outlet />
      </main>
    </>
  );
};

export default MainLayout;
