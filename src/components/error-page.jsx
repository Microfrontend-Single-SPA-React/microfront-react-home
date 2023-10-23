import { useNavigate, useRouteError } from "react-router-dom";
import Link from "@mui/material/Link";

export default function ErrorPage() {
  const error = useRouteError();
  const navigate = useNavigate();
  console.error(error);

  return (
    <div className="error-page">
      <div className="error-page__container">
        <h1>Oops!</h1>
        <p>Sorry, an unexpected error has occurred.</p>
        <p>
          <i>{error.statusText || error.message}</i>
        </p>
        <Link component="button" variant="body2" onClick={() => navigate("/")}>
          Home
        </Link>
      </div>
    </div>
  );
}
