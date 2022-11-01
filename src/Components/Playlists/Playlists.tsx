import { useState } from "react";
import { Link } from "react-router-dom";
import Item from "../Items/Item";
import ItemList from "../Items/ItemList";

interface IPlayLists {
    playlists: Array<any>
}

const Playlists: React.FC<IPlayLists> = (props: any) => {
    const [selectedPlaylist, setSelectedPlaylist] = useState<any[]>([])
    var filteredPlaylist: any[] = []

    function onOpen(item: any) {
        setSelectedPlaylist(item)
    }

    for (let i = 1; i < 3; i++) {
        filteredPlaylist.push(selectedPlaylist[i])
    }

    return (<>
        {selectedPlaylist.length === 0 ? <h3 className="ps-3">Your Playlists:</h3> : <h3 className="ps-3">{selectedPlaylist[0].playlistName}</h3>}
        <ul className="list-unstyled row">
            {selectedPlaylist.length === 0 ? (props.playlists.map((item: any) => (
                <li className="col-4 mb-3 playlistItem" key={item.id}>

                    <Link className="text-black text-decoration-none" id={item.id} to={`/playlists`} onClick={() => onOpen(item)}>
                        <Item image={item[1].image.path} title={item[0].playlistName} time={""} comment={item[1].comment} type={item[1].type} id={item[1].id} />
                    </Link>
                </li>

            ))) : <ItemList items={filteredPlaylist} />}

        </ul>
    </>
    );
}

export default Playlists;