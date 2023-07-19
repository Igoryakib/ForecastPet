import React from "react";
import styles from './Header.module.scss';
import Avatar from '../../static/avatar_26.svg'
import Ellipse from '../../static/ellipse.svg';

const Header = () => {
    return (
      <header className={styles.header}>
        <div className={styles.profile}>
          <div className={styles.profileAvatar}>
            <img className={styles.avatar} src={Avatar} alt="avatar" />
            <img className={styles.ellipse} src={Ellipse} alt="ellipse" />
          </div>
          <div className={styles.profileText}>
            <h3 className={styles.subtitle}>Привіт Антон</h3>
            <h2 className={styles.title}>Понеділок, 7 липня, 2023</h2>
          </div>
        </div>
        <div></div>
      </header>
    );
};

export default Header;