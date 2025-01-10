import SocialIcon from "../../components/SocialIcon/SocialIcon";
import "./NotFoundPage.scss";

import { useNavigate } from "react-router-dom";

function NotFoundPage() {
  const navigate = useNavigate();
  const onClickGoBack = () => {
    navigate("/");
  };

  return (
    <main className="not-found-main">
      <h1>404</h1>
      <p>Oops, This Page Not Found!</p>
      <img
        src={"/images/404.png"}
        alt="A visual representation for the 404 error."
      />
      <button className="button" onClick={onClickGoBack}>
        Go Back
      </button>
    </main>
  );
}

export default NotFoundPage;
