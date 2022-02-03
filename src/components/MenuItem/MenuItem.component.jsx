import "./MenuItem.styles.scss";

const MenuItemComponent = ({ items }) => {
  return (
    <div className={`${items.size} menu-item`}>
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
