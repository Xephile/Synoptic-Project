import { useRef } from "react";

const EditForm = (props: any) => {
    const titleInputRef = useRef<HTMLInputElement>(null);
    const timeInputRef = useRef<HTMLInputElement>(null);

    function submitFormHandler(event: any) {
        event.preventDefault();

        const enteredTitle = titleInputRef.current;
        const enteredTime = timeInputRef.current;

        const updatedFile = {
            name: enteredTitle?.value,
            time: enteredTime?.value
        }
        console.log(updatedFile);
        props.submitHandler(updatedFile);
    }


    return (<form className="bg-light p-3" onSubmit={submitFormHandler}>
        <div className="w-50 d-flex">

            <label htmlFor="title" className="my-auto pe-2">Title:</label>
            <input type="text" id="title" ref={titleInputRef} className="me-2 w-50 form-control" placeholder={props.title} />

            <label htmlFor="title" className="my-auto pe-2">Time:</label>
            <input type="text" id="title" ref={timeInputRef} className="me-2 w-25 form-control" placeholder={props.time} />

            <button type="submit" className="btn btn-dark">Submit</button>
        </div>
    </form>)
}

export default EditForm;