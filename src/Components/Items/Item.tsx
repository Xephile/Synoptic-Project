import MediaTile from "../../UI/MediaTile";

interface IItem {
  image: any;
  title: string;
  time: string;
  comment: string;
  type: string;
  id: number;
  tags: string;
}

const Item: React.FC<IItem> = (props: any) => {
  return (
    <MediaTile>
      <div className="w-100" id={props.id}>
        <img
          className="w-100 rounded-1 crop"
          src={props.image}
          alt={props.comment}
        />
        <div className="p-1 bg-secondary bg-gradient">
          <h6 className="text-white">{props.tags}</h6>
        </div>
      </div>
      <div className="p-4 d-flex justify-content-between mx-3">
        <h6 className="w-50">{props.title}</h6>
        <h6>{props.time}</h6>
        <h6>{props.type}</h6>
      </div>
    </MediaTile>
  );
};

export default Item;
