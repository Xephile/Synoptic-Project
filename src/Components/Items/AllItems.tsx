import { useEffect } from "react";
import ItemList from "./ItemList";

interface IAllItems {
  files: Array<any>;
  filter: string;
  searchTerm: any;
  filterTerm: any;
  availablePlaylists: any;
}

const AllItems: React.FC<IAllItems> = (props: any) => {
  // Display a list of all the items
  return (
    <>
      <div>
        <h3 className="ps-3">{props.filter}:</h3>
        <ItemList
          items={props.files}
          searchTerm={props.searchTerm}
          filterTerm={props.filterTerm}
          availablePlaylists={props.availablePlaylists}
        />
      </div>
    </>
  );
};

export default AllItems;
