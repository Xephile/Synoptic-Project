import Item from "./Item";

interface IItem {
  items: Array<any>;
}

const ItemList: React.FC<IItem> = (props: any) => {
  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap">
        {props.items.map((item: any) => (
          <li className="p-3 w-25">
            <Item image={item.image.path} title={item.name} time={item.time} comment={item.comment} type={item.type} id={item.id} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ItemList;
