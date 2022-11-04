import { useEffect, useState } from "react";

const Filters = (props: any) => {
  const [selectedFilters, setSelectedFilters] = useState<any[]>([]);
  // Get all of the tags available
  var allTags = props.files.map((file: any) => file.tags);
  var availableTags = allTags.filter(
    (v: any, i: any, a: any) => a.indexOf(v) === i
  );


  useEffect(() => {
    props.onChange(selectedFilters);
    // eslint-disable-next-line
  }, [selectedFilters]);

  //Display the tags
  return (
    <section>
      <div className="w-75">
        <h3 className="border-bottom border-dark border-3 pb-3 mb-3 mt-3">
          Filters:
        </h3>
        <ul className="list-group p-2 list-unstyled">
          {availableTags.map((tag: any) => (
            <li key={tag}>
              <input
                type="checkbox"
                id={tag}
                className="form-check-input"
                onChange={(event) => {
                  if (selectedFilters.includes(event.target.id)) {
                    setSelectedFilters((current) =>
                      current.filter((name: any) => name !== event.target.id)
                    );
                  } else if (
                    selectedFilters.includes(event.target.id) &&
                    selectedFilters.length === 1
                  ) {
                    setSelectedFilters([]);
                  } else {
                    setSelectedFilters((selectedFilters) => [
                      ...selectedFilters,
                      event.target.id,
                    ]);
                  }
                }}
              />
              <label htmlFor={tag} className="px-2">
                <h5>{tag}</h5>
              </label>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Filters;
