export default function App() {
  return (
    <div id="app">
      <h2>Feed de comentários</h2>
      <form>
        <label htmlFor="author">Email</label>
        <input type="email" id="author" required />
        <label htmlFor="content">Comentário</label>
        <textarea id="content" cols="30" rows="6"></textarea>
        <button type="submit">Enviar comentário</button>
      </form>
    </div>
  );
}
