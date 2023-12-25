import { AspectRatio, IconButton, LinearProgress, Typography } from "@mui/joy";
import "@fontsource/inter";
import CheckBoxIcon from "@mui/icons-material/CheckBox";
import CheckIcon from "@mui/icons-material/Check";
import { Check, Close } from "@mui/icons-material";
import "./SuccessMessageIcon.css";

import styles from "./SuccessMessage.module.scss";
import CtaButton from "../small components/CtaButton/CtaButton";
import { useNavigate } from "react-router-dom";

export default function SuccessMessage() {
  const navigate = useNavigate();
  return (
    <div className={styles.successContainer}>
      <div className={styles.successWindow}>
        {/* <CheckIcon className="successIcon"/> */}
        <AspectRatio
          className={"successAspectRatio"}
          variant="solid"
          ratio="1"
          color="-"
          sx={{
            minWidth: 50,
            borderRadius: "50%",
            boxShadow: "0 2px 12px 0 rgb(0 0 0/0.2)",
            color: "#fff",
          }}
        >
          <div>
            {/* <Check fontSize="xl3" sx={{f}} /> */}
            <CheckIcon className={"successIcon"} color="success" />
          </div>
        </AspectRatio>
        <div className={styles.successTextContainer}>
          <h3>Success</h3>
          <p>to complete registration, verify your email address</p>
        </div>
        <LinearProgress color="success" className={styles.successLinear} />
      </div>
      <CtaButton
        type="success"
        onClick={function () {
          navigate("/auth/login");
        }}
      >
        Sign in
      </CtaButton>
    </div>
  );
}
