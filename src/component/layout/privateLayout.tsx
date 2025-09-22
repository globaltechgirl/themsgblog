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
        root: {
          backgroundColor: "var(--white-100)",
        },
        header: {
          borderBottom: "none",
          boxShadow: "none",
          backgroundColor: "transparent",
        },
        main: {
          minHeight: "100vh",
          paddingTop: 0,
          marginBottom: "0px",
          backgroundColor: "transparent",
        },
      }}
    >
      <AppShell.Header
        style={{
          background: "transparent",
          position: "absolute", // floats above the page
          top: 0,
          left: 0,
          right: 0,
          zIndex: 10,
        }}
      >
        <Box
          style={{
            backgroundColor: isHomePage ? "var(--white-200)" : "transparent",
            borderTopLeftRadius: isHomePage ? "12px" : 0,
            borderTopRightRadius: isHomePage ? "12px" : 0,
            margin: isHomePage ? "10px auto 0 auto" : 0,
            width: isHomePage ? "98%" : "100%",
            height: "100%",
          }}
        >
          <Header />
        </Box>
      </AppShell.Header>

      <AppShell.Main>
        {isHomePage ? (
          <Box
            style={{
              backgroundColor: "var(--white-200)",
              borderBottomLeftRadius: "12px",
              borderBottomRightRadius: "12px",
              margin: "20px auto", 
              marginBottom: "10px",
              width: "98%",
            }}
          >
            <Outlet />
          </Box>
        ) : (
          <>
            <Outlet />
            <Footer />
          </>
        )}
      </AppShell.Main>
    </AppShell>
  );
};

export default PrivateLayoutAbsolute;
