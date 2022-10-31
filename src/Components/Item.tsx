import Card from "../UI/Card";

interface IItem {
  image: any;
  title: string;
  time: string;
}

const Item: React.FC<IItem> = (props: any) => {
  return (
    <Card>
      <div className="container-fluid px-0">
        <img className="w-100 rounded-2" src={props.image} alt="" />
      </div>
      <div className="p-3 d-flex justify-content-between mx-3">
        <h3>{props.title}</h3>
        <h3>{props.time}</h3>
      </div>
    </Card>
  );
};

export default Item;
