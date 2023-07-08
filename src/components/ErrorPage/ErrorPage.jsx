import { useRouteError } from "react-router-dom";

export const ErrorPage = () => {
  const error = useRouteError();

  return (
    <div>
      <p>{error?.message ?? 'Неопознанный летающий объект'}</p>
    </div>
  )
};
