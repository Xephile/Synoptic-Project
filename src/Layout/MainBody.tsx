import Filters from "../Components/Filters";
import Footer from "./Footer";
import AllItems from "../Components/AllItems";
import { useEffect, useState } from "react";

const MainBody = (props: any) => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFiles, setLoadedFiles] = useState<string[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<string[]>([]);
  const [filteredFilesConfig, setFilteredFilesConfig] = useState("");

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://whizzy-software-default-rtdb.firebaseio.com/files.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let files = [];

        for (const key in data) {
          const file = {
            id: key,
            ...data[key],
          };
          if (file.name == null) continue
          files.push(file);
        }

        setIsLoading(false);
        setLoadedFiles(files);
        setFilteredFiles(files);
      });
  }, []);

  function filterFootage() {
    setFilteredFiles(loadedFiles.filter((element: any) => element.type == "mp4"))
    setFilteredFilesConfig("footage");
    if (filteredFilesConfig == "footage") {
      setFilteredFiles(loadedFiles);
      setFilteredFilesConfig("");
    }
  }

  function filterAudio() {
    setFilteredFiles(loadedFiles.filter((element: any) => element.type == "mp3"))
    setFilteredFilesConfig("audio");
    if (filteredFilesConfig == "audio") {
      setFilteredFiles(loadedFiles);
      setFilteredFilesConfig("");
    }
  }

  console.log(filteredFilesConfig)


  if (isLoading) {
    return (
      <section>
        <p>Loading...</p>
      </section>
    );
  }
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
                  <h3 className="pe-4"><a href="#" className="text-black" onClick={filterFootage}>Footage</a></h3>
                  <h3 className="pe-4"><a href="#" className="text-black" onClick={filterAudio}>Audio</a></h3>
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
            <AllItems files={filteredFiles} />
          </div>
        </div>
      </div>
      <Footer></Footer>
    </>
  );
};

export default MainBody;
