import MediaTile from "../../UI/MediaTile";


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
      <div className="px-0" id={props.id}>
        <img className="w-100 rounded-1 crop" src={props.image} alt={props.comment} />
      </div>
      <div className="p-4 d-flex justify-content-between mx-3">

        <h6 className="">{props.title}</h6>
        <h6 className="">{props.time}</h6>

      </div>
    </MediaTile>
  );
};

export default Item;
