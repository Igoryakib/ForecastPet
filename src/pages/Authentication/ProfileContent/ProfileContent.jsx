import React from "react";
import styles from './ProfileContent.module.scss';
import Sidebar from "../../../components/Authentication/sidebar/Sidebar";

const ProfileContent = () => {
    return(
        <article className={styles.profileContent}>
            <h3 className={styles.profileTitle}>Гарного дня, Антон</h3>
            <div className={styles.wrapperProfileContent}>
                <div></div>
                <Sidebar type="login"/>
            </div>
        </article>
    );
};


export default ProfileContent;