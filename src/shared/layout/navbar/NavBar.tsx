import { FC } from "react";
import { MenuBuilder } from "../menuBuider/MenuBuilder";
import styles from "./style.module.scss";

export const Navbar: FC = () => {
  //   const iconSize = { fontSize: 20 };
  const menuList = [
    {
      label: "Accueil",
      key: "/",
      //   icon: <GoHomeFill style={iconSize} />,
    },
    {
      label: "A propos",
      key: "/about",

      //   icon: <FaUser style={iconSize} />,
      //   children: [
      //     {
      //       label: "A propos",
      //       key: "crm/contacts-client",
      //     },
      //     {
      //       label: "Clients",
      //       key: "clients",
      //     },
      //     {
      //       label: "Dossiers",
      //       key: "crm/dossiers",
      //     },
      //     {
      //       label: "Transactions",
      //       key: "crm/transactions",
      //     },
      //   ],
    },
  ];
  return (
    <div className={styles.sidebar__container}>
      <MenuBuilder menuList={menuList} isActive mode="horizontal" />
    </div>
  );
};
