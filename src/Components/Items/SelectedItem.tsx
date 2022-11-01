import { useState } from "react";
import EditForm from "../Forms/EditForm";

interface ISelectedItem {
    image: any;
    title: string;
    time: string;
    comment: string;
    type: string;
    id: number;
}

const SelectedItem: React.FC<ISelectedItem> = (props: any) => {
    const [formIsLoaded, setFormLoaded] = useState(false);

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
        ).then(() => {
            window.location.reload()
        });
    }

    function editHandler() {
        setFormLoaded(true);
    }

    function submitHandler(updatedFile: any) {
        updatedFile.name = updatedFile.name === "" ? props.title : updatedFile.name
        updatedFile.time = updatedFile.time === "" ? props.time : updatedFile.time
        fetch(
            `https://whizzy-software-default-rtdb.firebaseio.com/files/${props.id}.json`,
            {
                method: "PATCH",
                body: JSON.stringify(updatedFile),
                headers: {
                    "Content-Type": "application/json",
                },
            }
        ).then(() => {
            window.location.reload()
        });
    }

    return (
        <div className="selectedItem">
            <div id={props.id}>
                <img className="w-100 " src={props.image} alt={props.comment} />
            </div>

            {formIsLoaded ? (
                <EditForm submitHandler={submitHandler} title={props.title} time={props.time} />) : <div className="bg-light d-flex p-3">
                <div className="d-flex">
                    <h5 className="pe-5 border-end border-3 border-dark">{props.title}</h5>
                    <h5 className="px-5">{props.time}</h5>
                </div>
            </div>}

            <div className="bg-light d-flex p-3">
                <h4 className="pe-5"><a href="#/" className="text-dark" onClick={editHandler}>Edit</a></h4>
                <h4><a className="text-dark pe-5" href="#/" onClick={deleteHandler}>Delete</a></h4>
                <h4><a className="text-dark pe-auto" href="#/">Add To Playlist</a></h4>
            </div>
        </div>
    );
}

export default SelectedItem;