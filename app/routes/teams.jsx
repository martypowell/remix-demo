import { Outlet } from "remix";

export default function JokesRoute() {
  return (
    <div>
      <h1>Teams Show Here</h1>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
