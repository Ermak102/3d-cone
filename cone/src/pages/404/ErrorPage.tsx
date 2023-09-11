import { useNavigate } from "react-router-dom";
import styles from "./ErrorPage.module.scss";

const ErrorPage = () => {
  const navigate = useNavigate();

  const redirectToHome = () => {
    navigate("/");
  };

  return (
    <div className={styles.page}>
      <img src="assets/404-page.png" alt="something" />
      <button className="button" onClick={() => redirectToHome()}>
        Redirect
      </button>
    </div>
  );
};

export default ErrorPage;
