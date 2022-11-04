import { useRef } from "react";

const AddFileForm = (props: any) => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);
    const typeInputRef = useRef<HTMLInputElement>(null);
    const tagsInputRef = useRef<HTMLInputElement>(null);
    const imageUrlInputRef = useRef<HTMLInputElement>(null);
    const imageNameInputRef = useRef<HTMLInputElement>(null);

    function submitFormHandler(event: any) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current;
        const enteredTime = timeInputRef.current;
        const enteredType = typeInputRef.current;
        const enteredTags = tagsInputRef.current;
        const enteredImageUrl = imageUrlInputRef.current;
        const enteredImageName = imageNameInputRef.current;

        const image = {
            path: enteredImageUrl?.value,
            name: enteredImageName?.value
        }

        const newFile = {
            name: enteredTitle?.value,
            time: enteredTime?.value,
            type: enteredType?.value,
            tags: enteredTags?.value,
            image: image
        };
        props.submitFormHandler(newFile);
    }

    return (<div className="selectedItem">
        <div className="bg-light rounded w-50 p-3">
            <form onSubmit={submitFormHandler}>
                <div className="d-flex flex-row m-2">
                    <label htmlFor="title" className="my-auto pe-2">Title</label>
                    <input type="text" id="title" placeholder="title" className="form-control" ref={titleInputRef} />
                </div>
                <div className="d-flex flex-row m-2">
                    <label htmlFor="time" className="my-auto pe-2">Time</label>
                    <input type="text" id="time" placeholder="time" className="form-control" ref={timeInputRef} />
                </div>
                <div className="d-flex flex-row m-2">
                    <label htmlFor="type" className="my-auto pe-2">Type</label>
                    <input type="text" id="type" placeholder="type" className="form-control " ref={typeInputRef} />
                </div>
                <div className="d-flex flex-row m-2">
                    <label htmlFor="tags" className="my-auto pe-2">Tags</label>
                    <input type="text" id="tags" placeholder="tags" className="form-control " ref={tagsInputRef} />
                </div>
                <div className="d-flex flex-row m-2">
                    <label htmlFor="image" className="my-auto pe-2">Image URL</label>
                    <input type="text" id="image" placeholder="image url" className="form-control " ref={imageUrlInputRef} />
                </div>
                <div className="d-flex flex-row m-2">
                    <label htmlFor="image-name" className="my-auto pe-2">Image Name</label>
                    <input type="text" id="image-name" placeholder="image name" className="form-control " ref={imageNameInputRef} />
                </div>
                <button className="btn btn-primary my-3" type="submit"><b>Submit</b></button>
            </form>
        </div>
    </div>)
}

export default AddFileForm