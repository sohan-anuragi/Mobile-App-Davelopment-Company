import ScrollToTop from "./ScrollToTop.jsx";
import { Outlet } from "react-router-dom";

export default function RootLayout() {
  return (
    <>
      <ScrollToTop />
      <Outlet />
    </>
  );
}
