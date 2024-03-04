import { FC } from "react";
import { MenuBuilder } from "../menuBuider/MenuBuilder";
import styles from "./style.module.scss";
import { RiMenu2Fill } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const menuList = [
  {
    label: "Accueil",
    key: "/",
  },
  {
    label: "Catalogue des formations",
    key: "/catalogue",
  },

  {
    label: "Espace apprenants",
    key: "/learn-space",
  },
];

export const Navbar: FC = () => {
  //   const iconSize = { fontSize: 20 };

  const navigate = useNavigate();

  const handleLogin = () => {
    navigate("/login");
  };

  return (
    <div className={styles.sidebar__container}>
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__icon_container}>
          <RiMenu2Fill className={styles.sidebar__icon} />
          <div className={styles.sidebar__title}>E-learning</div>
          <button className={styles.sidebar__button} onClick={handleLogin}>
            Se connecter
          </button>
        </div>
        <div className={styles.sidebar__navbar}>
          <MenuBuilder menuList={menuList} isActive mode="horizontal" />
        </div>
      </div>
    </div>
  );
};
