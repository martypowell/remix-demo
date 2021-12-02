import { useLoaderData } from "remix";
import { Link } from "react-router-dom";

import stylesUrl from "../styles/index.css";

export function meta() {
  return {
    title: "Remix Starter",
    description: "Welcome to remix!"
  };
}

export function links() {
  return [{ rel: "stylesheet", href: stylesUrl }];
}

export function loader() {
  return { message: "this is awesome 😎" };
}

export default function Index() {
  let data = useLoaderData();

  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h1>Welcome to Remix on CodeSandbox!</h1>
      <p>
        <a href="/standings">Standings</a>.
      </p>
      <p>Message from the loader: {data.message}</p>
      <p>
        <Link to="not-found">Link to 404 not found page.</Link> Clicking this
        link will land you in your root CatchBoundary component.
      </p>
    </div>
  );
}
