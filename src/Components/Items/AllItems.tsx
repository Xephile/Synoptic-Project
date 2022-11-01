import ItemList from "./ItemList";


interface IAllItems {
    files: Array<any>;
    filter: string;
}

const AllItems: React.FC<IAllItems> = (props: any) => {

    return (
        <><div>
            <h3 className="ps-3">{props.filter}:</h3>
            <ItemList items={props.files} />
        </div>
        </>
    );
}

export default AllItems;