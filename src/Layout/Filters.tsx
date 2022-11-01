interface IFilters {
  files: Array<any>;
}

const Filters: React.FC<IFilters> = (props: any) => {

  var allTags = props.files.map((file: any) => file.tags);
  var availableTags = allTags.filter((v: any, i: any, a: any) => a.indexOf(v) === i);

  // document.addEventListener("change", (e: any) => {
  //   if (e.target.checked) {
  //     selectedTags.push(e.target.id)
  //     setTags(selectedTags)
  //     console.log(selectedTags)
  //   } else if (!e.target.checked) {
  //     setTags(selectedTags)
  //   }
  // })

  return (
    <section>
      <div className="w-75">
        <h3 className="border-bottom border-dark border-3 pb-3 mb-3 mt-3">
          Filters:
        </h3>
        <ul className="list-group p-2 list-unstyled">
          {availableTags.map((tag: any) => (
            <li>
              <input type="checkbox" id={tag} className="form-check-input filterCheck" key={tag} />
              <label htmlFor={tag} className="px-2">
                <h5>{tag}</h5>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section >
  );
};

export default Filters;
