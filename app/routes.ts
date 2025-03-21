import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
] satisfies RouteConfig;
