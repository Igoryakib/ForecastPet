import React from "react";
import styles from "./ProfileContent.module.scss";
import Sidebar from "../../../components/Authentication/sidebar/Sidebar";
import AvatarElement from "../../../components/AvatarElement/AvatarElement";
import Avatar from "../../../static/avatars/avatar_26.svg";
import Ellipse from "../../../static/ellipse.svg";
import WindowCloseBtn from "../../../components/small components/WindowCloseBtn/WindowCloseBtn";
import { Outlet, useNavigate } from "react-router-dom";
import WindowOverlay from "../../../components/small components/WindowOverlay/WindowOverlay";
import routes from "../../../utils/routes";

const ProfileContent = () => {
  const navigate = useNavigate();
  const OnclickBtn = () => {
    navigate(`${routes.authPage}/${routes.profileContent}/${routes.changeAvatar}`)
  };
  return (
    <>
    <Outlet />
    <article className={styles.profileContent}>
      <div className={`grid ${styles.wrapperProfileContent}`}>
        <div className={styles.profileSettings}>
          <h3 className={styles.profileTitle}>Гарного дня, Антон</h3>
          <div className={styles.avatarContent}>
          <AvatarElement avatar={Avatar} ellipse={Ellipse}/>
          <div className={styles.avatarContentWrapperText}>
            <h3 className={styles.avatarContentTitle}>Аватар</h3>
            <button onClick={OnclickBtn} className={styles.avatarContentChangeBtn} type="button">Змінити</button>
          </div>
          </div>
          <div className={styles.textInfo}>
            <label className={styles.nicknameField}>Nickname<input className={styles.nicknameFieldText} type="text" placeholder="Антон"/></label>
            <label className={styles.nicknameField}>Password<input className={styles.nicknameFieldText} type="password" placeholder="*******"/></label>
          </div>
          <div className={styles.wrapperTextInfo}>
              <h4 className={styles.textInfoEmail}>Email</h4>
              <span className={styles.textInfoEmailContent}>solyanicks@gmail.com</span>
            </div>
        </div>
        <Sidebar type="profile" />
      </div>
    </article>
    </>
  );
};

export default ProfileContent;
