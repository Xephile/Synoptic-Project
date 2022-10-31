const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="w-75 m-auto d-flex justify-content-between my-auto">
        <h1 className="navbar-item display-3 text-white">TITLE</h1>
        <div className="navbar-nav my-auto display-7">
          <ul className="list-group list-group-horizontal">
            <li className="nav-item nav-link active px-4">
              <h3>Home</h3>
            </li>
            <li className="nav-item nav-link active px-4">
              <h3>About</h3>
            </li>
            <li className="nav-item nav-link active px-4">
              <h3>
                <a>Contact</a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
