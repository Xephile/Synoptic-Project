import Filters from "../Components/Filters";
import Footer from "./Footer";
import AllItems from "../Components/AllItems";

const MainBody = () => {

  return (
    <>
      <div className="row bg-light">

        {/* Show company name*/}
        <div className="ms-4 mb-4">
          <h4 className="border-bottom border-black border-3 w-25 ms-5 mt-4 pb-3">Whizzy Software</h4>
          <h1 className="ms-5"><i>your company name</i></h1>
        </div>

        {/* Filters */}
        <div className="row p-0">
          <div className="col-sm-3 p-0 ps-5 ms-3 pt-3">
            <Filters />
          </div>
          {/* Main Body */}
          <div className="col p-0">
            <div>

              <div className="p-3 row">
                <div className="col-10 d-flex">
                  <h3 className="pe-4"><a href="#" className="text-black">Footage</a></h3>
                  <h3 className="pe-4"><a href="#" className="text-black">Audio</a></h3>
                  <h3 className="pe-4"><a href="#" className="text-black">Your playlists</a></h3>

                  <input
                    placeholder="Search"
                    type="text"
                    className="form-control form-control-sm w-25"
                  />
                </div>
                <div className="col">
                  <select
                    className="form-select form-select-md w-75"
                    name="sort"
                    id="sort"
                  >
                    <option value="sort-by">Sort By</option>
                    <option value="top-rated">Top Rated</option>
                    <option value="relevance">Relevance</option>
                  </select>
                </div>
              </div>
            </div>
            <AllItems />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainBody;
