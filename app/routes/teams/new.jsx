export default function NewJokeRoute() {
  return (
    <div>
      <p>Add a premier league team</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="name" />
          </label>
        </div>
        <div>
          <label>
            Primary Color: <input type="text" name="color" />
          </label>
        </div>
        <div>
          <label>
            Location: <input type="text" name="location" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
