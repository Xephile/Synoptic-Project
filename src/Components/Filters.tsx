const Filters = () => {
  return (
    <section className="ps-4">
      <div className="w-75">
        <h3 className="border-bottom border-dark border-3 pb-3 mb-3 mt-3">
          Filters
        </h3>
        <ul className="list-group p-2">
          <li className="list-unstyled">
            <input type="checkbox" id="house" className="form-check-input" />
            <label htmlFor="house" className="px-2">
              <h5>House</h5>
            </label>
          </li>
          <li className="list-unstyled">
            <input type="checkbox" id="forest" className="form-check-input" />
            <label htmlFor="forest" className="px-2">
              <h5>Forest</h5>
            </label>
          </li>
          <li className="list-unstyled">
            <input type="checkbox" id="city" className="form-check-input" />
            <label htmlFor="city" className="px-2">
              <h5>City</h5>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Filters;
