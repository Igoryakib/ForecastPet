import { useNavigate, useLocation } from "react-router-dom";
import styles from "./Nav.module.scss";

const Nav = function () {
  const navigate = useNavigate();
  const location = useLocation();
  const isAuth = location.pathname.split("/")[1];

  return (
    <div className={`${styles.container}`}>
      <div className={styles.button} onClick={() => navigate("auth/login")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="30"
          viewBox="0 0 22 30"
          fill="none"
          className={`${styles.icon} ${isAuth === "auth" ? styles.active : ""}`}
          // className={`${styles.icon} ${location.pathname === '/authentication' ? styles.active : ''}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11 29.142C5.60619 29.142 1 28.3026 1 24.9412C1 21.5797 5.57697 18.4766 11 18.4766C16.3938 18.4766 21 21.5496 21 24.9111C21 28.2712 16.423 29.142 11 29.142Z"
            stroke="#555555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M10.9894 13.8184C14.5291 13.8184 17.398 10.9495 17.398 7.40988C17.398 3.87024 14.5291 1 10.9894 1C7.44978 1 4.57951 3.87024 4.57951 7.40988C4.56759 10.9376 7.41657 13.8065 10.9443 13.8184C10.9602 13.8184 10.9748 13.8184 10.9894 13.8184Z"
            stroke="#555555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {isAuth === "auth" && (
          <>
            <div className={styles.activeIndicatorBorder}></div>
            <div className={styles.activeIndicatorOverlay}></div>
          </>
        )}
      </div>
      <div className={styles.button} onClick={() => navigate("/")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="28"
          viewBox="0 0 28 28"
          fill="none"
          className={`${styles.icon} ${
            location.pathname === "/" ? styles.active : ""
          }`}
          // className={`${styles.icon} ${location.pathname === '/' ? styles.active : ''}`}
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 6.30649C27 9.23663 24.6236 11.613 21.6935 11.613C18.7634 11.613 16.3883 9.23663 16.3883 6.30649C16.3883 3.37635 18.7634 1 21.6935 1C24.6236 1 27 3.37635 27 6.30649Z"
            stroke="#555555"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6117 6.30649C11.6117 9.23663 9.23664 11.613 6.30519 11.613C3.37635 11.613 1 9.23663 1 6.30649C1 3.37635 3.37635 1 6.30519 1C9.23664 1 11.6117 3.37635 11.6117 6.30649Z"
            stroke="#555555"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M27 21.6003C27 24.5304 24.6236 26.9054 21.6935 26.9054C18.7634 26.9054 16.3883 24.5304 16.3883 21.6003C16.3883 18.6701 18.7634 16.2938 21.6935 16.2938C24.6236 16.2938 27 18.6701 27 21.6003Z"
            stroke="#555555"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M11.6117 21.6003C11.6117 24.5304 9.23664 26.9054 6.30519 26.9054C3.37635 26.9054 1 24.5304 1 21.6003C1 18.6701 3.37635 16.2938 6.30519 16.2938C9.23664 16.2938 11.6117 18.6701 11.6117 21.6003Z"
            stroke="#555555"
            strokeWidth="1.3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {location.pathname === "/" && (
          <>
            <div className={styles.activeIndicatorBorder}></div>
            <div className={styles.activeIndicatorOverlay}></div>
          </>
        )}
      </div>
      <div className={styles.button} onClick={() => navigate("options")}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="28"
          height="25"
          viewBox="0 0 28 25"
          fill="none"
          className={`${styles.icon} ${
            location.pathname === "/options" ? styles.active : ""
          }`}
        >
          <path
            d="M11.5332 19.7133H1.00067"
            stroke="#555555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M18.1418 19.7148C18.1418 23.0373 19.2498 24.1438 22.5709 24.1438C25.892 24.1438 27 23.0373 27 19.7148C27 16.3922 25.892 15.2857 22.5709 15.2857C19.2498 15.2857 18.1418 16.3922 18.1418 19.7148Z"
            stroke="#555555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M16.4684 5.43124H26.9994"
            stroke="#555555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M9.85959 5.42907C9.85959 2.10799 8.7516 1 5.43052 1C2.10799 1 1 2.10799 1 5.42907C1 8.7516 2.10799 9.85814 5.43052 9.85814C8.7516 9.85814 9.85959 8.7516 9.85959 5.42907Z"
            stroke="#555555"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {location.pathname === "/options" && (
          <>
            <div className={styles.activeIndicatorBorder}></div>
            <div className={styles.activeIndicatorOverlay}></div>
          </>
        )}
      </div>
    </div>
  );
};

export default Nav;
