import "./Collection-preview.scss";

const CollectionPreview = ({ collection }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="preview">
        {collection.items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <div key={item.id}>{item.name}</div>;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
