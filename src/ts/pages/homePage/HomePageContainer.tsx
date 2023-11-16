import { connect } from "react-redux";

import HomePage from "@pages/homePage/HomePage";

const HomeContainer = connect()(HomePage);
HomeContainer.displayName = "HomeContainer";

export default HomeContainer;
