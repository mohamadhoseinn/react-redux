import { useNavigate } from "react-router-dom";

import "./MenuItem.styles.scss";

const MenuItemComponent = ({ items }) => {
  const navigate = useNavigate();
  return (
    <div
      className={`${items.size} menu-item`}
      onClick={() => navigate(`${items.linkUrl}`)}
    >
      <div
        className="background-image"
        style={{
          backgroundImage: `url(${items.imageUrl}`,
        }}
      />
      <div className="content">
        <h1 className="title">{items.title.toUpperCase()}</h1>
        <span className="subtitle">اکنون خرید کنید</span>
      </div>
    </div>
  );
};

export default MenuItemComponent;
