import CollectionItem from "../Collection-item/CollectionItem";

import "./Collection-preview.scss";

const CollectionPreview = ({ collection }) => {
  return (
    <div className="collection-preview">
      <h1 className="title">{collection.title.toUpperCase()}</h1>
      <div className="preview">
        {collection.items
          .filter((item, index) => index < 4)
          .map((item) => {
            return <CollectionItem key={item.id} collectionItem={item} />;
          })}
      </div>
    </div>
  );
};

export default CollectionPreview;
