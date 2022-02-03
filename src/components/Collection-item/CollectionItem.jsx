import "./CollectionItem.scss";

const CollectionItem = ({ collectionItem }) => {
  return (
    <div className="collection-item">
      <div
        className="image"
        style={{
          backgroundImage: `url(${collectionItem.imageUrl}`,
        }}
      />
      <div className="collection-footer">
        <span className="name">{collectionItem.name}</span>
        <span className="price">{collectionItem.price}</span>
      </div>
    </div>
  );
};

export default CollectionItem;
