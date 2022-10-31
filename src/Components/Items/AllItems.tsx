import ItemList from "./ItemList";


interface IAllItems {
    files: Array<any>;
}

const AllItems: React.FC<IAllItems> = (props: any) => {

    return (
        <><div>
            <h3 className="ps-3">Your highlighted files:</h3>
            <ItemList items={props.files} />
        </div>
        </>
    );
}

export default AllItems;