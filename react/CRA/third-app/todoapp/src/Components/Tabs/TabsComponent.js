// import styles from "./tabsStyle.module.css";
// import styles from "./tabsStyle.module.css";

const TabsComponent = (props) => {
  const { contentArray, getTabIndex, cuurentTabIndex } = props;
  function tabStyle(indx) {
    if (indx == cuurentTabIndex) {
      return "selected";
    } else {
      return "notSelected";
    }
  }

  const columns = contentArray.map((obj, index) => {
    return (
      <div className="col-3 p-3" key={index}>
        <div
          className={`inner ${tabStyle(index)}`}
          onClick={(e) => {
            clickHandler(e, index);
          }}
        >
          {obj.label}
        </div>
      </div>
    );
  });

  const clickHandler = (e, item) => {
    getTabIndex(item);
    // e.target.classList.toggle("selected");
  };
  return (
    <div className="row justify-content-center text-center">{columns}</div>
  );
};
export default TabsComponent;
