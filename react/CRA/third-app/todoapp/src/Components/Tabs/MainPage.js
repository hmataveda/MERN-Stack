import TabsComponent from "./TabsComponent";
import ContentComponent from "./ContentCompnent";
import { useState } from "react";

const contentDetails = [
  {
    label: "Tab 1",
    content: "You clicked Tab 1",
  },
  {
    label: "Tab 2",
    content: "You clicked Tab 2",
  },
  {
    label: "Tab 3",
    content: "You clicked Tab 3",
  },
  {
    label: "Tab 4",
    content: "You clicked Tab 3",
  },
];

const MainTabsPage = () => {
  const [cuurentTabIndex, setTabIndex] = useState(0);
  const getTabIndex = (idx) => {
    setTabIndex(idx);
  };

  return (
    <div className="container mt-4">
      <TabsComponent
        contentArray={contentDetails}
        getTabIndex={getTabIndex}
        cuurentTabIndex={cuurentTabIndex}
      ></TabsComponent>
      <ContentComponent
        contentArray={contentDetails}
        cuurentTabIndex={cuurentTabIndex}
      ></ContentComponent>
    </div>
  );
};
export default MainTabsPage;
