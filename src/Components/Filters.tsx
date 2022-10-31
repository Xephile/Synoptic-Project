const Filters = () => {
  return (
    <section className="px-3">
      <div className="w-50">
        <h2 className="border-bottom border-dark border-3 pb-3 mb-3 mt-3">
          Filters
        </h2>
        <ul className="list-group p-2">
          <li className="list-unstyled">
            <input type="checkbox" name="top" />
            <label htmlFor="top" className="px-2">
              <h4>House</h4>
            </label>
          </li>
          <li className="list-unstyled">
            <input type="checkbox" name="middle" />
            <label htmlFor="middle" className="px-2">
              <h4>Forest</h4>
            </label>
          </li>
          <li className="list-unstyled">
            <input type="checkbox" />
            <label htmlFor="city" className="px-2">
              <h4>City</h4>
            </label>
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Filters;
