import React from "react";
import styles from "./ProfileContent.module.scss";
import Sidebar from "../../../components/Authentication/sidebar/Sidebar";

const ProfileContent = () => {
  return (
    <article className={styles.profileContent}>
      <div className={`grid ${styles.wrapperProfileContent}`}>
        <div className={styles.profileSettings}>
          <h3 className={styles.profileTitle}>Гарного дня, Антон</h3>
        </div>
        <Sidebar type="profile" />
      </div>
    </article>
  );
};

export default ProfileContent;
