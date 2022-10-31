const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="w-75 m-auto d-flex justify-content-between my-auto">
        <h1 className="navbar-item display-3 text-white">Whizzy Software</h1>
        <div className="navbar-nav my-auto display-7">
          <ul className="list-group list-group-horizontal">
            <li className="nav-item nav-link active px-4">
              <h3><a href="#" className="text-white text-none">Home</a></h3>
            </li>
            <li className="nav-item nav-link active px-4">
              <h3><a href="#" className="text-white text-none">About</a></h3>
            </li>
            <li className="nav-item nav-link active px-4">
              <h3>
                <a href="#" className="text-white"><u>Media Organiser</u></a>
              </h3>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
