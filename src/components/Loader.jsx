const Loader = () => (
  <div className="d-flex justify-content-center container align-items-center" style={{ height: '100vh' }}>
    <div className="spinner-border text-danger" role="status" style={{ width: '5rem', height: '5rem' }}>
      <span className="visually-hidden">Loading...</span>
    </div>
  </div>
);

export default Loader;
