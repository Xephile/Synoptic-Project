import Filters from "../Components/Filters";
import RecommendedItemList from "../Components/RecommendedItemList";
import ItemList from "../Components/ItemList";
import Footer from "./Footer";

const recommendedDummyData = [
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
];

const dummyData = [
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
  {
    title: "City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.24",
  },
  {
    title: "Other City",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/d/d3/Stadtbild_M%C3%BCnchen.jpg/2560px-Stadtbild_M%C3%BCnchen.jpg",
    time: "0.25",
  },
];

const MainBody = () => {
  return (
    <>
      <div className="row bg-light">
        {/* Filters */}
        <div className="row p-0">
          <div className="col-sm-3 p-0 ps-5 pt-3 bg-white shadow">
            <Filters />
          </div>
          {/* Main Body */}
          <div className="col p-0">
            <div>
              <div className="bg-dark d-flex p-2">
                <h4 className="text-white px-3 border-end border-2">Footage</h4>
                <h4 className="text-white px-3">Music</h4>
              </div>
              <div className="p-3 row">
                <div className="col-10 d-flex">
                  <h2 className="pe-3">Recommended</h2>

                  <input
                    placeholder="Search"
                    type="text"
                    className="form-control form-control-sm w-25"
                  />
                </div>
                <div className="col">
                  <select
                    className="form-select form-select-md w-50"
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
            <RecommendedItemList items={recommendedDummyData} />
            <div>
              <ItemList items={dummyData} />
            </div>
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainBody;
