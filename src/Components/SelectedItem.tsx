import { db } from "../firebase"

interface ISelectedItem {
    image: any;
    title: string;
    time: string;
    comment: string;
    type: string;
    id: number;
}

const SelectedItem: React.FC<ISelectedItem> = (props: any) => {

    function deleteHandler() {
        fetch(
            `https://whizzy-software-default-rtdb.firebaseio.com/files/${props.id}.json`,
            {
                method: "DELETE",
                body: JSON.stringify(props),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        );
        console.log(props.id)
    }

    return (
        <div className="selectedItem rounded-3">
            <div className="container-fluid px-0 " id={props.id}>
                <img className="w-100 " src={props.image} alt={props.comment} />
            </div>
            <div className="bg-light d-flex p-3">
                <div className="d-flex">
                    <h5 className="pe-5 border-end border-3 border-dark">{props.title}</h5>
                    <h5 className="px-5">{props.time}</h5>
                </div>
            </div>
            <div className="bg-light border-bottom-0 d-flex p-3">
                <h4 className="pe-5"><a href="#" className="text-dark">Edit</a></h4>
                <h4><a href="#" className="text-dark" onClick={deleteHandler}>Delete</a></h4>
            </div>
        </div>
    );
}

export default SelectedItem;