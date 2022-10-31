import { useEffect, useState } from "react";
import HighlitedItemList from "./HighlightedItemList";
import ItemList from "./ItemList";


interface IAllItems {
    files: Array<any>;
}

const AllItems: React.FC<IAllItems> = (props: any) => {

    let highlightedFiles = props.files.slice(0, 3);
    let files = props.files.slice(3);


    return (
        <><div>
            <h3 className="ps-3">Your highlighted files:</h3>
            <HighlitedItemList items={highlightedFiles} />
        </div><div>
                <ItemList items={files} />
            </div></>
    );
}

export default AllItems;