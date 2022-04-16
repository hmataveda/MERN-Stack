import Header from "./Header";
import Main from "./MainSection";
import Navigation from "./Navigation";
const PlottingBlocks = () => {
  return (
    <div className=" app container border border-3 border-secondary h-100 pb-2">
      <Header></Header>
      <div className="row mt-3">
        <Navigation></Navigation>
        <Main></Main>
      </div>
    </div>
  );
};

export default PlottingBlocks;
