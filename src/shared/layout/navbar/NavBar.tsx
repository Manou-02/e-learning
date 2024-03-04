import { FC } from "react";
import { MenuBuilder } from "../menuBuider/MenuBuilder";
import styles from "./style.module.scss";
import { RiMenu2Fill } from "react-icons/ri";

export const Navbar: FC = () => {
  //   const iconSize = { fontSize: 20 };
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
  return (
    <div className={styles.sidebar__container}>
      <div className={styles.sidebar__content}>
        <div className={styles.sidebar__icon_container}>
          <RiMenu2Fill className={styles.sidebar__icon} />
          <div className={styles.sidebar__title}>E-learning</div>
          <button className={styles.sidebar__button}>Demo</button>
        </div>
        <div className={styles.sidebar__navbar}>
          <MenuBuilder menuList={menuList} isActive mode="horizontal" />
        </div>
      </div>
    </div>
  );
};
