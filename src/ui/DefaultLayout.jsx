import Navbar from '../components/Navbar/Navbar';
import Alert from './Alert';

export default function DefaultLayout({ hero, children, errorMessage }) {
  const showError = errorMessage.length > 0;

  return (
    <>
      <Navbar />
      <main className="container mx-auto py-4">
        <div className="mb-4">
          {hero}
        </div>
        {!showError
          ? children
          : (
            <Alert type="danger" className="mt-5">
              {errorMessage}
            </Alert>
          )}
      </main>
    </>
  );
}
