import MediaTile from "../UI/MediaTile";

interface IItem {
  image: any;
  title: string;
  time: string;
  comment: string;
  type: string;
  id: number;
}

const Item: React.FC<IItem> = (props: any) => {
  return (
    <MediaTile>
      <div className="container-fluid  px-0 rounded" id={props.id}>
        <img className="w-100 rounded-1" src={props.image} alt={props.comment} />
      </div>
      <div className="p-3 d-flex mx-3">
        <div className="d-flex">
          <h5 className="pe-5 border-end border-3 border-dark">{props.title}</h5>
          <h5 className="px-5">{props.time}</h5>
        </div>
      </div>
    </MediaTile>
  );
};

export default Item;
