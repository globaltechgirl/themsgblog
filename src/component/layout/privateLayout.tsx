import { useMemo } from "react";
import { AppShell } from "@mantine/core";
import type { AppShellProps } from "@mantine/core";
import { Outlet, useLocation } from "react-router-dom";

import Footer from "@/component/layout/footer";
import { ROUTES } from "@/utils/constants";

const PrivateLayout = () => {
  const location = useLocation();

  const { showHeader, showFooter } = useMemo(() => {
    const hiddenRoutes = ["/landing", ROUTES.HOME, ROUTES.BLOGS];
    const isHidden = hiddenRoutes.includes(location.pathname);

    return {
      showHeader: !isHidden,
      showFooter: !isHidden,
    };
  }, [location.pathname]);

  const appShellStyles: AppShellProps["styles"] = {
    root: {
      backgroundColor: "var(--white-200)",
      width: "98%",
      height: "100%",
      margin: "10px auto",
      borderRadius: 12,
    },
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
  };

  return (
    <AppShell header={{ height: 60 }} styles={appShellStyles}>
      {showHeader && (
        <AppShell.Header
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            right: 0,
            background: "transparent",
            zIndex: 10,
          }}
        />
      )}

      <AppShell.Main>
        <Outlet />
        {showFooter && <Footer />}
      </AppShell.Main>
    </AppShell>
  );
};

export default PrivateLayout;
