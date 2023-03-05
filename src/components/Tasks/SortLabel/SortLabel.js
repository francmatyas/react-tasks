import "./SortLabel.scss";

function SortLabel(props) {
  const sortLabels = [" ", "Date", "Favorite", "Title"];
  console.log(props.sort)
  return (
    <>
      {props.sort ? (
        <div className="tasks-sort__display">
          <div className="sort-arrow__label">{sortLabels[props.sort]}</div>
          <div className="tasks-sort__arrow">
            <i className="sort-arrow sort-arrow__up"></i>
            <div className="sort-arrow__line"></div>
            <i className="sort-arrow sort-arrow__down"></i>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
}

export default SortLabel;
