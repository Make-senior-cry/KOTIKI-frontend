import Alert from '../ui/Alert';

export default function AuthLayout({ errorMessage, children }) {
  const showError = errorMessage.length > 0;

  return (
    <main className="container form-container py-5">
      {children}
      {showError && (
        <Alert type="danger" className="mt-5">
          {errorMessage}
        </Alert>
      )}
    </main>
  );
}
