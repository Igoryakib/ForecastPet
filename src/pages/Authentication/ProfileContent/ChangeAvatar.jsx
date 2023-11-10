import React from "react";
import styles from '../AuthPage.module.scss';
import WindowCloseBtn from "../../../components/small components/WindowCloseBtn/WindowCloseBtn";
import WindowOverlay from "../../../components/small components/WindowOverlay/WindowOverlay";
import routes from "../../../utils/routes";
import Ellipse from "../../../static/ellipse.svg";
import AvatarElement from "../../../components/AvatarElement/AvatarElement";
// avatars
import Avatar1 from '../../../static/avatars/avatar_1.svg'
import Avatar2 from '../../../static/avatars/avatar_2.svg'
import Avatar3 from '../../../static/avatars/avatar_3.svg'
import Avatar4 from '../../../static/avatars/avatar_4.svg'
import Avatar5 from '../../../static/avatars/avatar_5.svg'
import Avatar6 from '../../../static/avatars/avatar_6.svg'
import Avatar7 from '../../../static/avatars/avatar_7.svg'
import Avatar8 from '../../../static/avatars/avatar_8.svg'
import Avatar9 from '../../../static/avatars/avatar_8.svg'
import Avatar10 from '../../../static/avatars/avatar_10.svg'
import Avatar11 from '../../../static/avatars/avatar_11.svg'
import Avatar12 from '../../../static/avatars/avatar_12.svg'
import Avatar13 from '../../../static/avatars/avatar_13.svg'
import Avatar14 from '../../../static/avatars/avatar_14.svg'
import Avatar15 from '../../../static/avatars/avatar_15.svg'
import Avatar16 from '../../../static/avatars/avatar_16.svg'
import Avatar17 from '../../../static/avatars/avatar_17.svg'
import Avatar18 from '../../../static/avatars/avatar_18.svg'
import Avatar19 from '../../../static/avatars/avatar_19.svg'
import Avatar20 from '../../../static/avatars/avatar_20.svg'
import Avatar21 from '../../../static/avatars/avatar_21.svg'
import Avatar22 from '../../../static/avatars/avatar_22.svg'
import Avatar23 from '../../../static/avatars/avatar_23.svg'
import Avatar24 from '../../../static/avatars/avatar_24.svg'
import Avatar25 from '../../../static/avatars/avatar_25.svg'
import Avatar26 from '../../../static/avatars/avatar_26.svg'
import Avatar27 from '../../../static/avatars/avatar_27.svg'
import Avatar28 from '../../../static/avatars/avatar_28.svg'
import Avatar29 from '../../../static/avatars/avatar_29.svg'
import Avatar30 from '../../../static/avatars/avatar_30.svg'


const ChangeAvatar = () => {
    const avatarsArray = [{
        url: Avatar1,
        id: 1
    },
    {
        url: Avatar2,
        id: 2
    },
    {
        url: Avatar3,
        id: 3
    },
    {
        url: Avatar4,
        id: 4
    },
    {
        url: Avatar5,
        id: 5
    },
    {
        url: Avatar6,
        id: 6
    },
    {
        url: Avatar7,
        id: 7
    },
    {
        url: Avatar8,
        id: 8
    },
    {
        url: Avatar9,
        id: 9
    },
    {
        url: Avatar10,
        id: 10
    },
    {
        url: Avatar11,
        id: 11
    },
    {
        url: Avatar12,
        id: 12
    },
    {
        url: Avatar13,
        id: 13
    },
    {
        url: Avatar14,
        id: 14
    },
    {
        url: Avatar15,
        id: 15
    },
    {
        url: Avatar16,
        id: 16
    },
    {
        url: Avatar17,
        id: 17
    },
    {
        url: Avatar18,
        id: 18
    },
    {
        url: Avatar19,
        id: 19
    },
    {
        url: Avatar20,
        id: 20
    },
    {
        url: Avatar21,
        id: 21
    },
    {
        url: Avatar22,
        id: 22
    },
    {
        url: Avatar23,
        id: 23
    },
    {
        url: Avatar24,
        id: 24
    },
    {
        url: Avatar25,
        id: 25
    },
    {
        url: Avatar26,
        id: 26
    },
    {
        url: Avatar27,
        id: 27
    },
    {
        url: Avatar28,
        id: 28
    },
    {
        url: Avatar29,
        id: 29
    },
    {
        url: Avatar30,
        id: 30
    },
];
    return(
        <>
        <div className={`grid ${styles.windowAvatar}`}>
        <WindowCloseBtn route={`${routes.authPage}/${routes.profileContent}`} />
        <div className={styles.avatarsContainer}>
            {avatarsArray.map((item, i) => <AvatarElement key={item.id} change avatar={item.url}/>)}
        </div>
      </div>
      <WindowOverlay position route={`${routes.authPage}/${routes.profileContent}`}/>
      </>
    );
};


export default ChangeAvatar;