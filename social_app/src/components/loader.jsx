const loader = () => {
  return (
    <>
      <div className="d-flex justify-content-center loader ">
        <div
          className="spinner-border"
          role="status"
          style={{ width: "80px", height: "80px" }}
        >
          <span className="visually-hidden">Loading...</span>
        </div>
      </div>
    </>
  );
};
export default loader;