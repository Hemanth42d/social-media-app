const LoadingSpinner = () => {
  return (
    <>
      <center>
        <div
          className="spinner-border"
          style={{ width: "5rem", height: "5rem", margin: "5rem 0" }}
          role="status"
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </center>
    </>
  );
};

export default LoadingSpinner;
