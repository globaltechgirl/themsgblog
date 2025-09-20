import { AppShell } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";

import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer"; 
import { ROUTES } from "@/utils/constants";

const PrivateLayout = () => {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;

  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        header: {
          borderBottom: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
        },
        main: {
          minHeight: "100vh",
          paddingTop: 0,
        },
      }}
    >
      <AppShell.Header>
        <Header />
      </AppShell.Header>

      <AppShell.Main>
        <Outlet />
        {!isHomePage && <Footer />}
      </AppShell.Main>
    </AppShell>
  );
};

export default PrivateLayout;
