import './Error.css';

const Error = ({ error }) => {
  console.error(error);

  return (
    <div className="error">
      <h1>Oops!</h1>
      {error?.code === 'ERR_BAD_REQUEST' ? (
        <p>No match was found.</p>
      ) : (
        <p>Something went wrong.</p>
      )}
    </div>
  );
}

export default Error;
