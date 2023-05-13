import Navbar from '../components/Navbar/Navbar';

export default function DefaultLayout({ hero, children }) {
  return (
    <>
      <Navbar />
      <main className="container mx-auto py-4">
        <div className="mb-4">
          {hero}
        </div>
        {children}
      </main>
    </>
  );
}
