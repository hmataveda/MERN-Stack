const ContentComponent = (props) => {
  const { contentArray, cuurentTabIndex } = props;
  return <div className="content">{contentArray[cuurentTabIndex].content}</div>;
};
export default ContentComponent;
