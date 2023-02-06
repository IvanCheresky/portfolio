type RouteInfo = {
  [name: string]: {
    path: string;
    name: string;
  };
};

const routes: RouteInfo = {
  home: {
    path: "/",
    name: "Home",
  },
  blog: {
    path: "/blog",
    name: "Blog",
  },
  contact: {
    path: "/contact",
    name: "Contact",
  },
  skills: {
    path: "/skills",
    name: "Skills",
  },
  experience: {
    path: "/experience",
    name: "Experience",
  },
};

export default routes;
