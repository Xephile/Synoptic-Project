import Header from "../Components/Header";
import Navbar from "../Components/Navbar";

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
