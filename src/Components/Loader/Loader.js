import "../../styles/Loader.css";
export const Loader = (props) => {
  if (props.isloading) return null;
  return (
    <div className="loader">
      <div className="book">
        <div className="inner">
          <div className="left" />
          <div className="middle" />
          <div className="right" />
        </div>
        <ul>
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
          <li />
        </ul>
        <span className={"pleaswait"}>در حال آماده سازی کتاب</span>
      </div>
    </div>
  );
};
