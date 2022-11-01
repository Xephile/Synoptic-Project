import Item from "../Items/Item";

interface ISelectedPlaylist {
    playlist: Array<any>
}

const SelectedPlaylist: React.FC<ISelectedPlaylist> = (props: any) => {
    return (
        (props.playlist.map((item: any) => (
            <li className="col-4 mb-3 playlistItem" key={item.id}>
                <Item image={item.image.path} title={item.name} time={item.time} comment={item.comment} type={item.type} id={item.id} />
            </li>)))
    )
}

export default SelectedPlaylist;