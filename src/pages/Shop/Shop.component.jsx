import { useState } from "react";

import CollectionPreview from "../../components/Collection-preview/Collection-preview";

import SHOP_DATA from "./shop.data";

const ShopComponent = () => {
  const [collections, setCollections] = useState(SHOP_DATA);
  return (
    <div>
      {collections.map((item) => {
        return <CollectionPreview key={item.id} collection={item} />;
      })}
    </div>
  );
};

export default ShopComponent;
