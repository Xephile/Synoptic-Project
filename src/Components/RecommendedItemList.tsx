import RecommendedItem from "./Item";

interface IItem {
  items: Array<any>;
}

const RecommendedItemList: React.FC<IItem> = (props: any) => {
  return (
    <div>
      <ul className="list-unstyled d-flex">
        {props.items.map((item: any) => (
          <li className="p-4">
            <RecommendedItem
              image={item.image}
              title={item.title}
              time={item.time}
            />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default RecommendedItemList;
