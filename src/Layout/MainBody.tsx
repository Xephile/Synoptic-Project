import Filters from "./Filters";
import Footer from "./Footer";
import AllItems from "../Components/Items/AllItems";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Playlists from "../Components/Playlists/Playlists";

const MainBody = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedFiles, setLoadedFiles] = useState<string[]>([]);
  const [loadedPlaylists, setLoadedPlaylists] = useState<string[]>([]);
  const [filteredFiles, setFilteredFiles] = useState<string[]>([]);
  const [filteredFilesConfig, setFilteredFilesConfig] = useState("All Files");
  const [searchTerm, setSearchTerm] = useState("");
  const [filterTerm, setFilterTerm] = useState<any[]>([]);
  const [availablePlaylists, setAvailablePlaylists] = useState<any[]>([]);

  // Get Data
  useEffect(() => {
    setIsLoading(true);
    fetch("https://whizzy-software-default-rtdb.firebaseio.com/files.json")
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
          if (file.name === null) continue;
          files.push(file);
        }

        setIsLoading(false);
        setLoadedFiles(files);
        setFilteredFiles(files);
      });
    fetch("https://whizzy-software-default-rtdb.firebaseio.com/playlists.json")
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        let playlists: any[] = [];
        data.map((playlist: any) => {
          playlists.push(playlist);
        });
        setAvailablePlaylists(playlists);
        setLoadedPlaylists(data);
      });
  }, []);

  // Filter Files to only show footage
  function filterFootage() {
    setFilteredFiles(
      loadedFiles.filter((element: any) => element.type === "mp4")
    );
    setFilteredFilesConfig("Footage");
    if (filteredFilesConfig === "Footage") {
      setFilteredFiles(loadedFiles);
      setFilteredFilesConfig("All Files");
    }
  }

  // Filter Files to only show audio
  function filterAudio() {
    setFilteredFiles(
      loadedFiles.filter((element: any) => element.type === "mp3")
    );
    setFilteredFilesConfig("Audio");
    if (filteredFilesConfig === "Audio") {
      setFilteredFiles(loadedFiles);
      setFilteredFilesConfig("All Files");
    }
  }

  // Go To playlists & get data
  function goToPlaylists() {
    setFilteredFilesConfig("Playlists");
    if (filteredFilesConfig === "Playlists") {
      setFilteredFilesConfig("All Files");
    }
  }

  //Show loading screen when loading
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
          <h4 className="border-bottom border-black border-3 w-25 ms-5 mt-4 pb-3">
            Whizzy Software
          </h4>
          <h1 className="ms-5">
            <i>your company name</i>
          </h1>
        </div>

        {/* Filters */}
        <div className="row">
          <div className="col-sm-3 p-0 ps-5 pt-3">
            <Filters
              files={loadedFiles}
              onChange={(event: any) => {
                setFilterTerm(event);
                // console.log(event);
              }}
            />
          </div>

          {/* Main Body */}
          <div className="col p-0">
            <div>
              <div className="p-3 row">
                <div className="col-10 d-flex ">
                  <h3 className="pe-4 linkHover">
                    <Link
                      className="linkHover"
                      to="/footage"
                      onClick={filterFootage}
                    >
                      Footage
                    </Link>
                  </h3>
                  <h3 className="pe-4 linkHover">
                    <Link
                      className="linkHover"
                      to="/audio"
                      onClick={filterAudio}
                    >
                      Audio
                    </Link>
                  </h3>
                  <h3 className="pe-4 linkHover">
                    <Link
                      className="linkHover"
                      to="/playlists"
                      onClick={goToPlaylists}
                    >
                      Your playlists
                    </Link>
                  </h3>

                  <input
                    placeholder="Search"
                    type="text"
                    className="form-control form-control-sm w-25 me-2"
                    onChange={(event) => {
                      setSearchTerm(event.target.value);
                    }}
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
            {/* Display All Items */}
            {filteredFilesConfig === "Playlists" ? (
              <Playlists playlists={loadedPlaylists} />
            ) : (
              <AllItems
                files={filteredFiles}
                filter={filteredFilesConfig}
                searchTerm={searchTerm}
                filterTerm={filterTerm}
                availablePlaylists={availablePlaylists}
              />
            )}
          </div>
        </div>
      </div>
      {/* Footer */}
      <Footer></Footer>
    </>
  );
};

export default MainBody;
