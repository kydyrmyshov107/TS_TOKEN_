import scss from "./Header.module.scss";

const Header = () => {
  return (
    <header className={scss.Header}>
      <div>
        <div className={scss.content}>
          <p>test</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
