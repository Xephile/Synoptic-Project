import { useState } from "react";
import Backdrop from "../Backdrop";
import Item from "./Item";
import SelectedItem from "./SelectedItem";

interface IItem {
  items: Array<any>;
  searchTerm: any;
  filterTerm: any;
  availablePlaylists: any;
}

const ItemList: React.FC<IItem> = (props: any) => {
  const [itemIsSelected, setItemSelected] = useState(false);
  let [selectedItem, setSelectedItem] = useState<any>([]);

  function openItem(id: number) {
    setItemSelected(true);
    setSelectedItem(props.items.find((element: any) => element.id === id));
  }

  function closeItem() {
    setItemSelected(false);
  }

  return (
    <div>
      {/* Map through items and filter if user searches */}
      <ul className="list-unstyled row">
        {props.items
          // eslint-disable-next-line
          .filter((val: any) => {
            //Return all values if either terms are empty
            if (props.searchTerm === "" && props.filterTerm.length === 0) {
              return val;
            }
            //return values that match filter term with empty search term
            else if (
              props.filterTerm.includes(val.tags) &&
              val.name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ) {
              return val;
            }
            //return values that match both search term and filter term
            else if (
              props.searchTerm !== "" &&
              val.name.toLowerCase().includes(props.searchTerm.toLowerCase())
            ) {
              return val;
            }
          })
          .map((item: any) => (
            <li className="pe-4 py-2 col-4" key={item.id}>
              <button
                onClick={() => openItem(item.id)}
                className="border-0 bg-light"
              >
                <Item
                  image={item.image.path}
                  title={item.name}
                  time={item.time}
                  comment={item.comment}
                  type={item.type}
                  id={item.id}
                  tags={item.tags}
                />
              </button>
            </li>
          ))}
      </ul>
      {/* If a user clicks an item, display that item */}
      {itemIsSelected && (
        <SelectedItem
          image={selectedItem.image}
          title={selectedItem.name}
          time={selectedItem.time}
          comment={selectedItem.comment}
          type={selectedItem.type}
          id={selectedItem.id}
          tags={selectedItem.tags}
          availablePlaylists={props.availablePlaylists}
        />
      )}
      {itemIsSelected && <Backdrop onCancel={closeItem} />}
    </div>
  );
};

export default ItemList;
