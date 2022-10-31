const Footer = () => {
  return (
    <footer className="bg-dark d-flex justify-content-evenly py-5">
      {/* <div className="d-flex flex-col">
        <ul className="list-unstyled underline text-white">
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
          <li>
            <a href="#">Terms and Conditions</a>
          </li>
        </ul>
      </div> */}

      <div className="d-flex flex-column">
        <section className="w-25">
          <a href="#">
            <img
              src="https://img.icons8.com/nolan/344/facebook.png"
              alt="facebook"
              className="w-25 me-2"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/nolan/344/twitter.png"
              alt="twitter"
              className="w-25 mx-2"
            />
          </a>
          <a href="#">
            <img
              src="https://img.icons8.com/nolan/344/instagram-new.png"
              alt="instagram"
              className="w-25 mx-2"
            />
          </a>
        </section>
        <h4 className="py-1">
          <a href="#" className="text-white">
            Terms and Conditions
          </a>
        </h4>
        <h4 className="py-1">
          <a href="#" className="text-white">
            FAQ's
          </a>
        </h4>
        <h4 className="py-1">
          <a href="#" className="text-white">
            Forums
          </a>
        </h4>
      </div>
      <div className="d-flex flex-column justify-content-around">
        <h4>
          <a href="#" className="text-white">
            Contrabuting
          </a>
        </h4>
        <h4>
          <a href="#" className="text-white">
            Acknowledgements
          </a>
        </h4>
        <h4>
          <a href="#" className="text-white">
            Blog
          </a>
        </h4>
        <h4>
          <a href="#" className="text-white">
            Privacy
          </a>
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
