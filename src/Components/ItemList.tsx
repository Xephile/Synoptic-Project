import { useState } from "react";
import Backdrop from "./Backdrop";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

interface IItem {
  items: Array<any>;
}

const ItemList: React.FC<IItem> = (props: any) => {
  const [itemIsSelected, setItemSelected] = useState(false);
  let [selectedItem, setSelectedItem] = useState<any>([])

  function openItem(id: number) {
    setItemSelected(true);
    setSelectedItem(props.items.find((element: any) => element.id == id));
  }

  function closeItem() {
    setItemSelected(false);
  }

  return (
    <div>
      <ul className="list-unstyled d-flex flex-wrap">
        {props.items.map((item: any) => (
          <li className="p-3 w-25" key={item.id}>
            <button onClick={() => openItem(item.id)} className="border-0 bg-light">
              <Item image={item.image.path} title={item.name} time={item.time} comment={item.comment} type={item.type} id={item.id} />
            </button>
          </li>
        ))}
      </ul>
      {
        itemIsSelected && (
          <SelectedItem image={selectedItem.image.path} title={selectedItem.name} time={selectedItem.time} comment={selectedItem.comment} type={selectedItem.type} id={selectedItem.id} />
        )
      }
      {itemIsSelected && <Backdrop onCancel={closeItem} />}
    </div>
  );
};

export default ItemList;
