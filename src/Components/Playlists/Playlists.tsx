import { useState } from "react";
import Item from "../Items/Item";
import ItemList from "../Items/ItemList";

interface IPlayLists {
  playlists: Array<any>;
}

const Playlists: React.FC<IPlayLists> = (props: any) => {
  const [selectedPlaylist, setSelectedPlaylist] = useState<any[]>([]);
  var filteredPlaylist: any[] = [];

  function onOpen(item: any) {
    setSelectedPlaylist(item);
  }

  for (let i = 1; i < selectedPlaylist.length; i++) {
    filteredPlaylist.push(selectedPlaylist[i]);
  }

  return (
    <>
      {/* If a playlist is not selected, show all playlists, if it is, show the files inside the playlist */}
      {selectedPlaylist.length === 0 ? (
        <h3 className="ps-3">Your Playlists:</h3>
      ) : (
        <h3 className="ps-3">{selectedPlaylist[0].playlistName}</h3>
      )}
      <ul className="list-unstyled row">
        {selectedPlaylist.length === 0 ? (
          props.playlists.map((item: any) => (
            <li className="col-4 mb-3" key={item[1].id}>
              <button className="text-black text-decoration-none border-0 bg-transparent"
                id={item.id}
                onClick={() => onOpen(item)}>

                <Item
                  image={item[1].image.path}
                  title={item[0].playlistName}
                  time={""}
                  comment={item[1].comment}
                  type={""}
                  id={item[1].id}
                  tags={""}
                />
              </button>
            </li>
          ))
        ) : (
          <ItemList
            items={filteredPlaylist}
            searchTerm=""
            filterTerm=""
            availablePlaylists={undefined}
          />
        )}
      </ul>
    </>
  );
};

export default Playlists;
