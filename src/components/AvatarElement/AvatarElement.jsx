import React from "react";
import styles from './AvatarElement.module.scss';
import classNames from "classnames";

const AvatarElement = ({avatar, ellipse, change}) => {
    return(
      change ?
        <div className={classNames(styles.profileAvatar, styles.widthAvatar)}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
      </div> :         
      <div className={styles.profileAvatar}>
        <img className={styles.avatar} src={avatar} alt="avatar" />
        <img className={styles.ellipse} src={ellipse} alt="ellipse" />
      </div>
    );
};

export default AvatarElement;