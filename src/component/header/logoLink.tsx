import { Link, useLocation } from "react-router-dom";
import { Image } from "@mantine/core";
import logo from "@/assets/logo.svg";
import { ROUTES } from "@/utils/constants";

const LogoLink = () => {
  const location = useLocation();

  const targetPath: string =
    location.pathname === ROUTES.HOME ? "/landing" : ROUTES.HOME;

  return (
    <Link to={targetPath}>
      <Image
        src={logo}
        alt="App Logo"
        w={35}
        h="auto"
        fit="contain"
      />
    </Link>
  );
};

export default LogoLink;

