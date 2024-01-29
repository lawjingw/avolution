import { isRouteErrorResponse, useRouteError } from "react-router-dom";

function ErrorBoundary() {
  let error = useRouteError();

  return (
    <div>
      <h1>Something went wrong 😢</h1>
      <p>{isRouteErrorResponse(error) ? error.data : error.message}</p>
    </div>
  );
}

export default ErrorBoundary;
