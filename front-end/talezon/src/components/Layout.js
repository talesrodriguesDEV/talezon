export default function Layout({ children }) {
  return (
    <div className='min-h-screen flex flex-col justify-between bg-[#FCF7FF]'>
      <header className='p-10 bg-[#A4969B] text-[#FCF7FF]'>Vamo!</header>
      <main>
        { children }
      </main>
      <footer className='bg-[#878C8F] text-center text-[#FCF7FF] p-2'>Tales Rodrigues DEV</footer>
    </div>
  );
}
