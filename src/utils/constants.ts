export const BASE_URL = import.meta.env.VITE_API_BASE_URL || "";

export const ROUTES = {
  ROOT: "/",

  HOME: "/home",

  BLOGS: "/blogs",
  BLOG_DETAIL: (id: string | number) => `/blogs/${id}`,

  DAILY: "/daily",
  DAILY_DETAIL: (id: string | number) => `/daily/${id}`,

  READS: "/reads",
  READ_DETAIL: (id: string | number) => `/reads/${id}`,

  AUTH: {
    LOGIN: "/auth/login",
    REGISTER: "/auth/register",
    FORGOT_PASSWORD: "/auth/forgot-password",
  },
};

export const NavLinks = [
  {
    label: "Home",
    link: ROUTES.HOME,
  },
  {
    label: "Blogs",
    link: ROUTES.BLOGS,
  },
  {
    label: "Reads",
    link: ROUTES.READS,
  },
  {
    label: "Daily",
    link: ROUTES.DAILY,
  },
];
