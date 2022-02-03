import { useState } from "react";

import MenuItemComponent from "../MenuItem/MenuItem.component";

import "./Directory.styles.scss";

const DirectoryComponent = () => {
  const [section, setSection] = useState([
    {
      title: "کلاه",
      imageUrl: "https://i.ibb.co/cvpntL1/hats.png",
      id: 1,
      linkUrl: "shop/hats",
    },
    {
      title: "ژاکت",
      imageUrl: "https://i.ibb.co/px2tCc3/jackets.png",
      id: 2,
      linkUrl: "shop/jackets",
    },
    {
      title: "کفش ورزشی",
      imageUrl: "https://i.ibb.co/0jqHpnp/sneakers.png",
      id: 3,
      linkUrl: "shop/sneakers",
    },
    {
      title: "خانوم ها",
      imageUrl: "https://i.ibb.co/GCCdy8t/womens.png",
      size: "large",
      id: 4,
      linkUrl: "shop/womens",
    },
    {
      title: "آقایان",
      imageUrl: "https://i.ibb.co/R70vBrQ/men.png",
      size: "large",
      id: 5,
      linkUrl: "shop/mens",
    },
  ]);
  return (
    <div className="directory-menu">
      {section.map((item) => {
        return <MenuItemComponent key={item.id} items={item} />;
      })}
    </div>
  );
};

export default DirectoryComponent;
