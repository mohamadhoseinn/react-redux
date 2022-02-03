import "./MenuItem.styles.scss";

const MenuItemComponent = ({ items }) => {
  return (
    <div
      style={{
        backgroundImage: `url(${items.imageUrl}`,
      }}
      className={`${items.size} menu-item`}
    >
      <div className="content">
        <h1 className="title">{items.title}</h1>
        <span className="subtitle">اکنون خرید کنید</span>
      </div>
    </div>
  );
};

export default MenuItemComponent;
