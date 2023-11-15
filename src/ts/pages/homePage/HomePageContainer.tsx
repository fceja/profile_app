import { connect } from "react-redux";

import HomePage from "@/ts/pages/homePage/HomePage";

const HomeContainer = connect()(HomePage);
HomeContainer.displayName = "HomeContainer";

export default HomeContainer;
