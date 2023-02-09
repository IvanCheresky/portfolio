export type RouteInfo = {
  path: string;
  name: string;
};

export type RoutesInfo = {
  [name: string]: RouteInfo;
};

export const getPostRoute = (postName: string) => {
  return `/blog/${postName}`;
};

const routes: RoutesInfo = {
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
