import Item from "./Item";

interface IItem {
  items: Array<any>;
}

const ItemList: React.FC<IItem> = (props: any) => {
  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap">
        {props.items.map((item: any) => (
          <li className="p-4 w-25">
            <Item image={item.image} title={item.title} time={item.time} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
