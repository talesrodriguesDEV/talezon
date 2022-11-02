export default function Layout({ children }) {
  return (
    <div className='layout'>
      <header>Vamo!</header>
      <main>
        { children }
      </main>
      <footer>Tales Rodrigues</footer>
    </div>
  );
}
