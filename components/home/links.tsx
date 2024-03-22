import styles from "@/styles/pages/home/links.module.css";

export default async function Links() {
  return (
    <div className={styles.linksContainer}>
      <h1>Customize your links</h1>
      <p>
        Add/edit/remove links below and then share all your profiles with the
        world
      </p>

      <button>+ Add new link</button>

      <form className={styles.links}>
        <div>
          <div>
            <p> = Link #1</p>
            <button>remove</button>
          </div>

          <div></div>

          <div>
            <label htmlFor="url">Link</label>
            <input
              type="text"
              id="url"
              name="url"
              placeholder="e.g., https://www.example.com/username"
            />
          </div>
        </div>
      </form>
    </div>
  );
}
