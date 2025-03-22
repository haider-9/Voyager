import { type RouteConfig, route } from "@react-router/dev/routes";

export default [
  route("/", "routes/home.tsx"),
  route("contact", "routes/contact.tsx"),
  route("about", "routes/about.tsx"),
  route("services", "routes/services.tsx"),
  route("trips", "routes/trips.tsx"),
  route("trips/destination/:name", "routes/trips/destination/$name.tsx"),
  route('login', "routes/auth.tsx"),
] satisfies RouteConfig;
