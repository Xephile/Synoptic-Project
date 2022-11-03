import { useRef } from "react";

const EditForm = (props: any) => {
  const titleInputRef = useRef<HTMLInputElement>(null);
  const timeInputRef = useRef<HTMLInputElement>(null);
  const typeInputRef = useRef<HTMLInputElement>(null);
  const tagsInputRef = useRef<HTMLInputElement>(null);

  function submitFormHandler(event: any) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current;
    const enteredTime = timeInputRef.current;
    const enteredType = typeInputRef.current;
    const enteredTags = tagsInputRef.current;

    const updatedFile = {
      name: enteredTitle?.value,
      time: enteredTime?.value,
      type: enteredType?.value,
      tags: enteredTags?.value,
    };
    props.submitHandler(updatedFile);
  }

  function cancelHandler() {}

  return (
    <form className="bg-light p-3" onSubmit={submitFormHandler}>
      <div className="w-75 d-flex mb-2">
        <label htmlFor="tags" className="my-auto pe-2">
          Tags:
        </label>
        <input
          type="text"
          id="tags"
          ref={tagsInputRef}
          className="me-2 w-50 form-control"
          placeholder={props.tags}
        />
      </div>
      <div className="w-75 d-flex">
        <label htmlFor="title" className="my-auto pe-2">
          Title:
        </label>
        <input
          type="text"
          id="title"
          ref={titleInputRef}
          className="me-2 w-50 form-control"
          placeholder={props.title}
        />

        <label htmlFor="time" className="my-auto pe-2">
          Time:
        </label>
        <input
          type="text"
          id="time"
          ref={timeInputRef}
          className="me-2 w-25 form-control"
          placeholder={props.time}
        />

        <label htmlFor="type" className="my-auto pe-2">
          Type:
        </label>
        <input
          type="text"
          id="type"
          ref={typeInputRef}
          className="me-2 w-25 form-control"
          placeholder={props.type}
        />

        <button type="submit" className="btn btn-primary me-2">
          Submit
        </button>
        <button
          type="button"
          className="btn btn-secondary"
          onClick={cancelHandler}
        >
          Cancel
        </button>
      </div>
    </form>
  );
};

export default EditForm;
