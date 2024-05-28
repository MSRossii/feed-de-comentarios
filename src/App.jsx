import { useState } from "react";

export default function App() {
  const [author, setAuthor] = useState("");
  const [content, setContent] = useState("");

  return (
    <div id="app">
      <h2>Feed de comentários</h2>
      <form>
        <label htmlFor="author">Email</label>
        <input
          type="email"
          id="author"
          required
          value={author}
          onChange={(ev) => setAuthor(ev.target.value)}
        />
        <label htmlFor="content">Comentário</label>
        <textarea id="content" cols="30" rows="6"></textarea>
        <button type="submit">Enviar comentário</button>
      </form>

      <hr />

      <section id="comments">
        <div>
          <h3>author@email.com</h3>
          <span>Em 01/01/2001</span>
          <p>Comentário de exemplo...</p>
        </div>
      </section>
    </div>
  );
}
