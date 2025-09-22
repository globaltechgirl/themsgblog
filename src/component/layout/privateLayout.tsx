import { AppShell, Box } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";

import Header from "@/component/layout/header";
import Footer from "@/component/layout/footer";
import { ROUTES } from "@/utils/constants";

const PrivateLayoutAbsolute = () => {
  const location = useLocation();
  const isHomePage = location.pathname === ROUTES.HOME;

  return (
    <AppShell
      header={{ height: 60 }}
      styles={{
        root: { backgroundColor: "var(--white-100)" },
        header: {
          borderBottom: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
        },
        main: {
          minHeight: "100vh",
          paddingTop: 0,
          marginBottom: 0,
          backgroundColor: "transparent",
        },
      }}
    >
      {isHomePage ? (
        <Box
          style={{
            backgroundColor: "var(--white-200)",
            borderRadius: "12px",
            margin: "10px auto",
            width: "98%",
            overflow: "hidden",
          }}
        >
          <AppShell.Header
            style={{
              position: "relative", 
              background: "transparent",
              height: 60,
              zIndex: 10,
            }}
          >
            <Header />
          </AppShell.Header>

          <AppShell.Main>
            <Outlet />
          </AppShell.Main>
        </Box>
      ) : (
        <>
          <AppShell.Header
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              right: 0,
              background: "transparent",
              zIndex: 10,
            }}
          >
            <Header />
          </AppShell.Header>

          <AppShell.Main>
            <Outlet />
            <Footer />
          </AppShell.Main>
        </>
      )}
    </AppShell>
  );
};

export default PrivateLayoutAbsolute;
