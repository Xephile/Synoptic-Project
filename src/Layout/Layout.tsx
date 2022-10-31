import Header from "./Header";
import Navbar from "./Navbar";

const Layout = (props: any) => {
  return (
    <div>
      <Navbar />
      <Header />
      <main className="bg-light">{props.children}</main>
    </div>
  );
};

export default Layout;
