import React from "react";
import HeaderLayout from "@/layouts/HeaderLayout";
import routes from "@/utils/routes";

const Blog = () => {
  return <HeaderLayout currentRoute={routes.blog.path}>Blog</HeaderLayout>;
};

export default Blog;
