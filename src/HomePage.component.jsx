import "./HomePage.styles.scss";

const HomePageComponent = () => {
  return (
    <div className="homepage">
      <div className="directory-menu">
        <div className="menu-item">
          <div className="content">
            <h1 className="title">کلاه</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">ژاکت</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">کفش ورزشی</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">آقایان</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
        <div className="menu-item">
          <div className="content">
            <h1 className="title">خانوم ها</h1>
            <span className="subtitle">اکنون خرید کنید</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePageComponent;
